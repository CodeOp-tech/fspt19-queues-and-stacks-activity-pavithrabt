const { isClass } = require("./utilities");
const Queue = require("../src/queue");

let queue = null;

describe("Queue", () => {
  beforeEach(() => {
    queue = new Queue();
  });

  describe("The Queue class", () => {
    test("should be a class", () => {
      expect(isClass(Queue)).toBe(true);
    });
  });

  describe("The enqueue method", () => {
    test("should add items to the BACK of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.items.length).toBe(3);
      expect(queue.items[0]).toBe(1);
    });
  });

  describe("The dequeue method", () => {
    test("should remove items from the FRONT of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.dequeue();
      expect(queue.dequeue()).toBe(2);
      expect(queue.items.length).toBe(2);
      expect(queue.items[0]).toBe(3);
    });
  });

  describe("The peek method", () => {
    test("should return the front element of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toBe(1);
      expect(queue.items.length).toBe(3);
    });
  });

  describe("The isEmpty method", () => {
    test("should return true if the queue is empty", () => {
      expect(queue.isEmpty()).toBe(true);
    });
    test("should return false if the queue is not empty", () => {
      queue.enqueue(1);
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe("The size property", () => {
    test("should increase when items are enqueued", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.size).toBe(2);
    });
    test("should decrease when items are dequeued", () => {
      queue.enqueue(1);
      queue.dequeue();
      expect(queue.size).toBe(0);
    });
    test("should not go into the negative numbers", () => {
      queue.enqueue(1);
      queue.dequeue();
      queue.dequeue();
      expect(queue.size).toBe(0);
    });
  });

  describe("The getSize method", () => {
    test("should return the size of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.getSize()).toBe(2);
    });
  });
});
