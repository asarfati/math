// tell the spec where to find our code
var math = require('../math');

describe("A math program to do arithmetic",, function() {

  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
    expect(math.add(3,5.5)).toBe(8.5);
  });
  it("can subtract two numbers", function() {
  	expect(math.subtract(3,5)).toBe(-2);
  	expect(math.subtract(3,-5)).toBe(8);
  })
 it("can multiply two numbers", function() {
  	expect(math.subtract(3,5)).toBe(15);
  })
  it("can divide two numbers", function() {
  	expect(math.subtract(3,6)).toBe(2);
  })

});

