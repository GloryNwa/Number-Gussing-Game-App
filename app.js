/*
GAME FUNCTION
- Player must guess a number between a min max
- Player gets a certain a mount of quessess
- Notify player of quesses remaining
- Notify the player of thecorrect  answer remaining
- Let player choose to play again

*/

//Game Values
 let min = 1,
     max = 10,
     winningNum = getRandomNum(min, max),
     guessesLeft = 3;

//UI Elements
  const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message')

 //UI min and max
 minNum.textContent = min;
 maxNum.textContent = max;

 //Play again event listener
 game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
 });



 //Listen for guess
 guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
//Validate
 if(isNaN(guess) || guess < min || guess > max){
     setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }
  // check if won
  if(guess === winningNum){
   //Game over
   gameOver(true, `${winningNum} is correct, You Win!`)
  }else{

    //Wrong Num
    guessesLeft -= 1;
    if(guessesLeft === 0){
      //GameOver - lost
   gameOver(false,`Game Over, you lost. The correct number was ${winningNum} `);

    }else{

   //Change border color
     guessInput.style.borderColor = 'red';

     //Clear Input
     guessInput.value = '';
      //Game continues - wrong guess
      setMessage(`${guess} is not correct, ${guessesLeft}  guessesLeft`, 'red');
    }

  }
 });

 //GameOver

 function gameOver(won, msg){

  let color;
  won === true? color = 'green': color = 'red';
  guessInput.disabled = true;
   //Change border color
   guessInput.style.borderColor = 'color';
   //Set text Color
   
     message.style.color = color;

   //Set message
   setMessage(msg);

   //play again
   guessBtn.value = 'Play Again';
   guessBtn.className += 'play-again';
 
  }


  //Get winning num
  function getRandomNum(min, max){
   return Math.floor(Math.random()*(max-min + 1)+min);
  }


 //Set messaaaaage
 function setMessage(msg, color){
     message.style.color = color;
     message.textContent = msg;

 }
