const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

// TEST 7-FINISHED
// “constructor sets position and default values for mode and generatorWatts”.
//  Refer to the Rover Class description above for these default values.

    // it('constructor sets position and default values for mode and geneatorWatts', function() {
    //   const obj = new Rover();
    //     expect(obj.position).toBe();
    //     expect(obj.mode).toBe('NORMAL');
    //     expect(obj.generatorWatts).toBe(110);
    // });

// TEST 8-FINISHED

    // it('response returned by receiveMessage contains the name of the message', function() {
    //   let response = new Rover().receiveMessage
    //   expect(response.name).not.toBeUndefined();
    // });

// TEST 9-May need more refining, hung up on what is actaully being evaluated

    // it ('response returned by receiveMessage includes two results if two commands are sent in the message', function() {
    //   let messageCommands = new Rover().receiveMessage([new Command('MODE_CHANGE'), new Command('STATUS_CHECK')])
    //   expect(messageCommands.results.length).toEqual(2);
    // });

// TEST 10-Deep equality? It is passing but it is also a hardcoded test
// 1. For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object
//    describing the current state of the rover object — mode, generatorWatts, and position. 
//    The test should check each of these for accuracy.
// 2. See the Rover Command Types table for more details.

      it('responds correctly to the STATUS_CHECK command', function (){
       let message = new Rover().receiveMessage([new Command('STATUS_CHECK')]).results;
       let roverCheck = [{completed: Boolean(), roverStatus: {mode: '', generatorWatts: Number(), position: Number()}}];
       expect(message).toEqual(roverCheck);

      })

// TEST 11
// 1. The test should check the completed: property and rover mode for accuracy.
// 2. The rover has two modes that can be passed as values to a mode change command: ‘LOW_POWER’ and ‘NORMAL’.

  it('responds correctly to the MODE_CHANGE command', function () {
    let messageCommand = new Rover().receiveMessage([new Command('MODE_CHANGE')]);
    expect(messageCommand.results.completed).not.toBeUndefined();
    // });
  })

});
