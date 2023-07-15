const choices = ["rock", "paper","scissors"];

function playerChoice() {
    const userChoice = prompt("rock, paper, scissors").toLowerCase();
    
    if (userChoice == null || !choices.includes(userChoice)) {
        alert("Empty or wrong choice!");
    } else if (choices.includes(userChoice)) {
        return userChoice;
    }
}

function computerChoice() {
    // get random index value
    const randomIndex = Math.floor(Math.random()* choices.length);
    // get random item
    const item = choices[randomIndex];
    //return item
    return item;
}


function playRound(playerSelection, computerSelection){
    /*  assigned parameters as Variables to avoid errors on multiple comparisons of functions
     assigned playerselection = player choice & computerselection = computerChoice outside
     the play round function */
    if (playerSelection === computerSelection){
        // fixed code from console log to return to avoid showing undefined in console
        return "It's a tie!";
    }
    else if (
        // Proper usage of  ( && ) AND and OR ( || ) instead of brute forcing if else
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
        // used else instead of bruteforcing all scenarios
    }   else { 
        return "You lose!";
    }
}
// creation of game function
function game(){
    // created playerscore and computerscore variables and set them to 0
    let playerScore = 0;
    let computerScore = 0;
    // created round variable and set it to 0
    let rounds = 0;

    // while loop function
    // assignment of variable playerSelection to function playerChoice () and vice versa for computer choice

    while (rounds < 5) {
        const playerSelection = playerChoice();
        const computerSelection = computerChoice();
        // assigned variable result the playround function
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        // checking result for "You win" string to increase player score by incrementation
        if (result === "You win!") {
            playerScore++;
        // checking result for "You lose" string to increase computer score by incrementation
        } else if (result === "You lose!") {
            computerScore++;
        }
        // incrementation before the variable round so overall rounds will be 5 instead of after
        ++rounds;
    }
        //  printing in console the final score
        // note the usage of backtick ` so i can call out the variables ${playerScore} and ${computerScore}
    console.log (`Final score - Player: ${playerScore}, Computer: ${computerScore}`)
}
// calling out the gaming function
game();