class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        this.head = new _Node(value, this.head)
    }   

    insertLast(value) {
        if (this.head === null) {
            this.insertFirst(value);
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            } 
            temp.next = new _Node(value, null)
        }
    }

    remove(value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let prevNode = this.head;
        let currentNode = this.head;

        while ((currentNode !== null) && (currentNode.value !== value)) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode === null) {
            console.log('item not found');
            return;
        }

        prevNode.next = currentNode.next;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            return this.head;
        }

        let currentNode = this.head;

        while (currentNode.value !== value) {
            if (currentNode.next === null) {
                return null;
            } else {
                currentNode = currentNode.next;
            }
        }

        return currentNode;
    }
}

function main() {
    

}

main();