
class InsertionSort extends SortingAlgorithm {
    constructor() {
        super();
    }
    
    sort(arr) {
        
        let sa = arr;
        let pivot = undefined;
        let value = undefined;
        
        for (let i = 1; i <= sa.length-1; i++) {
            pivot = i;
            value = sa[i];
            
            while (value < sa[pivot-1] && pivot > 0) {
                this.swap(sa, pivot, pivot-1);
                pivot--;
            }
        }
        return sa;   
    }
}

export default InsertionSort; 