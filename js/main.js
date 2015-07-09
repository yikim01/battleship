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
  [null, null, null, null, null, null, null, null, null, null]
];

var ships = [
  {
    location: ["10","20"],
    hits: ["",""]
  },
  {
    location: ["33", "34", "35"],
    hits :["","","",]
  },
  {
    location: ["62", "72", "82", "92"],
    hits :["","","",""]
  },
  {
    location: ["85", "86", "87", "88", "89"],
    hits :["","","","",""]
  }
];

var guess;
var newShipLocations;

var guesses = 0;
var hits    = 0;

var cellEls;

var clickOnCell = function(event) {
  var cellEl = event.target;
  console.log(cellEl);

  // // var ship should be ships A B C D
  // var ships = this.ships[i];
  
  // // locations of ships A B C D
  // var location = ships.locations;
  // var index = ship.locations.indexOf(guess);
  
  // if (cell === location) {
  //   ships.hits[index] = "hit";
  //   view.displayHit(guess);
  //   view.displayMessage("HIT!");
  //   console.log("HIT!");
  //   return true;
  
  // //if the user doesnt click where ships are located this will happen
  // } else {
  //   view.displayMiss(guess);
  //   view.displayMessage("You missed muhahaha!");
  //   return false;
  // }
}

document.addEventListener("DOMContentLoaded", function() {
  cellEls = document.getElementsByClassName("cell");
  for (var i = 0; i < cellEls.length; i++) {
    cellEls[i].addEventListener("click", clickOnCell);
  }
});
