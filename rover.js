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
      
      // for(const item in Message.commands) {
            // console.log(item);      
            for( let i = 0; i < Message.commands.length; i++) {
            
            if (Message.commands[i].commandType === 'STATUS_CHECK') {
            results.push({completed: true})
             }
           
            if (Message.commands[i].commandType === 'MODE_CHANGE' && 'LOW_POWER') {
            this.mode = 'LOW_POWER'
            results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
             } 

   }
         let roverObject = {message: Message.name, results}
         
         return roverObject;
   };


};

module.exports = Rover;