class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    print() {
        let str = 'LinkedList{';
        let nextOne = this.head;
        while (nextOne) {
            str += nextOne.data + ',';
            nextOne = nextOne.next;
        }
        return str + '}';
    }
    remove(data) {
        let currentNode = this.head;
        let previousNode;
        if (currentNode.data === data) {
            this.head = currentNode.next;
        } else {
            while (currentNode.data !== data) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }
    }
}

let linkedList = new LinkedList();
linkedList.add(1); //linkedList.head.data
linkedList.add(2); //linkedList.head.next.data
linkedList.add(3); //linkedList.head.next.next.data

console.log(linkedList);
linkedList.remove(2);
console.log(linkedList);
console.log(linkedList.print());