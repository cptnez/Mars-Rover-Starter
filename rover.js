const Command = require("./command");
const Message = require("./message");

class Rover {
   // Write code here!
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   receiveMessage() {
      return Message.name
   }
};

module.exports = Rover;