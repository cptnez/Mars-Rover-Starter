const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

// TEST 2
// Create a second Command test using “constructor sets command type” as the description.
// This test checks that the constructor in the Command class correctly sets the commandType property in the new object.

  it('constructor sets commandType', function () {
    let obj = new Command(1,2);
    expect(obj.commandType).toEqual(1)
  });

  // TEST 3

  it('constructor sets a value passed in as the 2nd argument', function () {
    const obj = new Command(1, 2);
    expect(obj.value).toBe(2);
  });

});