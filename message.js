// CLASSES
  //!! classes are blueprints for building multiple objects of the same type. AKA Classes build Objects!
  //Each time the Astronaut class is called,
  //constructor builds an object with the SAME set of keys, but it assigns different values to the keys based on the arguments.
  // Use the keyword 'new' to create and OBJECT from the CLASS

    // CONTRUCTORS
        // A constructor is a special method for creating objects of the same type, and it assigns the key/value pairs.
       // Parameters are passed into constructor rather than the class declaration

//The COMMAND OBJECT will always include a commandType property
//Some commandTypes will be couple with a vaule property, nut not all
//Every COMMAND object is a single instruction to be delivered to the rover



const Command = require("./command");

class Message {

  constructor(name, commands) {
    commands = [
      new Command('MOVE'),
      new Command('STATUS_CHECK'),
      new Command('MODE_CHANGE', 'LOW_POWER'),
   ];
    this.name = name;
    if (!name) {
      throw Error("Message name required.");
    }
    this.commands = commands;
  }
}

module.exports = Message;