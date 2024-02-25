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

      if (commands.indexOf(new Command('STATUS_CHECK'))) {
         return {
            message: name,
            results: [
               {
                  completed: true,
                  roverStatus: {mode: this.mode , generatorWatts: this.generatorWatts , position: this.position}}
            ]
         }
      } else {
         return {
         message: name,
         results: commands
      }
   }

   }
};

module.exports = Rover;