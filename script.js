// Enum list:
// 0 = "rock"
// 1 = "paper"
// 2 = "scissors"
const Choices = Object.freeze({
    "rock": 0,
    "paper": 1,
    "scissors": 2
})

// function randomly returns 0, 1, 2 corresponding to rock, paper, scissors
function getComputerChoice() {
    return Math.floor((3*Math.random()));
}

// function that gets a choice from the user and maps it to the respective integer
function getHumanChoice() {
    value = prompt("Please Enter a Choice: ").toLowerCase();
    while (!(value in Choices)) {
        value = prompt("Please Enter a Valid Choice (rock/paper/scissors)").toLowerCase()
    }
    return Choices[value]
}

// function that plays a match of rock paper scissors
// switch case breaks at end: https://stackoverflow.com/questions/65455535/every-case-in-switch-is-triggered-in-js#:~:text=JavaScript%20supports%20C%20style%20switch,must%20end%20it%20with%20break%3B%20.
// JavaScript supports C style switch case fall through, which means unless there is a break specified, it will continue to execute all the subsequent cases.

// +3 added to make all negatives their respective positive value.
function playRound(humanChoice, computerChoice) {
    console.log(`You selected "${Object.keys(Choices).find(key => Choices[key] === humanChoice)}" and the computer selected "${Object.keys(Choices).find(key => Choices[key] === computerChoice)}".`);
    switch((humanChoice-computerChoice+3)%3) {
        case 0:
            // tie
            console.log("It's a tie!");
            break;
        case 1:
            // player wins
            console.log("You won!");
            humanScore++;
            break;
        case 2:
            // computer wins
            console.log("You lost.");
            computerScore++;
    }
    console.log(`Score (You - Computer): ${humanScore} - ${computerScore}`)

}

// BO5 rounds
function playGame() {
    for (let i=0;i<5;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Score (You - Computer): ${humanScore} - ${computerScore}`)
    if (humanScore > computerScore) {
        console.log("You Win!");
    }
    else if (humanScore < computerScore) {
        console.log("You Lost.");
    }
    else {
        console.log("It's a Draw!");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame()