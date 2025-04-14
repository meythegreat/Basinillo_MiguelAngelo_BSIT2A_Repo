var randomLoc = Math.floor(Math.random() * 5); 
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2];

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

// Game logic
while (!isSunk) {
    guess = prompt("Ready, aim, fire! 🔥🐦‍🔥 Enter a number from zero (0) to six (6). ❓");

    if (guess === null) {
        alert("Thank you for playing!");
        break;
    }

    guess = parseInt(guess, 10);
    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6!");
        continue;
    }

    guesses++;

    const hitIndex = shipLocations.indexOf(guess);
    
    if (hitIndex !== -1) {
        alert("Hit! 🎯🔥");
        shipLocations.splice(hitIndex, 1);
        hits ++;

        if (shipLocations.length === 0) {
            isSunk = true;
            alert("You have sunk my battleship! 🥹😭😢");
        }
    } else {
        alert("Miss! ⚠️❌😆");
    }

    
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);
var stats = "You took " + guesses + " guesses to sink the battleship! " + "\n" + "Accuracy: " + accuracy + "%";
alert(stats);