function Node(data, next = null) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
}

LinkedList.prototype.print = function () {
    let str = 'LinkedList{';
    let nextOne = this.head;
    while (nextOne) {
        str += nextOne.data + ',';
        nextOne = nextOne.next;
    }
    return str + '}';
}

LinkedList.prototype.remove = function (data) {
    let currentNode = this.head;
    let previousNode;
    if(currentNode.data === data){
        this.head = currentNode.next;
    } else {
        while(currentNode.data !== data) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }
}

let linkedList = new LinkedList();
linkedList.add(1); //linkedList.head.data
linkedList.add(2); //linkedList.head.next.data
linkedList.add(3); //linkedList.head.next.next.data

linkedList.remove(2);

console.log(linkedList.print());