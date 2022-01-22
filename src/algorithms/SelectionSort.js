
class SelectionSort extends SortingAlgorithm {
    constructor() {
        super();
        
        this.minValue = undefined;
        this.pos = undefined;
    }
    
    sort(arr) {
        
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                this.swap(arr, i, min);
            }
        }
        return arr;
    }
}

export default SelectionSort