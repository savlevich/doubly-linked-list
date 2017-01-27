const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._tail = null;
    this._head = null;
     
  }

  append(data) {
    var newNode = new Node(data, this._tail);

    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
    this.length++;
    return this;
  }

  head() {
    return this._head ? this._head.data : null;
  }

  tail() {
    return this._tail ? this._tail.data : null;
  }

  at(index) {
    var node = this._head;
    var count = 0;
    
    if (index < 0 || index > this.length - 1) {
        throw new Error("incorrect index");
    };

    if (index === 0) {
      return this._head.data;
    } else if (index === this.length - 1) {
      return this._tail.data;
    } else {    
      while (count !== index ) {
        node = node.next;
        count++;
      } 
      return node.data;
    }
    
  }

  insertAt(index, data) {
    var newNode = new Node(data);

    if (index === 0) {
      if (this._head === null) {
        this.append(data);
      } else {
        newNode.next = this._head;
        this._head.prev = newNode;
        this._head = newNode;
      }

    } else if (index < 0 || index > this.length - 1) {
      throw new Error("incorrect index");

    } else if (index === this.length - 1) {
        newNode.next = this._tail;
        newNode.prev = this._tail.prev;
        this._tail.prev.next = newNode;
        this._tail.prev = newNode;
    } else {
      var currentNode = this._head;
      var count = 0;
    
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      } 
      newNode.next = currentNode;
      newNode.prev = currentNode.prev;
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
    }

    this.length++;
    return this;
  }

  isEmpty() {
    return (this.length === 0);
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;

    return this;
  }

  deleteAt(index) {

      var count = 0;
      var currentNode = this._head;
      
      if ( this.isEmpty() ) {
        throw new Error("List is empty");
      }

      if (index < 0 || index > this.length - 1) { 
          throw new Error("incorrect index");
      } else if (index === 0) { 
          if (this._head.next == null) {
            this._head = null;
            this._tail = null;
          } else {
            this._head = this._head.next;
            this._head.prev = null;
          }

      } else if (index === this.length - 1) {    
        this._tail.prev.next = null;
        this._tail = this_tail.prev;
      } else {    
        while (count !== index ) {
          currentNode = currentNode.next;
          count++;
        } 
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
      }
      
      this.length--;
      return this;
    }

  reverse() {
    var temp = null;
    var currentNode = this._head;

    while (currentNode != null) {
      temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
      currentNode = temp;
    }

    temp = this._head;
    this._head = this._tail;
    this._tail = temp;

    return this;
  }

  indexOf(data) {
    for (var i = 0; i < this.length; i++) {
      if (this.at(i) == data) {
        return i;
      }
    }

        return -1;   
  }

}

module.exports = LinkedList;