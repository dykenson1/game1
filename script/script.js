// Ecrire une function permetant a la machine de faire un choix aleatoire
function getComputerChoice(){
    let choix = "Pierre,Papier,Ciseaux"
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
        (playerSelection ==="pierre" && computerSelection==="Ciseaux")||
        (playerSelection==="papier" && computerSelection==="Pierre")||
        (playerSelection==="ciseaux" && computerSelection==="Papier")){
        let win = "Gagnez" + " " + playerSelection+ " " + "peut battre" + " " + computerSelection
        return win
    }
    else if(
        (playerSelection ==="ciseaux" && computerSelection==="Pierre")||
        (playerSelection==="pierre" && computerSelection==="Papier")||
        (playerSelection==="papier" && computerSelection==="Ciseaux")
    ){
        let lose = "Perdu"+ " " + playerSelection + " " + "ne peut pas battre" + " " +computerSelection
        return lose
    }
    else{
        return " "
    }

}



// Creation et selection des elements du DOM
let rock = document.createElement("button")
let paper = document.createElement("button")
let scissor = document.createElement("button")
let h1  = document.createElement("h1")
let div1 = document.createElement("div")
let footer = document.createElement("footer")
let copyRight =document.createElement('p')
let para1 = document.createElement("p")
let main = document.createElement("div")
let div2 = document.createElement("div")
let div0 = document.createElement("div")
let div = document.createElement("div")
let nul = document.createElement("p")
let p = document.createElement("p")
let paraCom = document.createElement("p")
let paraJou = document.createElement("p")

paraCom.setAttribute("class","pa1")
paraJou.setAttribute("class","pa2")

let score = document.createElement("div");
let rejouer = document.createElement("button")
let player = 0;
let computer = 0;
let tie = 0;

// Affichage des element dans le HTML
h1.textContent = "Fais ton choix."
para1.textContent = "Pierre, papier ou ciseaux?"
para1.setAttribute("class","para1")
rock.textContent = "Pierre"
paper.textContent = "Papier"
scissor.textContent = "Ciseaux"

paraCom.textContent = "Computer :"
paraJou.textContent = "Jouer :"

rock.setAttribute("class","buton")
paper.setAttribute("class","buton")
scissor.setAttribute("class","buton")
div1.setAttribute("class","div1")
main.setAttribute("id", "main-content");

//Les boutons et leurs fonctions
scissor.addEventListener("click",()=>{
    
    let playerSelection = "ciseaux"
    let computerSelection = getComputerChoice()
    let result = playRound(playerSelection,computerSelection)
    p.textContent = result
    if(result.startsWith("Gagnez")){
        player++
        paraJou.textContent = `Jouer : ${player}`
    }
    if(result.startsWith("Perdu")){
        computer++
        paraCom.textContent = `Computer : ${computer}`
    } 
    if(result.startsWith(" ")){
        tie++
        nul.textContent = `Nul ${tie}`
    }else{
        nul.textContent = ""
    }

    function game(){
    
    
        if (player === 5 && computer < 5){
            score.style.display = "flex"
            score.textContent = `Jouer gagne  
             ${player} : ${computer}`
            rejouer.textContent = "Rejouer"
            rejouer.addEventListener("click",()=>{
                player = 0
                computer = 0
                tie = 0
                paraCom.textContent = "Computer :"
                paraJou.textContent = "Jouer :"
                nul.textContent = ""
                score.style.display = "none"
                p.textContent = ""
            })
            score.appendChild(rejouer)
            div.appendChild(score)
        }
        if(player < 5 && computer === 5){
            score.style.display = "flex"
            score.textContent = `Computer gagne  
            ${computer} : ${player}`
            rejouer.textContent = "Rejouer"
            rejouer.addEventListener("click",()=>{
                player = 0
                computer = 0
                tie = 0
                paraCom.textContent = "Computer :"
                paraJou.textContent = "Jouer :"
                nul.textContent = ""
                score.style.display = "none"
                p.textContent = ""
            })
            score.appendChild(rejouer)
            div.appendChild(score)
        }
        
             
    }
    game()

})

