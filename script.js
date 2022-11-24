var objects = ["P", "S", "R"];

var rules = {
  P: {
    P: 0,
    S: 0,
    R: 1,
  },
  S: {
    P: 1,
    S: 0,
    R: 0,
  },
  R: {
    P: 0,
    S: 1,
    R: 0,
  },
};

function dataGenerator() {
  var randomNumber = Math.floor(Math.random() * 3);
  var computerChoice = objects[randomNumber];
  return computerChoice;
}
var start = confirm("Do you want to play a game?");

if (start) {
  var rematch;
  var userWins = 0;
  var userLosses = 0;
  var userTies = 0;

  while (true) {
    var userChoice = prompt("Enter one of this: P, S, R").toUpperCase();
    var computerChoice = dataGenerator();

    alert("Comuter choice " + computerChoice);

    var userRoundResult = rules[userChoice][computerChoice];
    var computerRoundResult = rules[computerChoice][userChoice];
    if (userRoundResult == computerRoundResult) {
      userTies++;
      alert("Tie");
    } else if (userRoundResult > computerRoundResult) {
      userWins++;
      alert("You win");
    } else {
      userLosses++;
      alert("You lost");
    }

    alert(
      `Your score:\n Wins - ${userWins}\n Ties - ${userTies}\n Losses - ${userLosses}`
    );

    rematch = confirm("Do you want to continue?");
    if (!rematch) {
      break;
    }
  }
}
