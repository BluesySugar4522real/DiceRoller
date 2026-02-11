function guess() {
    let random = Math.floor(Math.random() * 6) + 1;

    let guess = prompt("Guess the number on the dice (1-6)");

    if (guess == random) {
        document.getElementById("txt").innerHTML = "You guessed right! The number was " + random;
    } else {
        document.getElementById("txt").innerHTML = "You guessed wrong! The number was " + random + ". Try again!";
    }
}