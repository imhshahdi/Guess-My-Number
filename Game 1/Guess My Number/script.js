'use strict';
//

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('p.message').textContent = '🛑 No Number!';

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        // Save Score
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // Refactoring Our Code
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 0) {
            document.querySelector('p.message').textContent = guess > secretNumber ? "⬆️ Your Guess is High!" : '⬇️ Your Guess is Low!';
            score--;
            document.querySelector('span.score').textContent = score;
        } else {
            document.querySelector('p.message').textContent = "😕 You lost the Game!";
        }
    }
});



document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;


    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('span.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});