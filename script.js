function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random()*100+1);
    if(randomNumber>=66)
        return "Rock";
            else if(randomNumber>=33)
                return "Paper";
                    else
                        return "Scissors";
}

function getPlayerSelection()
{
    console.log("Choose Rock Paper or Scissors");
    let selection = prompt("Choose Rock Paper or Scissors");
    while(selection.toLowerCase() != "rock" && selection.toLowerCase()  != "scissors" && selection.toLowerCase() != "paper")
    {
        alert(`${selection} is not a valid choice, please try again`);
        selection=prompt("Choose Rock Paper or Scissors");
    }

}

getPlayerSelection();
