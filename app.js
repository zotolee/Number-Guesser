// Game Values
let min = 1,
    max = 10,
    guessesLeft = 3;
   
   
// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Get Winning Number
 // get winning number
 const getRandomNum = (min, max) => {  
  return Math.floor(Math.random() * (max - min +1 ) + min);
}
let winningNum = getRandomNum(min, max);
    
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

 

// Play again event listener
game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})


// Listen for guess
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max} `, 'red');
  }

  // Check if won
  if(guess === winningNum){
    // Game over -won
    gameOver(true, `${winningNum} is correct, YOU WIN! `)
  } else {
    // Wrong number
     guessesLeft -= 1;

     if(guessesLeft === 0) {
        // Game Over - lost
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
     } else {
        // Game continues - anwer wrong

        // change border color
        guessInput.style.borderColor = 'red';
        // clear input
        guessInput.value = '';
        //tell user its the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
     }
  }
});


// Game over
gameOver = (won, msg) => {
    let color;
    won === true ? color = 'green' : color = 'red';
  
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg);

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
  }



// Set message
setMessage = (msg, color) => {
    message.style.color = color;
    message.textContent = msg;
  }

