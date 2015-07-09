/************************************************************************

 *****      **  ******* ******* ***    ******   ***   *** *** *** *****
 *******   **** ******* ******* ***    ****** *** *** *** *** *** *******
 *** ***  **  **  ***     ***   ***    ***    ***  ** *** *** *** **  ***
 ******  ******** ***     ***   ***    ******  ***    ******* *** *****
 ***  ** ******** ***     ***   ***    ***        *** ******* *** ***
 ******* ***  *** ***     ***   ****** ****** **  *** *** *** *** ***
 *****   ***  *** ***     ***   ****** ******   ***   *** *** *** ***

*************************************************************************/
console.log('activate framework!');


// this needs to be optimized to only an array for all ships visible on
// playing field.
/*var shipA = { location: ["10", "20"], hits: ["",""] };
var shipB = { location: ["33", "34", "35"], hits: ["","",""] };
var shipC = { location: ["62", "63", "64", "65"], hits: ["","","",""] };
var shipD = { location: ["85", "86", "87", "88", "89"], hits: ["","","","",""] };*/




var row = [
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
];
//have counter for the hits once 0 is reach "you sunk my ship"
var ships = [
  {location: ["10","20"],
  hits_left: 2},
  {location: ["33", "34", "35"],
  hits_left: 3},
  {location: ["62", "72", "82", "92"],
  hits_left: 4},
  {location: ["85", "86", "87", "88", "89"],
  hits_left: 5},
];

var positions = [10, 20, 33, 34];

var guess;
var guesses = 0;
var hits = 0;
var newShipLocations;
var isSunk = false;

//function to show that the ships in their locations are being hit
//tie in guess with a click eventlistener from above after the function guess
//function: show if it is a hit miss click again or sunk

// var ships = function(guess) {}

var cells = document.getElementsByClassName("cell");

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function(){
    //if location of ship is clicked "hit"
    //for (var ships[i] = 0; i < ships.length; i++) {
      if (positions.indexOf(parseInt(this.id)) > -1){
        console.log("Hit me!");
      } else {
        console.log("Missed me!")
      }
      //else "miss"
      //loop through  the ships to match locations
    console.log(positions, this.id);
  //}
});

  // for(var i = 0; i < clickEvent; i++) {
  //   // var ship should be ships A B C D
  //   var ships = this.ships[i];
  //   // locations of ships A B C D
  //   var location = ships.locations;
  //   var index = ship.locations.indexOf(guess);
  //   if (cell === location) {
  //     ships.hits[index] = "hit";
  //     view.displayHit(guess);
  //     view.displayMessage("HIT!");
  //     console.log("HIT!");
  //     return true;
  //     //if the user doesnt click where ships are located this will happen
  //   } else
  //   view.displayMiss(guess);
  //   view.displayMessage("You missed muhahaha!");
  //   return false;
  // }
}

// After eventlistener click is made
// pass the div id that was clicked on and check against the
// ships variables and their locations.







// This immediately invokes the function expression "ships".

































// var randomLoc = Math.floor(Math.random() * 6);
// var location1 = randomLoc;
// var location2 = location1 + 1;
// var location3 = location2 + 1;

// var guess;
// var hits = 0;
// var guesses = 0;
// var isSunk = false;

// //Variable declaration go here

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




// var model = {
//   boardSize: 8,
//   numShips: 4,
//   shipLength: 4,
//   shipsSunk: 0,






//   fire: function(guess) {

//     for(var i = 0; i < this.numShips; i++) {
//       var ship = this.ships[i];
//       var location = ship.locations;
//       var index = ship.locations.indexOf(guess);
//       if (index >= 0) {
//         ship.hits[index] = "hit";
//         view.displayHit(guess);
//         view.displayMessage("HIT!");
//         if ( this.isSunk(ship) ) {
//           view.displayMessage("You sank my battleship!");
//           this.shipsSunk++;
//         return true;

//         }
//       }
//       view.displayMiss(guess) ;
//       view.displayMessage("You missed.");
//       return false;
//     },
//   isSunk: function(ship) {
//     for (var i = 0; i < this.shipLength; i++) {
//       if (ship.hits[i] !== "hit") {
//         return false;
//         }
//       }
//       return true;
//     }
//   generateShipLocations: function() {
//     var locations;
//     for (var i = 0; i < this.numShips; i++) {
//     do {
//       locations = this.generateShip();
//     } while (this.collision(locations));
//       this.ships[i].locations = locations;
//     }
//   generateShip: function() {
//     var direction = Math.floor(Math.random() * 2);
//     var row, col;

//     if (direction === 1) { // horizontal
//       row = Math.floor(Math.random() * this.boardSize);
//       col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
//     } else { // vertical
//       row = Math.floor(Math.random() * (this.boardSize - this.shipLength);
//       col = Math.floor(Math.random() * this.boardSize);
//     }

//     var newShipLocations = [];

//     for (var i = 0; i < this.shipLength; i++) {
//       if (direction === 1) {
//         newShipLocations.push(row + "" + (col + i));
//       } else {
//         newShipLocations.push((row + i) + "" + col);
//       }
//     }
//     return newShipLocations;
//   collision: function(locations) {
//     for (var i = 0; i < this.numShips; i++) {
//       var ship = this.ships[i];
//       for (var j = 0; j < locations.length; j++) {
//         if (ship.locations.indexOf(locations[j]) >= 0) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }

// //parse guess from user
//   function parseGuess(guess) {
//    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];

//     if (guess === null || guess.length !==2) {
//       alert("Oop, please enter and letter and a number on the board.");
//     } else {
//       // check the 0 and 1 location grabs the first character of the guess
//       firstChar = guess.charAt(0);
//       var row = alphabet.indexOf(firstChar);
//       var column = guess.charAt(1);
//       // change the numbers for the rows and columns
//       if (isNAN(row) || isNAN(column)) {
//         alert("oops, that isnt on the board.");
//       } else if (row < 0 || row >= model.boardSize ||
//         column < 0 || column >= model.boardSize) {
//         alert("oops, that's off the board!")
//       } else {
//         return row + column;
//       }
//     }
//     return null;
// //
// var controller = {
//   guesses: 0,

//   processGuess: function(guess) {
//     var location = parseGuess(guess);
//     if (location) {
//       this.guesses++;
//       var hit = model.fire(location);
//       if (hit && model.shipsSunk === model.numShips) {
//         view.displayMessage("All ships are sunk")
// // message to both player about the amount of guess
//       }
//     }
//   }
// };










// // Fire! button click
// function init() {
//   var fireButton = document.getElementById("fireButton");
//   fireButton.onclick = handleFireButton;

//   console.log("the button is being fired")

//   var guessInput =  document.getElementById("guessInput");
//   guessInput.onkeypress = handleKeyPress;

//   console.log("the button is being fired")
// }
// function handleFireButton() {
//   var guessInput =  document.getElementById("guessInput");
//   var guess = guessInput.value;
//   controller.processGuess(guess);

//   guessInput.value = "";
// }

// function handleKeyPress (e) {
//   var fireButton = document.getElementById("fireButton");
//   if (e.keyCode === 13) {
//     fireButton.click();
//     return false;
//   }
// }











