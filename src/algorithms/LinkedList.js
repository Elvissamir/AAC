
import SingleLinkedNode from './SingleLinkedNode'

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.structure = [];
        this.length = 0;
    }
    
    addFirst(value) {
        let newNode = new SingleLinkedNode(value);
        
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
            
            this.length++;
            return newNode;
        }
        
        newNode.next = this.head;
        this.head = newNode;
        
        this.length++;
        return newNode;
    }
    
    add(value, index) {
        let newNode = new SingleLinkedNode(value);
        
        if (index == 0) {
            return this.addFirst(value);
        }
        else if (index >= this.length) {
            return this.addLast(value);
        }
        
        let count = 0;
        let cn = this.head;
        
        while (count != index - 1) {
            cn = cn.next;
            count ++;
        }
        
        newNode.next = cn.next;
        cn.next = newNode;
        
        this.length++;
        return newNode;
    }

    addLast(value) {
        let newNode = new SingleLinkedNode(value);
        
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
            
            this.length++;
            return newNode;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        
        this.length++;
        return newNode;
    }
    
    indexOf(value) {
        let currentNode = this.head;
        let index = 0;
        
        if (this.length == 0)
            return -1;
        
        while (currentNode != null && currentNode.val != value) {
            currentNode = currentNode.next;
            index++;
        }
        
        if (!currentNode) {
            return -1;
        }
        
        return index;
    }
    
    contains(value) {
        let exists = false;
        
        if (this.head) {
            let currentNode = this.head;
        
            while (currentNode != null && exists == false) {
                if (currentNode.val == value)
                    exists = true;
                else 
                    currentNode = currentNode.next;
            }
        }
        
        return exists;
    }
    
    removeFirst() {
        if (this.length == 0)
            return false;
        
        let deletedNode = this.head;
        
        this.head = deletedNode.next;
        deletedNode.next = null;
        
        this.length--;
        return true;
    }
    
    removeLast() {
        if (this.length == 0) {
                return false;
        }
        else if (this.length == 1) {
            return this.removeFirst();
        }
        
        let currentNode = this.head;
        
        while (currentNode.next.val != this.tail.val) {
            currentNode = currentNode.next;
        }
        
            currentNode.next = null;
            this.tail = currentNode;

            this.length--;
            return true;
    }
    
    remove(value) {
        if (value == this.head.val)
            return this.removeFirst();
        
        if (value == this.tail.val)
            return this.removeLast();
        
        let currentNode = this.head;
        let deleteNodeindex = this.indexOf(value);
        let index = 0;
        
        while (index < deleteNodeindex-1) {
            currentNode = currentNode.next;
            index++;
        }
        
        let deletedNode = currentNode.next;
        currentNode.next = deletedNode.next;
        deletedNode.next = null;
        
        this.length--;
        return deletedNode;
    }
    
    generateArr() {
        if (this.length > 0) {
            this.registerNodes();
        }
        else {
            this.structure = []
        }
        return this.structure;
    }
    
    registerNodes() {
        let cn = this.head;
        let ln = this.tail;
        let arr = [];
        let delay = 200;
        
        while (cn.next != null) {
            arr.push(cn.val);
            cn = cn.next;
        }
        
        arr.push(ln.val);
        
        this.structure = arr;
    }
}

export default LinkedList;


