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
      
      let roverObject = {message: Message.name};
         return roverObject;
      }
   };

   // reportStats() {
   //    let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
   //    return stats;
   // }
            // message: name,
            // results: [
            //    {
            //       completed: true,
            //       roverStatus: {mode: this.mode , generatorWatts: this.generatorWatts , position: this.position}}
            // ]
         

      //  if (commands.indexOf(new Command('MODE_CHANGE', 'LOW_POWER'))) {
      //    return {
      //       message: name,
      //       results: [
      //          {
      //             completed: true,
      //             roverStatus: {mode: 'LOW_POWER' , generatorWatts: this.generatorWatts , position: this.position}}
      //       ]
      //    }
      // } else {
      //    return {
      //    message: name,
      //    results: commands
      // }
   // }

   // }


module.exports = Rover;