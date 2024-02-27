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
   
       if (Message.commands.length == 2) {
         roverObject = {message: Message.name, results: [{}, {}]};
         return roverObject;
      } 
      
       if (Message.commands.indexOf('STATUS_CHECK')) {
         roverObject = {message: Message.name, results: [{completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}}]}
      } 

      if (Message.commands.indexOf('MODE_CHANGE' && 'LOW_POWER')) {
         this.mode = 'LOW_POWER'
         roverObject = {message: Message.name, results: [{completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}}]}
      }
      
      // if (Message.commands.indexOf('MOVE')) {
      //    roverObject = {message: Message.name, results: [{completed: true}]};
      // }
         return roverObject;
   };

};

   // reportStats() {
   //    let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
   //    return stats;
   // }



let commandsTest = [new Command('MODE_CHANGE', 'LOW_POWER')];
let messageTest = new Message('Mode change command test', commandsTest);
let testRover = new Rover(98382).receiveMessage(messageTest);

console.log(testRover);

module.exports = Rover;