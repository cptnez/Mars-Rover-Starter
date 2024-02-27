const Command = require("./command");
const Message = require("./message");

class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   };
   
   receiveMessage(Message) {
      
      let results = [];
   
      for(item of Message.commands) {
         if (item.commandType == 'STATUS_CHECK') {
          results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
         } 
      }
      
      let roverObject = {message: Message.name, results}
    
      
      // if (Message.commands.indexOf('MODE_CHANGE' && 'LOW_POWER')) {
      //    this.mode = 'LOW_POWER'
      //    roverObject = {message: Message.name, results: [{completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}}]}
      // }
      
      
      // else {
      //    roverObject = {message: Message.name, results: [{}]};
      // }
         return roverObject;
   };

};

   // reportStats() {
   //    let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
   //    return stats;
   // }



module.exports = Rover;