const Command = require("./command");
const Message = require("./message");

class Rover {
   // Write code here!
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   receiveMessage(message) {
      message = Message;
      let commands =  [Command]
       
         if (message.commands.length = 2) {
            return {
               name: Message.name,
               results: [commands[0], commands[1]]
            }
         }


      return {
         name: Message.name,
         results: [commands]
      };
   }
};

module.exports = Rover;