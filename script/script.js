// Ecrire une function permetant a la machine de faire un choix aleatoire
function getComputerChoice(){
    let choix = "Rock,Paper,Scissor"
    let choixSplit = choix.split(",")//On change notre chaine en tableau
    let randomNumber= Math.floor(Math.random()* choixSplit.length); // On genere un nombre entre 0 et
    return choixSplit[randomNumber]
    // On retourne notre tableau nouvellement cree grace a la methode "split" avec le nom
    // le nombre aleatoire cree en index "[]"" 
}

// fonction qui permet de lancer une partie
function playRound(playerSelection,computerSelection){

    // toLowerCase permet de changer quelque soit l'entre du joueur en lettre miniscule
    playerSelection = playerSelection.toLowerCase()

    if(
        (playerSelection ==="rock" && computerSelection==="Scissor")||
        (playerSelection==="paper" && computerSelection==="Rock")||
        (playerSelection==="scissor" && computerSelection==="Paper")){
        let win = "Tu as gagner" + " " + playerSelection+ " " + "peut battre" + " " + computerSelection
        return win
    }
    else if(
        (playerSelection ==="scissor" && computerSelection==="Rock")||
        (playerSelection==="rock" && computerSelection==="Paper")||
        (playerSelection==="paper" && computerSelection==="Scissor")
    ){
        let lose = "Tu as perdu"+ " " + playerSelection + " " + "ne peut pas battre" + " " +computerSelection
        return lose
    }
    else{
        return "Match nul"
    }

}

function game(){
    let player = 0;
    let computer = 0;
    let score;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock,Paper,Scissor");
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection,computerSelection)
        console.log(result)
        if(result.startsWith("Tu as gagner")){
            player++
            console.log(player, ":", computer)
        }
        else if(result.startsWith("Tu as perdu")){
            computer++
            console.log(player, ":", computer)
        }
        
    }

    if (player > computer){
        score= "Vous avez gagner : " + player + ":" + computer
        console.log(score)
    }
    else if(player < computer){
        score = "vous avez perdu :" + player +":" + computer;
        console.log(score)
    }
    else{
        console.log("Nul")
    }
         
}

game()


