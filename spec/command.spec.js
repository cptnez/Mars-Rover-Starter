const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });


  // 1. The test inspects the contructor in the Command class
  // 2  The test verifies that the constructor sets the commandType property in the new object

  // class SomeClass {
  //  constructor(a, b) {
  //     this.a = a;
  //    this.b = b;
  //  }
  //}

  // it('works', () => {
  // const obj = new SomeClass(1, 2);
  // expect(obj.a).toBe(1);
  // expect(obj.b).toBe(2);

  it('verifies that the constructor sets the commandType property in the NEW object', function () {
    const obj = new Command(1, 2);
  expect(obj.commandType).toBe(1);
  });

  it('verifies that the constructor sets the value property in the NEW object', function () {
    const obj = new Command(1, 2);
  expect(obj.value).toBe(2);
  });

});