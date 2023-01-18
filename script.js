let player = 0, computer = 0;

function playRound(playerSelection, computerSelection){
    if(!(playerSelection === computerSelection)){
        if(playerSelection === "rock"){
            if(computerSelection === "paper") 
                computer++;        

            else
                player++;        
        }

        else if(playerSelection === "paper"){
            if(computerSelection === "scissors")
                computer++;       
            
            else
                player++;       
        }

        else{
            if(computerSelection === "rock")
                computer++;      
            
            else
                player++;        
        }
    }
    
}

function game(){
    for(let i = 0;i<5;i++){
        let playerSelection = prompt("Enter choice: ");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if(player > computer) console.log("player");
    else if(player == computer) console.log("draw");
    else return console.log("computer");
}

function getComputerChoice(){
    let x = Math.floor(Math.random()*10);
    if(x%3 == 0)
        return "rock";
    else if(x%3 == 1)
        return "paper";
    else
        return "scissors";
}

game();