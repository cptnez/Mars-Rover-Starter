const Command = require("./command");
const Message = require("./message");

class Rover {
   // Write code here!
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   };
   
   receiveMessage(Message) {
      let name = Message.name
      let commands = Message.commands
      return {
         message: name,
         results: commands
      }

   }
};


let commandsTest = [new Command('TEST_COMMAND_ONE'), new Command('TEST_COMMAND_TWO')];
        let messageTest = new Message('Test message with two commands', commandsTest);
        let testRover = new Rover().receiveMessage(messageTest);

        console.log(testRover);

module.exports = Rover;