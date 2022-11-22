/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

    const newNode = new Node(val);
    
    // If the the queue is empty
    if(!this.first && !this.last){

      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return undefined

    }
    //If the queue is not empty
    this.last = newNode
    this.size += 1;
    return undefined

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    //Checks if queue is empty
    if(this.first === null && this.last === null){
      throw this.isEmpty
    }
      if(this.first){

        let currentNode = this.first.val;
        let nextNode = this.first.next
  
        this.first = nextNode;
        this.size -= 1;
        return currentNode;
        
      }
      this.size -= 1
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

    if(!this.first){
      return true

    } else {

      return false
      
    }
  }
}


