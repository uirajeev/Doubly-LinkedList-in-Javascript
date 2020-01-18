
// Linked List Constructors Function
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Node Constructors Function
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Add node to head method
LinkedList.prototype.addToHead = function (value) {
  var node = new Node(value, this.head, null);
  if(this.head) this.head.prev = node;
  else this.tail = node;
  this.head = node;
}

// Add node to tail method
LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value, null, this.tail)
  if(this.tail) this.tail.next = node;
  else this.head = node;
  this.tail = node;
}

// Search node from Linked List method
LinkedList.prototype.search = function(value) {
  var currentNode = this.head;
  while(currentNode) {
    if(currentNode.value === value) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return null;
}

// find indexes of a node by there value
LinkedList.prototype.indexOf = function (value) {
  var currentNode = this.head;
  var index = 0;
  
  while(currentNode.value !== value) {
    currentNode = currentNode.next;
    index ++;
  }
  return index;
}

// Delete head of Linked List
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

// Delete tail of Linked List
LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.prev = null;
  else this.head = null;
  return val;
}

// Delete Node from Linked List by index
LinkedList.prototype.deleteNode = function(index) {
  if (index === 0) return null;
  var currentNode = this.head;
  var count = 0;
  while (count < index) {
      count ++;
      currentNode = currentNode.next;
  }
  currentNode.prev.next = currentNode.next;
  currentNode.next.prev = currentNode.prev;
  return currentNode;
}

// Insert a node on given index 
LinkedList.prototype.insertAt = function (value, index) {
  if (index === 0) {
    this.addToHead(value);
    return this.head;
  }
  var count = 0;
  var currentNode = this.head;
  while (count < index && currentNode) {
    count ++;
    currentNode = currentNode.next;
  }
  if (count === index && currentNode) {
    var node = new Node(value);
    node.next = currentNode;
    node.prev = currentNode.prev;
    currentNode.prev = node;
    currentNode.prev.prev.next = node;
    return node;
  } else {
    return "Index does not exist.";
  }

}
// How to use Linked List
// create a Linked List
var myLL = new LinkedList();

// add value to Linked List head
myLL.addToHead(10);
myLL.addToHead(11);
myLL.addToHead(12);

// add value to Linked List tail
myLL.addToTail(9);
myLL.addToTail(8);
myLL.addToTail(7);

//Delete node By Index
myLL.deleteNode(2);
// Delete Head node
myLL.removeHead();
// Delete tail node
myLL.removeTail();
// Insert node at 
myLL.insertAt(100, 3);
// find index by value;
console.log(myLL.indexOf(9));
// search node by value
console.log(myLL.search(8))

// Console entire List
console.log(myLL);