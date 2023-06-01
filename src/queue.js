/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.

DO NOT use the .length method on the Array
porototype for calculating the size of the queue.
---------------------- */

class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // adds an element to the rear of the queue
  enqueue(e) { }

  // removes an element from the front of the queue
  // returns that element
  dequeue() { }

  // returns the front element of the queue
  // important: does not dequeue it
  peek() { }

  // returns true if queue is empty
  isEmpty() { }

  // returns the size of the queue
  getSize() { }

}

module.exports = Queue;
