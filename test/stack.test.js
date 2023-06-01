const { isClass } = require("./utilities");
const Stack = require("../src/stack");

let stack = null;

describe("Stack", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  describe("The Stack class", () => {
    test("should be a class", () => {
      expect(isClass(Stack)).toBe(true);
    });
  });

  describe("The push method", () => {
    test("should ???", () => {
      // your code here
    });
  });

  describe("The pop method", () => {
    test("should ???", () => {
      // your code here
    });
  });

  describe("The isEmpty method", () => {
    test("should ???", () => {
      // your code here
    });
  });

  describe("The getSize method", () => {
    test("should ???", () => {
      // your code here
    });
  });

  describe("The size property", () => {
    test("should ???", () => {
      // your code here
    });
  });
});
