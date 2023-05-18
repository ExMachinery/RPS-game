//RPS-game

//Use getComputerChoice function for random choice return. Use console log to make sure it works properly

//Write a function for one round game with playerSelection and computerSelection parameters.
//This function will return something like: "Haha you lose! Rock beats paper!"
    //Make sure player selection is case-insensitive 
    //Make sure your function return results, not console.log it

//Write game() function. Use all functions inside this one. 5 games, keep scores and return a winner or looser based on 5 rounds on the end
    //Try implement loop, tho you don't know how :D
    //Use console.log to display results of each round and the winner at the end

//Use prompt() to get input


//Basic structure game()
    //repeat this 5 times. Remember every round results. Define a winner.
    let playerScore = 0
    let computerScore = 0
    //While (playerScore < 5 || computerScore < 5)
    while (playerScore < 5 || computerScore < 5) {
        if (playerScore === 5 && computerScore < playerScore) {
            alert(`Congratulations! AI defeated!`);
            break;
        } else if (computerScore === 5 && computerScore > playerScore) {
            alert(`He-he, better luck next time, pal!`);
            break;
        } else {
            playRound()
        }
    }

        //Compare player choice to AI choice and decide who is the winner in this round
        function playRound() {
            let playerSelection = getPlayerChoice();
            let computerSelection = getComputerChoice();
            if (playerSelection === computerSelection) {
                alert(`Draw! Your opponent also choose ${computerSelection}!`);
            } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
                playerScore = (playerScore + 1);
                alert(`You win! ${playerSelection} beats ${computerSelection}! You: ${playerScore} AI: ${computerScore}`);
            } else {
                computerScore = (computerScore + 1);
                alert(`You loose! ${computerSelection} beats ${playerSelection}! You: ${playerScore} AI: ${computerScore}`);
            }
        }

                //Prompt user for his choice and standardize it 
                function getPlayerChoice() {
                    playerSelection = prompt('Rock, Paper or Scissors?', '');
                    let firstLetter = playerSelection.slice(0, 1);
                    let restLetter = playerSelection.slice(1);
                    let capitalFirst = firstLetter.toUpperCase();
                    let lowerRest = restLetter.toLowerCase();
                    playerSelection = (capitalFirst + lowerRest);
                    return playerSelection;
                }

                //AI-Payer code. Get choice based on random number
                function getComputerChoice() {
                    let randomDigit = Math.random();
                    if (randomDigit > 0.66) {
                        computerSelection = "Rock";
                    } else if (randomDigit < 0.33) {
                        computerSelection = "Paper";
                    } else {
                        computerSelection = "Scissors";
                    }
                    return computerSelection;
                }











/* 1. Understand exact problem. Refactor the problem, unless you could explain it in simple English to anyone.
2. Plan a solving. 
    - Does your program have a user interface? what will ot look like? What functionality will the interface have? Sketch it!
    - What inputs will your program have? User input data or from somewhere else?
    - What's the desired output?
    - Given your inputs, what are the steps to return the desired output?
3. Pseudocode. Write a program in a simple words. */