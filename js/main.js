console.log('activate framework!');

// var randomLoc = Math.floor(Math.random() * 6);
// var location1 = randomLoc;
// var location2 = location1 + 1;
// var location3 = location2 + 1;

// var guess;
// var hits = 0;
// var guesses = 0;
// var isSunk = false;

//Variable declaration go here

// while (isSunk === false) {
//   guess = prompt("Ready, aim, fire!(enter a number 0-7):");
//   if (guess < 0 || guess > 7) {
//     alert("Please enter a valid cell number!");
//   } else {
//     guesses = guesses + 1;

//     if (guess == location1 || guess == location2 || guess == location3) {
//       hits = hits + 1;
//       alert("HIT!");

//       if (hits == 3) {
//         isSunk = true;
//         alert("You sank my battleship!");
//       }
//     } else {
//       alert("MISS!");
//     }
//   }
// }
// var stats = "You took " + guesses + " guesses to sink the battleship, " +
//             "which means your shooting accuracy was " + (3/guesses);
// alert(stats);






var model = {
  boardSize: 8,
  numShips: 4,
  shipLength: 4,
  shipsSunk: 0,

  ships: [
    { location: [0,0,0,0], hits: ["","","",""] },
    { location: [0,0,0,0], hits: ["","","",""] },
    { location: [0,0,0,0], hits: ["","","",""] },
    { location: [0,0,0,0], hits: ["","","",""] },
  ],

  fire: function(guess) {

    for(var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var location = ship.locations;
      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if ( this.isSunk(ship) ) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        return true;

        }
      }
      view.displayMiss(guess) ;
      view.displayMessage("You missed.");
      return false;
    },
  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
        }
      }
      return true;
    }
  };

// // this is to check if a ship has already been hit
//       if (ship.hits[index] === "hit") {
//         alert("You've already hit that location!");
//         return true;
//       } else if ( index >= 0) {
//         ship.hits[index] = "hit";
//         view.displayHit(guess);
//         alert("HIT!");







//   generateShipLocations: function() {
//     var locations;
//     for (var i = 0; i < this.numShips; i++) {
//     do {
//         locations = this.generateShip();
//     } while (this.collision(locations));
//       this.ships[i].locations = locations;
//     }
//   },

// }






var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};











// Fire! button click
function init() {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  //"return" key
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress
  console.log("button working");
}
