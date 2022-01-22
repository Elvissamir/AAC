
class SingleNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    
    childCount() {
        if (this.left == null && this.right == null) {
            return 0;
        }
        else if (this.left == null || this.right == null) {
            return 1;
        }
        else {
            return 2;
        }
    }
}

export default SingleNode;