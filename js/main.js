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


var positions = [10 ,20];

var guesses = 0;
var hits    = 0;

var playerTurn = 0;

var playersScore = [0, 0];
var numClicks = [0, 0];
var numHits = [0, 0];

// helper function, takes a ship from the array ships, and tells if it
// is sunk or not (returns boolean)
var isSunk = function(ship) {
  return ship.hits_left === 0;
}

// get ship locations and store in variable locations
var getLocations = function(ships) {
  var locations = [];
  for (var i = 0; i < ships.length; i++) {
    locations = locations.concat(ships[i].location)
  };
  return locations;
}
var locations = getLocations(ships);

// this is what happens when we click
var whenCellClicked = function() {
  numClicks[playerTurn] += 1;
  // change cell color
  if (locations.indexOf(this.id) > -1){
    if (locations.indexOf(this.id) < 2) ships[0].hits_left--;
    if (locations.indexOf(this.id) < 3) ships[1].hits_left--;
    if (locations.indexOf(this.id) < 4) ships[2].hits_left--;
    if (locations.indexOf(this.id) < 5) ships[3].hits_left--;
    console.log(ships);
    this.style.backgroundColor = 'red';
    numHits[playerTurn] += 1;
  } else {
    this.style.backgroundColor = 'darkgray';
  }
  if (ships[0].hits_left === 0 && ships[1].hits_left === 0 && ships[2].hits_left === 0 && ships[3].hits_left === 0 ); {
    console.log ("GAME OVER!");
  }
  //alternates players turn
  playersScore[playerTurn] = Math.floor(numHits[playerTurn] / numClicks[playerTurn] * 100 + 0.5);
  playerTurn = Math.abs(playerTurn -1);
  renderScores();
  checkForWinner();
}

function whosTurn(playerTurn) {
  if (playerTurn === 0) {
    return "Its your turn Player 1";
  } else if (playerTurn != 0) {
    return "Its your turn Player 2";
  }
}

function renderScores() {
  document.getElementById("player-1-score").innerHTML=playersScore[0];
  document.getElementById("player-2-score").innerHTML=playersScore[1];
  console.log(numClicks, numHits, playersScore, playerTurn);
}

function checkForWinner(ships) {

  }
  //if all ships are hit
  //played with the higher score wins


// set up the board!
var cells = document.getElementsByClassName("cell");

// attach event listeners!
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', whenCellClicked);
}
