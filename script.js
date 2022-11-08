function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random()*100)+1;
    if(randomNumber>=66)
        return "rock";
            else if(randomNumber>=33)
                return "paper";
                    else
                        return "scissors";
}

function getPlayerSelection()
{
    let selection = prompt("Choose Rock Paper or Scissors");
    while(selection.toLowerCase() != "rock" && selection.toLowerCase()  != "scissors" && selection.toLowerCase() != "paper")
    {
        alert(`${selection} is not a valid choice, please try again`);
        selection=prompt("Choose Rock Paper or Scissors");
    }
    return selection.toLowerCase();
}

function playRound(playerSelection, computerSelection)
{
    let result;
    switch(true){
        case playerSelection == computerSelection:
            result = 'Draw';
            return result;
            break;
        case (playerSelection == 'paper' && computerSelection == 'scissors'):
        case (playerSelection == 'scissors' && computerSelection == 'rock'):
        case (playerSelection == 'rock' && computerSelection == 'paper'):
            result = 'Computer';
            return result;
            break;
        default:
            result = 'Player';
            return result;
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore!=5 && computerScore!=5)
    {
        let result = playRound(getPlayerSelection(), getComputerChoice());
        if(result=='Player')
        {
            playerScore++;
        }
        else if(result=='Computer')
            {
                computerScore++;
            }
        if(result=='Draw')
            alert(`It's a draw!!!!
Player score: ${playerScore} - Computer score: ${computerScore} `);
        else
        alert(`${result} wins!!!!
Player score: ${playerScore} - Computer score: ${computerScore} `);
    }
    alert(playerScore>computerScore ? 'Player wins the game' : 'Cmputer wins the game');
}

game();