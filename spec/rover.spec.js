const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

// TEST 7-PASSED-----2/25 2:09PM
// “constructor sets position and default values for mode and generatorWatts”.
//  Refer to the Rover Class description above for these default values.

it('constructor sets position and default values for mode and generatorWatts', function () {
    let testRover = new Rover(98382);
    expect(testRover.position).toEqual(98382);
    expect(testRover.mode).toEqual('NORMAL');
    expect(testRover.generatorWatts).toEqual(110);
})

// TEST 8-PASSED-----2/25 2:34PM, UPDATED 2/26 9:51AM-----Restructured the return to use Message in function

it('response returned by receiveMessage contains the name of the message', function () {
    let commandsTest = new Command('STATUS_CHECK');
    let messageTest = new Message('test for status check', commandsTest);
    let testRoverName = new Rover(98382).receiveMessage(messageTest);
    let testRoverNameReturn = testRoverName.message;
    // console.log(testRoverName.message);
    expect(testRoverNameReturn).toBe('test for status check');
})

// TEST 9-PASSED-----2/25 2:56PM, UPDATED 2/26 10:08AM-----Restructured return of test 9, two empty objects. Both 8 and 9 are passing together.

    it ('response returned by receiveMessage includes two results if two commands are sent in the message', function () {
        let commandsTest = [new Command('STATUS_CHECK'), new Command('MODE_CHANGE', 'LOW_POWER')];
        let messageTest = new Message('Test message with two commands', commandsTest);
        let testRover = new Rover(98382).receiveMessage(messageTest);
        // console.log(testRover.results);
        let testRoverReturn = testRover.results;
        let testRoverResults = [
            {
               completed: true
            },
            {
               completed: true, 
               roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
            }
         ] 
        //   console.log(testRover.results);
        expect(testRoverReturn).toEqual(testRoverResults)
 
    })

// TEST 10-passed...need other tests to confirm. Completed: true? How?
// 1. For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object
//    describing the current state of the rover object — mode, generatorWatts, and position. 
//    The test should check each of these for accuracy.
// 2. See the Rover Command Types table for more details.

// it('responds correctly to the status check command', function () {
//     let commandsTest = [new Command('STATUS_CHECK')];
//     let messageTest = new Message('Status check test', commandsTest);
//     let testRover = new Rover(98382).receiveMessage(messageTest).results;
//     let testRoverResults = [{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 98382}}]

//     expect(testRover).toEqual(testRoverResults)
// }); 

// TEST 11-PASSED-----2/26 6:11PM
// 1. The test should check the completed: property and rover mode for accuracy.
// 2. The rover has two modes that can be passed as values to a mode change command: ‘LOW_POWER’ and ‘NORMAL’.

// it('responds correctly to the mode change command', function() {
//     let commandsTest = [new Command('MODE_CHANGE', 'LOW_POWER')];
//     let messageTest = new Message('Mode change test', commandsTest);
//     let testRover = new Rover().receiveMessage(messageTest).results;
//     let testRoverResults = [{completed: true, roverStatus: {mode: 'LOW_POWER', generatorWatts: 110, position: undefined}}]

//     expect(testRover).toEqual(testRoverResults);

// })

});