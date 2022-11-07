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

function round(playerSelection, computerSelection)
{
    let result;
    switch(true){
        case playerSelection == computerSelection:
            result = 'Draw';
            break;
        case (playerSelection == 'paper' && computerSelection == 'scissors'):
        case (playerSelection == 'scissors' && computerSelection == 'rock'):
        case (playerSelection == 'rock' && computerSelection == 'paper'):
            result = 'Computer';
            break;
        default:
            result = 'Player';
    }
    if(result == 'Draw')
        alert('It is a draw !!!');
        else
            {
                alert(`${result} wins !!!`);
            }
}

round(getPlayerSelection(),getComputerChoice());

