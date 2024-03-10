const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {
  // TEST 4
  it("throws error if a name is NOT passed into the constructor as the first parameter", function () {
    expect(function () {
      new Message();
    }).toThrow(new Error("Message name required."));
  });

  // TEST 5
  it("constructor sets name", function () {
    let constructorOne = new Message("Test for commands", 2);
    expect(constructorOne.name).toBe("Test for commands");
  });

  // TEST 6
  it("contains a commands array passed into the constructor as the 2nd argument", function () {
    let commandsArray = [
      new Command("MOVE"),
      new Command("STATUS_CHECK"),
      new Command("MODE_CHANGE", "LOW_POWER"),
    ];
    let messageObject = new Message("Test for commands", commandsArray);
    expect(messageObject.commands).toEqual(commandsArray);
  });
});
