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
      let roverObject = {message: name};
         return roverObject;
      }
   }

   // reportStats() {
   //    let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
   //    return stats;
   // }



let commandsTest = [new Command('STATUS_CHECK')];
let messageTest = new Message('STATUS_CHECK test', commandsTest);
let testRover = new Rover(98382).receiveMessage(messageTest);

console.log(testRover);

module.exports = Rover;