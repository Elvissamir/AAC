
class Dsp {
    constructor() {
      //Previous node after update of distance
      this.prev = {};
      //Distances of each node
      this.distances = {};
      //Array of unvisited neighbors
      this.unvisitedn = [];
      //Path of visited nodes from first to final node
      this.path = [];
    }
  
    findsp(graph, start, end) {
  
      //Register graph data 
      this.registerGraphData(graph, start);
  
      //Set the starting node as the current node
      let cn = start;
  
      //While there are unvisited nodes
      while (this.unvisitedn.length > 0) {
        //Mark the currentNode as visited
        this.markAsVisited(cn);
  
        //Compare distance from current node to unvisited neighbors
        let nodes = this.compareNodeDistances(graph, cn);
  
        //Update neighbor distance
        this.updateNodeDistances(nodes, cn);
  
        //Compare each unvisited neighbor and choose the one with the lowest distances
        //Set the choosed node as the new current node
        cn = this.selectNextNode(graph, cn);
      }
  
      return this.generatePath(start, end);
    }
  
    registerGraphData(graph, start) {
       
      this.initializeProperties();
  
      //Set starting weight for all nodes
      const higherWeight = 10000;
  
      //For each node in the graph
      for (let node in graph) {
        //If the node is the starting node 
        if (node == start)
          //Set starting weight as 0
          this.distances[node] = 0;
        //else set the higherWeight
        else
          this.distances[node] = higherWeight;
  
        //Add to the unvisited nodes
        this.unvisitedn.push(node);
      }
    }
      
    initializeProperties() {
      //Initialize all properties
      this.path = [];
      this.prev = {};
      this.distances = {};
      this.unvisitedn = [];
    }
  
    markAsVisited(cn) {
  
      let index = this.unvisitedn.indexOf(cn);
      this.unvisitedn.splice(index, 1);
    }
  
    getUnvisitedNeighbors(graph, cn) {
  
      //All current node neighbors
      let nbs = graph[cn];
      let unbs = [];
  
      for (let nb in nbs) {
        if (this.unvisitedn.includes(nb))
          unbs.push(nb);
      }
  
      return unbs;
    }
  
    compareNodeDistances(graph, cn) {
  
      let unbs = this.getUnvisitedNeighbors(graph, cn);
  
      //new distances
      let newDistances = {};
  
      //For all currentNode neighbors
      for (let nb of unbs) { //Substituted unbs
  
        //Neighbor Weight
        let nbw = graph[cn][nb];
        //console.log('Neighbor weight', nbw);
  
        //neighbor distance
        let nbd = this.distances[nb];
        //console.log('Neighbor distance', nbd);
  
        //current node distance
        let cnd = this.distances[cn];
        //console.log('Current node distance', cnd);
  
        //If the neighbor distance > current node distance + neighbor weight
        if (nbd > cnd + nbw)
          newDistances[nb] = cnd + nbw;
      }
        
      return newDistances;
    }
  
    updateNodeDistances(nodes, cn) {
  
      //Update distances for each neighbor that was compared
      for (let node in nodes) {
        this.distances[node] = nodes[node];
        this.prev[node] = cn;
      }
    }
  
    selectNextNode(graph, cn) {
      let mindist = 10000;
      let best;
      for (let node of this.unvisitedn) {
          if (this.distances[node] < mindist) {
              mindist = this.distances[node];
              best = node;
          }
      }
      return best;
  }
  
    generatePath(start, end) {
  
      let cn = end;
      let path = {};
      let nodes = [];
        
      while (cn !== start) {
        nodes.push(cn);
        cn = this.prev[cn];
      }
        
      nodes.push(start);
      nodes.reverse();
  
      path['nodes'] = nodes;
      path['distance'] = this.distances[end];
  
      return path;
    }
  }
  
export default Dsp
  
  
  
  
  
  
  