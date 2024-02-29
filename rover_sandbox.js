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

      // for (let i = 0; i < messageObject.commands.length;){

         for(const item of Message.commands) {
            console.log(item);
            if (item.commandType == 'STATUS_CHECK') {
               results.push({completed: true})
            } 
            
            // else if (item.commandType == 'MODE_CHANGE' && 'LOW_POWER') {
            //    this.mode = 'LOW_POWER'
            //    results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
            // }
         // if (item.commandType === 'MODE_CHANGE' && 'LOW_POWER') {
         //    this.mode = 'LOW_POWER'
         //    results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
         //     } 
         // }

   }
         let roverObject = {message: Message.name, results}
         
         return roverObject;
   };


};


// STATUS_CHECK
let commandsTest = [new Command('STATUS_CHECK')];
let messageTest = new Message('Status check command test', commandsTest);
let testRover = new Rover().receiveMessage(messageTest);

// MODE_CHANGE, LOW_POWER
// let commandsTest = [new Command('MODE_CHANGE', 'LOW_POWER')];
// let messageTest = new Message('Mode change command test', commandsTest);
// let testRover = new Rover().receiveMessage(messageTest);

// (MODE_CHANGE, LOW_POWER), (STATUS_CHECK)
// let commandsTest = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let messageTest = new Message('Two commands command test', commandsTest);
// let testRover = new Rover().receiveMessage(messageTest);


// console.log(new Message('dkdkd', 'dkdkdkd'));
console.log(testRover);

// console.log()

module.exports = Rover;