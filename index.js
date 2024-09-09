const options = ["rock","paper","scissors"];

function getComputerChoice (){
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    console.log("--------------")
    if(result == "Tie"){
        return "It's a tie!"
    }
    else if(result == "Player"){
        return `${playerSelection} beats ${computerSelection}, You Win!`
    }
    else{
        return `${computerSelection} beats ${playerSelection}, You Lose!`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, paper or scissors, which will you choose...");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput == true
            return choiceInLower
        }
    }
}

function game() {
    let scorePlayer = 0; 
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice();
        console.log ((playRound(playerSelection, computerSelection)));
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++
        }
    }
    if (scorePlayer > scoreComputer) {
        console.log("Congratulations! You won the game!")
    }
    else if (scoreComputer > scorePlayer){
        console.log("Too bad! The computer won the game!")
    }
}

game()