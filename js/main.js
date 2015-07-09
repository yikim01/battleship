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

var board = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

//have counter for the hits once 0 is reach "you sunk my ship"
var ships = [
  {
    location:  ["10","20"],
    hits_left: 2
  },
  {
    location:  ["33", "34", "35"],
    hits_left: 3
  },
  {
    location:  ["62", "72", "82", "92"],
    hits_left: 4
  },
  {
    location:  ["85", "86", "87", "88", "89"],
    hits_left: 5
  }
];

var guesses = 0;
var hits    = 0;

// helper function, takes a ship from the array ships, and tells if it
// is sunk or not (returns boolean)
var isSunk = function(ship) {
  return ship.hits_left === 0;
}


// this is what happens when we click
var whenCellClicked = function() {
  // if location of ship is clicked "hit"
  // for (var ships[i] = 0; i < ships.length; i++) {
    if (positions.indexOf(parseInt(this.id)) > -1){
      console.log("Hit me!");
    } else {
      console.log("Missed me!")
    }
    // else "miss"
    // loop through  the ships to match locations
    console.log(positions, this.id);
  // }
}

//function to show that the ships in their locations are being hit
//tie in guess with a click eventlistener from above after the function guess
//function: show if it is a hit miss click again or sunk
var cells = document.getElementsByClassName("cell");

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', whenCellClicked);
}
