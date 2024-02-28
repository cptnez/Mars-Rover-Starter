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
   
      for(const item of Message.commands) {

         if (item.commandType === 'STATUS_CHECK') {
            results.push({completed: true})
             }
            //  else if (item.commandType === 'MODE_CHANGE' && 'LOW_POWER') {
            //    this.mode = 'LOW_POWER'
            //    results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
            //  } else if (item.commandType === 'MODE_CHANGE' && 'LOW_POWER' && 'STATUS_CHECK') {
            //    this.mode = 'LOW_POWER'
            //    results.push({completed: true})
            //    results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
            //  } 
      }
         let roverObject = {message: Message.name, results}
         
         return roverObject;
   };


};

module.exports = Rover;