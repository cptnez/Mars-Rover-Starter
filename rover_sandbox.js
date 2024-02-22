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
      let messageCommands = Message.commands

      // if (message.length == 2) {
      //    return {
      //       name: message.name,
      //       results: [message.commands, message.commands]
      //    }
      // } else {
      //    return {
      //       name: message.name,
      //       results: [message.commands] 
      // }
   // }
      // if (message.commands = 'STATUS_CHECK') {
         return {
            name: message.name,
            results: [
            {
               completed: Boolean(),
               roverStatus: { mode: '', generatorWatts: Number(), position: Number() }
            } 
            ]
      }
      // }
      // if (message.commands = 'MODE_CHANGE') {
      //    return {
      //       name: message.name,
      //       results: [
      //       {
      //          completed: Boolean(),
      //          roverStatus: { mode: '', generatorWatts: Number(), position: Number() }
      //       } 
      //       ]
      // }
      }

   
};


console.log(new Rover('Two', new Command('STATUS_CHECK')))
module.exports = Rover;