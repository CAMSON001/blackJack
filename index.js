
let count = 1;
let firstCard = Math.floor(Math.random() * 12 +1 )
let secondCard = Math.floor(Math.random() * 12 +1 )
let sum =  firstCard+secondCard
let HasBlackJack = false
let isAlive = true
let messages = ""
let som = document.getElementById("sums")
let card = document.getElementById("card")

let messageEl =  document.getElementById("message")
let myAarray = []
let myString = "" 

let player = "Vamoro"
let solde = 50
let playerEl =  document.getElementById("player-el")
playerEl.textContent = " The player " + player +  " start with :  " + solde 
let infoSolde = document.getElementById("info-solde")



function renderGame(){
    
    console.log("The game is runing...")
    if(sum<21){
        messages = "Do wanna draw another card ?"
    }
    else if (sum===21){
        messages = "gooood you've a blackjack"
        HasBlackJack = true
    }
    else{
        messages = "You lose the game "
        isAlive = false
    }
    messageEl.textContent = messages
    som.textContent = "Sum : " + sum

     

};


function newCard(){
    if(solde ===50 && isAlive ===false){
        let information = "votre solde est insuffisant... "
        infoSolde.textContent = information
        solde-= 50
        playerEl.textContent = " The player " + player +  " has :  " + solde 
    }
    if(isAlive===true && HasBlackJack ===false){
        let thirdCard = Math.floor(Math.random() * 12 +1 )
         sum+= thirdCard
         renderGame();                                                                                                                        
         myAarray.push(thirdCard)
         myString = myAarray.join('  ')
         card.textContent = myString
    }

  

}

function StartGame(){

    if(solde < 50 ){
        let information = "Votre solde est insuffisant..."
        infoSolde.textContent = information
    }

    else {
        if (isAlive===false){
            solde-= 50
            playerEl.textContent = " The player " + player +  " has :  " + solde 
        }
        else if (HasBlackJack=== true ){
            solde+= 20
            playerEl.textContent = " The player " + player +  " has :  " + solde 
    
        }
    
        if (isAlive=== false || HasBlackJack=== true  ){
            count++
            isAlive = true
            HasBlackJack = false
            firstCard = Math.floor(Math.random() * 12 +1 )
            secondCard = Math.floor(Math.random() * 12 +1 )
            sum =  firstCard+secondCard
            
        }
        renderGame();
        card.textContent = "  " + "Cards " + count + " :" + firstCard + "  " + secondCard 
        myAarray.push(card.textContent)

    }

}

