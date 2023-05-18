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
    //let playerScore = 0
    //let computerScore = 0
    //While (playerScore < 5 || computerScore < 5)


        //playRound(). Compare two results. Somehow define who is a winner
        //Pseudocode
        //If (playerSelection === computerSelection)
            //print message 'Draw!'
        //Else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            // (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper"))
            //print message `You win! ${playerSelection} beats ${computerSelection}!`
            //save 1 victory point to playerScore variable
        //Else 
            //print message `You loose! ${computerSelection} beats ${playerSelection}!`
            //save 1 victory point to computerScore variable


                //player choose one of the strings (if statement)
                //Pseudocode
                //Get prompt() value from user and save it into playerSelection variable
                //Use slice() to parse first letter and save it to firstLetter variable
                //Use slice() to parse rest and save it to restLetter variable
                //Use firstLetter.toUpperCase() for first letter
                //Use restLetter.toLowerCase() for rest
                //Combine both parts in one word and save it into playerSelection variable
                //return playerSelection



                //Capitalize function
                // function capitalize(string) {
                //     let last = string.slice(1);
                //     let first = string.slice(0, 1);
                //     let firstUpper = first.toUpperCase();
                //     let lastLower = last.toLowerCase();
                //     result = (firstUpper + lastLower);
                //     return result;
                // }
                //-------

                //getComputerChoice(): computer choose a random string 
                //Pseudocode
                //Save a random number from 0 to 1 in randomDigit variable
                function getComputerChoice() {
                    let computerSelection;
                    let randomDigit = Math.random();
                    if (randomDigit > 0.66) {
                        computerSelection = "Rock";
                    } else if (randomDigit < 0.33) {
                        computerSelection = "Paper";
                    } else {
                        computerSelection = "Scissors";
                    }
                    console.log(randomDigit);
                    console.log(computerSelection);
                    // return computerSelection;
                }
                getComputerChoice();
                //If randomDigit > 0,66
                    //Save "Rock" to computerSelection variable
                //Else if randomDigit < 0,33
                    //Save "Paper" to computerSelection variable
                //Else
                    //Save "Scissors" to computerSelection variable
                //return computerSelection










/* 1. Understand exact problem. Refactor the problem, unless you could explain it in simple English to anyone.
2. Plan a solving. 
    - Does your program have a user interface? what will ot look like? What functionality will the interface have? Sketch it!
    - What inputs will your program have? User input data or from somewhere else?
    - What's the desired output?
    - Given your inputs, what are the steps to return the desired output?
3. Pseudocode. Write a program in a simple words. */