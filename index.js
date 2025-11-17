console.log("sdasdasd")


let player = {name: "Player", chips: 200}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

console.log(cards)

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNum = Math.floor( Math.random() * 13 ) + 1
    if ( randomNum === 1) {
        return 11
    } else if ( randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackJack = false
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    console.log(message)
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
       console.log("Drawing a new card")
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()
      console.log(cards)

   }
}

// CASH OUT!
