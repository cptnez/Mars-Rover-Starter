const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

// TEST 7

it('constructor sets position and default values for mode and generatorWatts', function () {
    let testRover = new Rover(4321);

    expect(testRover.position).toEqual(4321);
    expect(testRover.mode).toEqual('NORMAL');
    expect(testRover.generatorWatts).toEqual(110);
})

// TEST 8

it('response returned by receiveMessage contains the name of the message', function () {
    let commandsTest = new Command('STATUS_CHECK');
    let messageTest = new Message('test for status check', commandsTest);
    let testRover = new Rover().receiveMessage(messageTest);
    let testRoverNameReturn = testRover.message;

    expect(testRoverNameReturn).toBe('test for status check');
})

// TEST 9

    it ('response returned by receiveMessage includes two results if two commands are sent in the message', function () {
        let commandsTest = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let messageTest = new Message('Test message with two commands', commandsTest);
        let testRover = new Rover(4321).receiveMessage(messageTest);
        let testRoverReturn = testRover.results;
        let testRoverResults = [
            {
               completed: true
            },
            {
               completed: true, 
               roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 4321 }
            }
         ] 
    
        expect(testRoverReturn).toEqual(testRoverResults)
 
    })

// TEST 10

it('responds correctly to the status check command', function () {
    let commandsTest = [new Command('STATUS_CHECK')];
    let messageTest = new Message('Status check test', commandsTest);
    let testRover = new Rover(4321).receiveMessage(messageTest).results;
    let testRoverResults = [{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 4321}}]

    expect(testRover).toEqual(testRoverResults)
}); 

// TEST 11

it('responds correctly to the mode change command', function() {

    let testRover = new Rover(4321, 'NORMAL', 110);
    let commandsTest = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let messageTest = new Message('Mode change test', commandsTest);
    let testRoverMessage = testRover.receiveMessage(messageTest);
    let testRoverResults = testRoverMessage.results
    
    expect(testRoverResults).toEqual([{completed: true}]);
    expect(testRover.mode).toEqual('LOW_POWER');
});

// TEST 12

it ('responds with a false completed value when attempting to move in LOW_POWER mode', function() {
    
    let testRover = new Rover(4321);
    testRover.mode = 'LOW_POWER'
    let commandsTest = [new Command('MOVE', 6000)];
    let messageTest = new Message('Low power false test', commandsTest);
    let testRoverMessage = testRover.receiveMessage(messageTest).results;
    
    expect(testRoverMessage).toEqual([{completed: false}])
})



//TEST 13

it ('responds with the position for the move command', function () {
    
    let testRover = new Rover(4321);
    testRover.mode = 'NORMAL'
    let commandsTest = [new Command('MOVE', 6000)];
    let messageTest = new Message('Move command test', commandsTest);
    testRover.receiveMessage(messageTest);
    
    expect(testRover.position).toEqual(6000);
})
});



