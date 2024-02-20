const Command = require("./command");

class Message {
   // Write code here!
      constructor(name, commands) {
        this.name = String(name);
        if (!name) {
          throw Error("Name required.");
        }
        this.commands = Command[commands];
      }
}
module.exports = Message;