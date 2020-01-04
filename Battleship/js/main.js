//DECLARE 3 var & hold the location of each cell of the ship.
//Call them location1, location2, location3.
//DECLARE var to hold user guess & call it "guess".
//DECLARE var to hold # of hits called "hits" & set to 0.
//DECLARE var to hold # of guesses called "guesses" & set to 0.
//DECLARE var to keep track of whether ship isSunk & set to false.

var randomLoc = Math.floor (Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

//LOOP: while ship is not sunk
    //GET user guess
    //COMPARE user input to value input values
    //IF user guess is invalid,
        //TELL user to enter valid #
    //ELSE 
        //ADD 1 to guesses
        //IF guess = location
            //ADD 1 to hits
            //IF # of hits = 3
                //SET isSunk to true
                //TELL user "You sank my battleship!"
            //END IF
        //END ELSE
    //END LOOP
    //TELL user stats

    //Variable declarations go here

    while (isSunk == false) {
        guess = prompt ("Ready, aim, fire! (enter a number from 0 - 6):");
        if (guess < 0 || guess > 6) {
            alert ("please enter a valid number");
        } else {
            guesses = guesses + 1;
        
            if (guess == location1 || guess == location2 || guess == location3) {
                hits = hits +1;
                alert ("HIT!");
                if (hits == 3){
                    isSunk = true;
                    alert ("You sank my battleship!");
                }
            } else {
                    alert ("MISS");
                }
            }
    } 
var stats = "You took " + guesses + " guesses to sink the battleship, "
+ "which means your shooting accuracy was " + (3/guesses);
alert (stats);
