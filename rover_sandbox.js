const Command = require("./command");
const Message = require("./message");

class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   };
   
   receiveMessage(Message) {
      
      let roverObject;

       if(Message.commands.length == 2) {
         roverObject = {message: Message.name, results: [{}, {}]};
         return roverObject;
      } else {
         roverObject = {message: Message.name, results: [{}]};
      }
      return roverObject;
   };

};

   // reportStats() {
   //    let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
   //    return stats;
   // }



let commandsTest = [new Command('COMMAND_ONE'), new Command('COMMAND_TWO')];
let messageTest = new Message('Two commands test', commandsTest);
let testRover = new Rover(98382).receiveMessage(messageTest);

console.log(testRover);

module.exports = Rover;