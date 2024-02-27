const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
// TEST 4
  it('throws error if a name is NOT passed into the constructor as the first parameter', function () {
      expect( function() { new Message();}).toThrow(new Error('Message name required.'));
  });

// TEST 5
//The description is “constructor sets name”.
//The test confirms that the constructor in the Message class correctly sets the name property in a new message object.
it('constructor sets name', function () {
  let constructorOne = new Message('MODE_CHANGE', 2);
  expect(constructorOne.name).toBe('MODE_CHANGE');
})

 // TEST 6----CHECK COMMAND OBJECT TO PASS
 // The description reads “contains a commands array passed into the constructor as the 2nd argument”.
 // This test confirms that the commands property of a new message object
 // contains the data passed in from the Message(name, commands) call.

 it('contains a commands array passed into the constructor as the 2nd argument', function () {
  // let commandsArray = [new Command('STATUS_CHECK')];
  let messageObject = new Message('MODE_CHANGE', [new Command('STATUS_CHECK')]);
  // expect(constructorTwo.commands).toBe(2);
  expect(messageObject.commands).toEqual([new Command('STATUS_CHECK')]);
 })

});
