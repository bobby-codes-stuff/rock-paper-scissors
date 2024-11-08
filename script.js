const Choices = Object.freeze({
    "rock": 0,
    "paper": 1,
    "scissors": 2
})

// function randomly returns 0, 1, 2 corresponding to rock, paper, scissors
function getComputerChoice() {
    return Math.floor((3*Math.random()));
}

// function that plays a match of rock paper scissors
// switch case breaks at end: https://stackoverflow.com/questions/65455535/every-case-in-switch-is-triggered-in-js#:~:text=JavaScript%20supports%20C%20style%20switch,must%20end%20it%20with%20break%3B%20.
// JavaScript supports C style switch case fall through, which means unless there is a break specified, it will continue to execute all the subsequent cases.

// add 3 to make all negatives their respective positive value.
// if the difference between the human choice and computer choice is +1, we win
// if the difference between the human choice and computer choice is +2, computer wins
function playRound(humanChoice, computerChoice) {
    roundWinner.textContent = `You selected "${Object.keys(Choices).find(key => Choices[key] === humanChoice)}" and the computer selected "${Object.keys(Choices).find(key => Choices[key] === computerChoice)}".`
    switch((humanChoice-computerChoice+3)%3) {
        case 0:
            // tie
            roundWinner.textContent += "\nIt's a tie!"; // todo: change conseole log to element.textContent = 
            break;
        case 1:
            // player wins
            roundWinner.textContent += "\nYou won!";
            humanScore++;
            break;
        case 2:
            // computer wins
            roundWinner.textContent += "\nYou lost.";
            computerScore++;
    }
    scoretracker.textContent = `${humanScore} - ${computerScore}`;

    if (Math.max(humanScore, computerScore) >= 5) {
        if (humanScore > computerScore) {
            alert(`Final Score: (You - Computer)\n${humanScore} - ${computerScore}\nYou Win!`);
        }
        else {
            alert("Final Score: (You - Computer)\n${humanScore} - ${computerScore}\nYou Lost.");
        }

        // reset event
        humanScore = 0;
        computerScore = 0;
        scoretracker.textContent = `${humanScore} - ${computerScore}`;
        roundWinner.textContent = "";
    }
}

let humanScore = 0;
let computerScore = 0;


// initialise elements in webpage
const body = document.querySelector("body");

// create additional elements in webpage
const gameArea = document.createElement("div");

const scoreboard = document.createElement("div");
scoreboard.textContent = "Scoreboard (You - Computer): ";

const scoretracker = document.createElement("p");
scoretracker.textContent = `${humanScore} - ${computerScore}`;
scoreboard.appendChild(scoretracker);

// give buttons ids to create distinction and allow for event delegation
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.setAttribute("id", "rockBtn");

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.setAttribute("id", "paperBtn");

const scissorBtn = document.createElement("button");
scissorBtn.textContent = "Scissors";
scissorBtn.setAttribute("id", "scissorBtn");

const roundWinner = document.createElement("p");

gameArea.appendChild(scoreboard);
gameArea.appendChild(rockBtn);
gameArea.appendChild(paperBtn);
gameArea.appendChild(scissorBtn);
gameArea.appendChild(roundWinner);

body.append(gameArea);

gameArea.addEventListener("click", (e) => {
    const action = e.target.getAttribute("id");
    switch (action) {
        case "rockBtn":
            playRound(0, getComputerChoice());
            break;
        case "paperBtn":
            playRound(1, getComputerChoice());
            break;
        case "scissorBtn":
            playRound(2, getComputerChoice());
    }
});