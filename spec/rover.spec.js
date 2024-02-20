const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

    it('constructor sets position and default values for mode and geneatorWatts', function() {
      const obj = new Rover();
        expect(obj.position).toBe();
        expect(obj.mode).toBe('NORMAL');
        expect(obj.generatorWatts).toBe(110);
    });

    it('response returned by receiveMessage contains the name of the message', function() {
      expect(new Rover().receiveMessage()).toBe(Message.name)
    })

    it ('response returned by receiveMessage includes two results if two commands are sent in the message', function() {
      const obj2 = new Rover().receiveMessage();

    })
  // 7 tests here!

});
