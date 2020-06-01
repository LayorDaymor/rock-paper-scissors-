const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const matchScreen = document.querySelector(".match");
      const restartGame=document.getElementById("restartGame");




      restartGame.addEventListener("click",()=>{
        location.reload();
      })
      
  ;
  
      playBtn.addEventListener("click", () => {
        var PlayerNameInput=document.getElementById("myText").value;
        var PlayerNamePlace=document.getElementById("demo");
        introScreen.classList.add("fadeOut");
        matchScreen.classList.add("fadeIn");
        PlayerNamePlace.textContent=PlayerNameInput;
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");


     hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/img/${this.textContent}.png`;
            computerHand.src = `./assets/img/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
  

      playerScore.textContent = pScore;
      computerScore.textContent = cScore;

    };
  
    const compareHands = (playerChoice, computerChoice) => {
      const userName2=document.getElementById("myText").value;
     
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.innerHTML =`${userName2} Wins`;
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
};
  
  //start the game function
  game();

