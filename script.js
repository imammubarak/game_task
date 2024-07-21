let playerId = 0;
let player1Score = 0, player2Score = 0;

function newGame () {
    switchPlayer(setCurrentPlayer());
    document.getElementById("score--0").innerHTML= 0;
    document.getElementById("score--1").innerHTML= 0;
    document.getElementById("current--0").innerHTML = 0;
    document.getElementById("current--1").innerHTML = 0;
    player1Score = 0;
    player2Score = 0;
    
    disableRollDice(false);
    hideDice();
}

function rollDice () {
    
    let dice =  Math.floor(Math.random() * 6) + 1;

    if(playerId == 0){
        setDiceImage(dice);
        
        if(dice == 1){
            switchPlayer(playerId);
            return;
        }

        var currentElement = document.getElementById("current--0");
        currentElement.innerHTML = Number(currentElement.outerText) + dice;
        player1Score += dice;
    }else{

        setDiceImage(dice);

        if(dice == 1){
            switchPlayer(playerId);
            return;
        }

        var currentElement = document.getElementById("current--1");
        currentElement.innerHTML = Number(currentElement.outerText) + dice;
        player2Score += dice;
    }
}

function holdScore (){
    if(playerId == 0){
        document.getElementById("score--0").innerHTML = player1Score;
        if(player1Score >= 100){
            
            setTimeout(function() {
                alert("Congratulation player 1 win the game. Click on New Game to start new challenge.");
              }, 100);
              disableRollDice(true);
            return;
        }
        
        switchPlayer(playerId);
        
    }else{
        document.getElementById("score--1").innerHTML = player2Score;
        if(player2Score >= 100){

            setTimeout(function() {
                alert("Congratulation player 2 win the game. Click on New Game to start new challenge.");
              }, 100);
              disableRollDice(true);
            return;
        }

        switchPlayer(playerId);
    }
}

function setDiceImage(dice) {
    var image = document.querySelector('.dice');
    image.style.display = 'block';
    image.src = "image/dice-" + dice + ".png";
  }

  function hideDice() {
    var image = document.querySelector('.dice');
    image.style.display = 'none';
  }

  function disableRollDice(isDisable = false) {
    isDisable ? document.getElementById('btnroll').disabled = true : document.getElementById('btnroll').disabled = false;
  }

  function switchPlayer (currnetPlayer = 0) {
    if(currnetPlayer == 0){
        playerId = 1;
        document.getElementById("player--0").classList.remove("player--active");
            document.getElementById("player--1").classList.add("player--active");
    }else{
        playerId = 0;
        document.getElementById("player--1").classList.remove("player--active");
        document.getElementById("player--0").classList.add("player--active");
    }
  }

  function setCurrentPlayer () {
    playerId =  Math.floor(Math.random() * 2);
    return playerId;
}

document.addEventListener('DOMContentLoaded', function() {
    setCurrentPlayer();
    newGame();
  });
