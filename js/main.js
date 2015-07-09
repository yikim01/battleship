/************************************************************************

 *****      **  ******* ******* ***    ******   ***   *** *** *** ******
 *******   **** ******* ******* ***    ****** *** *** *** *** *** **   **
 *** ***  **  **  ***     ***   ***    ***    ***  ** *** *** *** **   **
 ******  ******** ***     ***   ***    ******  ***    ******* *** ******
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

var player1Score = 0;
var player2Score = 0;

// helper function, takes a ship from the array ships, and tells if it
// is sunk or not (returns boolean)
var isSunk = function(ship) {
  return ship.hits_left === 0;
}

// get ship locations and store in variable locations
var getLocations = function() {
  var locations = [];
  for (var i = 0; i < ships.length; i++) {
    locations = locations.concat(ships[i].location)
  };
  return locations;
}
var locations = getLocations();

// this is what happens when we click
var whenCellClicked = function() {
  // change cell color
  if (locations.indexOf(this.id) > -1){
    this.style.backgroundColor = 'red';
  } else {
    this.style.backgroundColor = 'darkgray';
  }

  // update score
  function updateScore(score, player){
    //for everytime a player clicks
    if(document.getElementsByClassName('cell')).clicked == true) {
    console.log('yay!!')
    //their hit clicks will be divided by total clicks
    }
  }
}

// set up the board!
var cells = document.getElementsByClassName("cell");

// attach event listeners!
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', whenCellClicked);
}
