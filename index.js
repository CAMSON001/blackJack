
let count = 1;
let firstCard = Math.floor(Math.random() * 12 +1 )
let secondCard = Math.floor(Math.random() * 12 +1 )
let sum =  firstCard+secondCard
let messages = ""
let som = document.getElementById("sums")
let card = document.getElementById("card")
let messageEl =  document.getElementById("message")
let myAarray = []
let myString = "" 

let player = {
    name : "Vamoro",
    solde : 50,
    isAlive : true,
    HasBlackJack : false
}

let playerEl =  document.getElementById("player-el")
playerEl.textContent = " The player " + player.name +  " start with :  " + player.solde 
let infoSolde = document.getElementById("info-solde")



function renderGame(){
    
    console.log("The game is runing...")
    if(sum<21){
        messages = "Do wanna draw another card ?"
    }
    else if (sum===21){
        messages = "gooood you've a blackjack"
        player.HasBlackJack = true
    }
    else{
        messages = "You lose the game "
        player.isAlive = false
    }
    messageEl.textContent = messages
    som.textContent = "Sum : " + sum

     

};


function newCard(){
    if(player.solde === 50 &&  player.isAlive ===false){
        let information = "votre solde est insuffisant... "
        infoSolde.textContent = information
        player.solde -= 50
        playerEl.textContent = " The player " + player.name +  " has :  " + player.solde 
    }
    if( player.isAlive ===true && player.HasBlackJack ===false){
        let thirdCard = Math.floor(Math.random() * 12 +1 )
         sum+= thirdCard
         renderGame();                                                                                                                        
         myAarray.push(thirdCard)
         myString = myAarray.join('  ')
         card.textContent = myString
    }

  

}

function StartGame(){

    if(player.solde  < 50 ){
        let information = "Votre solde est insuffisant..."
        infoSolde.textContent = information
    }

    else {
        if ( player.isAlive ===false){
            player.solde -= 50
            playerEl.textContent = " The player " + player.name +  " has :  " + player.solde 
        }
        else if (player.HasBlackJack=== true ){
            player.solde+= 20
            playerEl.textContent = " The player " + player.name +  " has :  " + player.solde 
    
        }
    
        if ( player.isAlive === false || player.HasBlackJack=== true  ){
            count++
            player.isAlive = true
            player.HasBlackJack = false
            firstCard = Math.floor(Math.random() * 12 +1 )
            secondCard = Math.floor(Math.random() * 12 +1 )
            sum =  firstCard+secondCard
            
        }
        renderGame();
        card.textContent = "  " + "Cards " + count + " :" + firstCard + "  " + secondCard 
        myAarray.push(card.textContent)

    }

}