paper.addEventListener("click",()=>{
    let playerSelection = "papier"
    let computerSelection = getComputerChoice()
    let result = playRound(playerSelection,computerSelection)
    p.textContent = result
    if(result.startsWith("Gagnez")){
        player++
        paraJou.textContent = `Jouer : ${player}`
    }
    if(result.startsWith("Perdu")){
        computer++
        paraCom.textContent = `Computer : ${computer}`
    } 
    if(result.startsWith(" ")){
        tie++
        nul.textContent = `Nul ${tie}`
    }else{
        nul.textContent = ""
    }
    function game(){
    
    
        if (player === 5 && computer < 5){
            score.style.display = "flex"
            score.textContent = `Jouer gagne  
             ${player} : ${computer}`
            rejouer.textContent = "Rejouer"
            rejouer.addEventListener("click",()=>{
                player = 0
                computer = 0
                tie = 0
                paraCom.textContent = "Computer :"
                paraJou.textContent = "Jouer :"
                nul.textContent = ""
                score.style.display = "none"
                p.textContent = ""
            })
            score.appendChild(rejouer)
            div.appendChild(score)
        }
        if(player < 5 && computer === 5){
            score.style.display = "flex"
            score.textContent = `Computer gagne  
            ${computer} : ${player}`
            rejouer.textContent = "Rejouer"
            rejouer.addEventListener("click",()=>{
                player = 0
                computer = 0
                tie = 0
                paraCom.textContent = "Computer :"
                paraJou.textContent = "Jouer :"
                nul.textContent = ""
                score.style.display = "none"
                p.textContent = ""
            })
            score.appendChild(rejouer)
            div.appendChild(score)
        }
             
    }
    game()
})

rock.addEventListener("click",()=>{
    let playerSelection = "pierre"
    let computerSelection = getComputerChoice()
    let result = playRound(playerSelection,computerSelection)
    p.textContent = result
    if(result.startsWith("Gagnez")){
        player++
        paraJou.textContent = `Jouer : ${player}`
    }
    if(result.startsWith("Perdu")){
        computer++
        paraCom.textContent = `Computer : ${computer}`
    } 
    if(result.startsWith(" ")){
        tie++
        nul.textContent = `Nul ${tie}`
    }else{
        nul.textContent = ""
    }
    function game(){
    
    
        if (player === 5 && computer < 5){
            score.style.display = "flex"
            score.textContent = `Jouer gagne  
             ${player} : ${computer}`
            rejouer.textContent = "Rejouer"
            rejouer.addEventListener("click",()=>{
                player = 0
                computer = 0
                tie = 0
                paraCom.textContent = "Computer :"
                paraJou.textContent = "Jouer :"
                nul.textContent = ""
                score.style.display = "none"
                p.textContent = ""
            })
            score.appendChild(rejouer)
            div.appendChild(score)
        }
        if(player < 5 && computer === 5){
            score.style.display = "flex"
            score.textContent = `Computer gagne  
            ${computer} : ${player}`
            rejouer.textContent = "Rejouer"
            rejouer.addEventListener("click",()=>{
                player = 0
                computer = 0
                tie = 0
                paraCom.textContent = "Computer :"
                paraJou.textContent = "Jouer :"
                nul.textContent = ""
                score.style.display = "none"
                p.textContent = ""
            })
            score.appendChild(rejouer)
            div.appendChild(score)
        }
             
    }
    game()
})

score.setAttribute("class","popop")
rejouer.setAttribute("class","popopButon")


// Les noeuds
div.appendChild(paraCom)
div.appendChild(paraJou)
div0.appendChild(p)
div.appendChild(nul)
div1.appendChild(rock)
div1.appendChild(paper)
div1.appendChild(scissor)
div2.appendChild(div)
div2.appendChild(div0)
main.appendChild(div2)
main.appendChild(div1)



document.body.appendChild(h1)
document.body.appendChild(para1)
document.body.appendChild(main)






footer.appendChild(copyRight)
copyRight.innerHTML= "&copy; Jean Dykenson Laurent - 2023"
copyRight.style.textAlign = "center"
document.body.appendChild(footer)








