let player = 0, computer = 0;
let playerSelection;

result = document.getElementById("results");
pScore = document.getElementById("playerScore");
cScore = document.getElementById("computerScore");


pScore.innerHTML = "Player: " + player;
cScore.innerHTML = "Computer: " + computer;

function reply_click(){
    playerSelection = event.target.id;

    function getComputerChoice(){
        let x = Math.floor(Math.random()*10);
        if(x%3 == 0)
            return "rock";
        else if(x%3 == 1)
            return "paper";
        else
            return "scissors";
    }
    
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
        // for(let i = 0;i<5;i++){
        //     let playerSelection = prompt("Enter choice: ");
        //     let computerSelection = getComputerChoice();
        //     playRound(playerSelection, computerSelection);
        // }
        
        let computerSelection = getComputerChoice();
    
        console.log(playerSelection);
        console.log(computerSelection);
    
        console.log(player);
        console.log(computer);
    
        playRound(playerSelection, computerSelection);
        if(player>=5 && computer<5){
            console.log("player");

            result.innerHTML = "Player wins!";

        } 
        else if(player<5 && computer>=5){
            console.log("computer");

            result.innerHTML = "Computer wins!";

        }
    }
    game();
    pScore.innerHTML = "Player: " + player;
    cScore.innerHTML = "Computer: " + computer;
}