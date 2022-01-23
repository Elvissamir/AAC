
class MergeSort extends SortingAlgorithm {
    constructor() {
        super();
    }
    
    sort(arr) {
        let sa = arr;
            
        return this.sliceArr(sa);
    }
    
    sliceArr(arr) {
        
        if (arr.length > 1) {
            
            let middle = Math.floor(arr.length / 2);
            
            let left = this.sliceArr(arr.slice(0, middle));
            let right = this.sliceArr(arr.slice(middle));
            
            let sa = this.joinArr(left, right);
            
            return sa;
        }
        
        return arr;
    }
    
    joinArr(a, b) {
        
        let result = [];
        let index = 0;
           
        while(a.length > 0 && b.length > 0) {
            if (a[index] > b[index]) {
                result.push(b[index]);
                b.shift();
            }else {
                result.push(a[index]);
                a.shift();
            }
        }
        
        if (a.length > 0) {
            for (let i = 0; i <= a.length - 1; i++) {
                result.push(a[i]);
            }
        }
        
        if (b.length > 0) {
             for (let i = 0; i <= b.length - 1; i++) {
                result.push(b[i]);
            }
        }
        
        return result;
    }
}

export default MergeSort;