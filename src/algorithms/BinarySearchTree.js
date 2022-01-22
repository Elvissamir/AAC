
import SingleNode from './SingleNode'

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.structure = [];
        this.levels = null;
        this.graph = [];
    }
    
    createChild(val) {
        let newNode = new SingleNode(val);
        
        return newNode; 
    }
    
    insertChild(val) {
        
        let newNode = this.createChild(val);
        let currentNode = this.root;
        
        if (currentNode == null) {
            this.root = newNode;
            return newNode;
        }
        
        while (currentNode != null) {
            
            if (newNode.val < currentNode.val) {
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    break;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
            else {
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    break;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
            
        }
        
        return newNode;
    }
    
    search(value) {
        
        let exist = false;
        let node = null;
        
        if (this.root != null) {
            
            let currentNode = this.root;
            
            while (currentNode != null) {
                   
                if (currentNode.val == value) {
                    node = currentNode;
                    break;
                }else {
                    if (value < currentNode.val) {
                        currentNode = currentNode.left;
                    }else {
                        currentNode = currentNode.right;
                    }
                }
            
            }
            
        }
        
        return node;
    }
    
    childrens(node) {
        if (node.left != null && node.right != null)
            return [node.left.val, node.right.val];
        else if (node.left != null)
            return [node.left.val, '-'];
        else if (node.right != null)
            return ['-', node.right.val];
        else 
            return ['-', '-'];
    }
    
    traverse() {
        let currentNode = this.root;
        let queue = [];
        let childCount = {};
        let result = {};
        
        this.structure = [];
        
        queue.push(currentNode);
        
        while (queue.length > 0) {
            
            this.structure.push(currentNode.val);
            
            childCount[currentNode.val] = this.childrens(currentNode);
                
            if (currentNode.left != null)
                queue.push(currentNode.left);
            if (currentNode.right != null)
                queue.push(currentNode.right);
        
            queue.shift();
            currentNode = queue[0];
        }
        
        this.levels = (this.structure.length - 1)/2;
        
        result['structure'] = this.structure;
        result['children'] = childCount;
        
        return result;
    }
    
    graphicTree() {
        
        let queue = [];
        let delimiter = 'L';
        let emptyChild = '-';
        let current = null;
        let childCount = {};
        let result = {};
        
        this.graph = [];
        
        queue.push(this.root);
        queue.push(delimiter);
        
        while (queue.length > 0) {
            
            current = queue[0];
            queue.shift();

            if (current == null) {
                result['arr'] = [];
                result['obj'] = {};
                break
            }
            
            if (current != delimiter && current != emptyChild) {

                childCount[current.val] = this.childrens(current);
            
                this.graph.push(current.val);

                if (current.left != null) {
                    queue.push(current.left);   
                }
                else {
                    queue.push(emptyChild);   
                }

                if (current.right != null) {
                        queue.push(current.right);        
                }
                else {
                    queue.push(emptyChild);   
                }
            }
            else {
                this.graph.push(current);
                
                if (queue.length == 0) 
                    break;
                
                if(current == delimiter) {
                   queue.push(delimiter);   
                }
            }
        }
        
        result['arr'] = this.graph;
        result['obj'] = childCount;
        
        return result;
    }
    
    findMinValue (node) {
        
        while (node.left !== null) {
            node = node.left;
        }
        
        return node.val;
    }
    
    remove(value, node) {
        
       if (this.root) {
           
            // initialize node
            if (!node) {
                this.root = this.remove(value, this.root);
            } else if (value < node.val && node.left) {
                node.left = this.remove(value, node.left);
            } else if (value > node.val && node.right) {
                node.right = this.remove(value, node.right);
            } else if (value === node.val) {
                // check if node is a leaf node
                if (node.left && node.right) {
                    // node has two children. change its value to the min
                    // right value and remove the min right node
                    node.val = this.findMinValue(node.right);
                    node.right = this.remove(node.val, node.right);
                } else {
                    // replace the node with whichever child it has
                    node = node.left || node.right;
                }
            }
            return node;
        }
    }
    
    draw() {
        
        let arr = this.graphicTree().arr;
        let obj = this.graphicTree().obj;
        let levels = [];
        
        //console.log(arr);
        
        /*SHow arr*/
        let arrStr = '';
        for (let item of arr) {
            arrStr = arrStr + ' ' + item;
        }
        
        //console.log(arrStr);
        
        //console.log(obj);
        
        while (arr.length > 0) {
            if (arr[0] == 'L') {
                arr.shift();
            }
            else {
                let idx = arr.indexOf('L');
                let level = arr.slice(0, idx);
                levels.push(level);
                arr.splice(0, idx+1);
            }
            
            //console.log(levels);
            //console.log(arr);
        }
        
        //console.log('levels: ',levels);
        levels.pop();
        //console.log('levels: ',levels);
        
        /*Adding empty placeholders*/
        let childrenCount = 2;
        let result = levels;
        
        for (let i = 1; i < levels.length; i++) {
            //console.log(levels);
            
            if (levels[i].length < childrenCount) {
                //console.log(levels[i], childrenCount);
                //console.log(result);
                result.splice(i, 1);
                //console.log(result);

                let level = [];
                
                for (let val of levels[i-1]) {
                    if (!obj[val])
                        level = level.concat(['-', '-']);
                    else
                        level = level.concat(obj[val]);
                }
                result.splice(i, 0, level);
            }
            
            childrenCount = childrenCount*2;
        }
        
        //console.log('result:', result);
        
        return result;
    }   
}

export default BinarySearchTree;









