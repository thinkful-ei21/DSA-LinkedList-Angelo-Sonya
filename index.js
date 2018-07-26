const util = require('util');

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

    insertBefore(node, value) {
        if (!this.head) {
            return null;
        }
        //this.head = 0, next == 1
        let previousNode = this.head // == 0
        let currentNode = this.head; // == 0
        //console.log(currentNode, node); 
        //currentNode.next should probably not equal null. if it is null it will keep trying to find it by re-assigning the variables.
        //so if currentNode.val is 5 and node = 3. that is true because !== and if currentNode.next = null , the second part is true as well which will make it do the actions after. assigning the variables. so this will loop forever (i think)

        //if this.head === value, create, next = this.head, this.head = new node
        //start = 0
        //next = 0,
        //start 0, next 1
        
        if (previousNode.value === node) {
        	return this.insertFirst(value);
        }

        while (currentNode.value !== node && currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode.next === null) {
            console.log(`${node} not found`);
            return;
        } else {
            previousNode.next = new _Node(value, currentNode);
        }
    }

    insertAfter(node, value) {
        // find the node
        // use while loop to search LL for node
        // if the node is not found, console log a message
        // if it's found, set the previous node to the value and point it at current.next
        let previousNode = this.head;
        let currentNode = this.head;

        if (previousNode === node) {
            return this.insertFirst(value);
        }

        while (currentNode.value !== node && currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode.next === null) {
            console.log(`${node} not found`);
            return;
        } else {
            //console.log('previousNode.next:', previousNode.next)
            previousNode.next = new _Node(value, previousNode.next)
        }
        
    }

    insertAt(newValue, location) {
        // find the location
        // use while loop to find the location in the LL
        // when location is found, set the previous.next to the newValue with newValue pointing to current.next

        let previousNode = this.head;
        let currentNode = this.head;
        let counter = 1;

        if (previousNode.value === newValue) {
            return this.insertFirst(newValue)
        }

        while (counter !== location  && currentNode.next !== null) {
            previousNode = currentNode; 
            currentNode = currentNode.next; 
            counter++;
        }
        if (currentNode.next === null) {
            console.log(`${location} not found`);
        return;
        } else {
            previousNode.next = new _Node(newValue, currentNode.next)
        }
    }
}

function main() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    SLL.insertFirst('Tauhida');
    SLL.remove('squirrel');
    SLL.insertBefore('Boomer', 'Athena');
    SLL.insertAfter('Helo', 'HotDog');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');

    let temp = new LinkedList();
    
    // console.log(display(SLL));
    // console.log(size(SLL));
    // console.log(isEmpty(temp));
    // console.log(findPrevious(SLL, 'Kat'));
    // console.log(findLast(SLL));
    console.log(reverse(SLL));
}

main();


function display(list) {
    //iterate through the list
    //add each list element to an array
    //return our array
    let current = list.head;
    
    while (current.next !== null) {
        console.log(current);
        current = current.next;
    }
}

function size(list) {
    let counter = 1;
    let current = list.head;
    
    while (current.next !== null) {
        counter++;
        current = current.next;
    }
    return counter;
}

function isEmpty(list) {
    if (list.head === null) {
        return true;
    } else return false;
}

function findPrevious(list, value) {
    let current = list.head; //0
    let prev = list.head; //0

    if (current.next === null) {
        return current;
    }
    
    while (current.value !== value && current.next !== null) {
        prev = current;
        current = current.next;
    }

    return prev;
}

function findLast(list) {
    let current = list.head;
    let prev = list.head;

    if (current.next === null) {
        return current;
    }

    while (current.next !== null) {
        prev = current;
        current = current.next;
    }

    return current;
}

function WhatDoesThisProgramDo(lst){

    let current = lst.head; //current = value: 1, next: 2

    while(current !== null){ 
        
        let newNode = current; // newnode = value: 1, next: 2

        while (newNode.next !== null) {
            if (newNode.next.value === current.value) { // does 2 equal 1
                newNode.next = newNode.next.next; // 2 is equal to 3
            }
            else{
                newNode = newNode.next; // 1 becomes 2
            }
        }
        current = current.next; // 1 = 2
    }
}

// this program runs through the linked list and sets each node to the same value as the node before it
// O(n^2)

function reverse(list) {
    
}

