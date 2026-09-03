let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

for (let i = 1; i <= attempts; i++) {
    let guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess === randomNumber) {
        alert("🎉 You guessed it!");
        break;
    } 
    else if (guess > randomNumber) {
        alert("Too high!");
    } 
    else {
        alert("Too low!");
    }

    if (i === attempts) {
        alert("You used all 3 attempts. The correct number was " + randomNumber);
    }
}