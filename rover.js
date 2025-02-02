const Command = require("./command");
const Message = require("./message");

class Rover {
  constructor(position, mode = "NORMAL", generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }

  receiveMessage(Message) {
    let results = [];
    let responseTrue = { completed: true };
    let responseFalse = { completed: false };

    for (let i = 0; i < Message.commands.length; i++) {
      if (Message.commands[i].commandType === "STATUS_CHECK") {
        let responseStatus = {
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        };
        results.push(responseStatus);
      }

      if (Message.commands[i].commandType === "MODE_CHANGE" && "LOW_POWER") {
        this.mode = "LOW_POWER";
        results.push(responseTrue);
      } else if (
        Message.commands[i].commandType === "MODE_CHANGE" &&
        "NORMAL"
      ) {
        this.mode = "NORMAL";
        results.push(responseTrue);
      }

      if (
        Message.commands[i].commandType === "MOVE" &&
        this.mode === "NORMAL"
      ) {
        this.position = Message.commands[i].value;
        results.push(responseTrue);
      } else if (
        Message.commands[i].commandType === "MOVE" &&
        this.mode === "LOW_POWER"
      ) {
        results.push(responseFalse);
      }
    }
    let roverMessage = { message: Message.name, results };

    return roverMessage;
  }
}

module.exports = Rover;
