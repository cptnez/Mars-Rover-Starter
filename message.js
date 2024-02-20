const Command = require("./command");

class Message {
   // Write code here!
      constructor(name) {
        this.name = name;
        if (!name) {
          throw Error("Message name required.");
        }
        // this.value = value;
      }
    
  }

module.exports = Message;