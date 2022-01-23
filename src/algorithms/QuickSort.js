
class QuickSort extends SortingAlgorithm {
    
    constructor() {
        super();
    }
    
    sort(arr) {
        
        let sa = arr;
        
        return this.quickSort(sa);
    }
    
    quickSort(sa) {
        
        if (sa.length > 1) {
            
            let lp = 0;
            let rp = sa.length - 1;
            let pivot = this.pivot(rp);
            let posa = 0;
            let posb = 0;
            
            while (lp <= pivot && rp >= pivot) {
            
                for (lp; lp <= pivot; lp++) {
                    
                    if (sa[lp] >= sa[pivot]) {
                        posa = lp;
                        lp++;
                        break;
                    }
                }

                for (rp; rp >= pivot; rp--) {

                    if (sa[rp] <= sa[pivot]) {
                        posb = rp;
                        rp--;
                        break;
                    }
                }
                
                this.swap(sa, posa, posb);
            }
            
            
            let left = this.quickSort(sa.slice(0, pivot+1));
            let right = this.quickSort(sa.slice(pivot+1));
        
            let result = left.concat(right);
            
            return result;
        }
        
        return sa;
    }

    
    pivot(length) {
        return Math.ceil((length - 1)/2);
    }
}

export default QuickSort;