const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

// TEST 7
// “constructor sets position and default values for mode and generatorWatts”.
//  Refer to the Rover Class description above for these default values.

    // it('constructor sets position and default values for mode and geneatorWatts', function() {
    //   const obj = new Rover();
    //     expect(obj.position).toBe();
    //     expect(obj.mode).toBe('NORMAL');
    //     expect(obj.generatorWatts).toBe(110);
    // });

// TEST 8

    // it('response returned by receiveMessage contains the name of the message', function() {
    //   let response = new Rover().receiveMessage
    //   expect(response.name).not.toBeUndefined();
    // });

// TEST 9

    // it ('response returned by receiveMessage includes two results if two commands are sent in the message', function() {
    //   let messageCommands = new Rover().receiveMessage([new Command('MODE_CHANGE'), new Command('STATUS_CHECK')])
    //   expect(messageCommands.results.length).toEqual(2);
    // });

// TEST 10

      it('responds correctly to the STATUS_CHECK command', function (){
          let roverResults = {
            completed: true,
            roverStatus: {mode: 'LOW_POWER', generatorWatts: 110, position: 87382098}
          }
          expect(new Rover().receiveMessage([new Command('STATUS_CHECK')]).results).toEqual(roverResults)
      })

});
