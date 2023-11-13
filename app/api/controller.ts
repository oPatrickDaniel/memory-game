
import { card } from "./card"
import { Game } from "./game"

let techs = [
    "bootstrap",
    "css",
    // "electron",
    // "firebase",
    // "html",
    // "javascript",
    // "jquery",
    // "mongo",
    // "node",
    // "react",
]

const game = new Game(techs)

console.log(game)

// document.addEventListener('DOMContentLoaded', () => {
//     game.createDeckOfCards()
//     insertCardsOnTheBoard(game.deck)
//     restartGame()
// })

// function insertCardsOnTheBoard(cards: card[]) {
//     // insere as cartas no dom
//     let gameBoard = document.querySelector("#board") as HTMLElement

//     cards.forEach((card) => {
//         let icon = card.icon
//         let id = card.id

//         gameBoard.innerHTML +=
//             `<div onclick="flippedCards(event)" id="${id}"class="card" data_icon="${icon}">
//                 <div class="card_front">
//                     <img class="icon" src = "./assets/images/${icon}.png">
//                 </div>
//                 <div div class="card_back">
//                     <img class="icon" src="./assets/images/logo.png">
//                 </div>
//             </div>`
//     })
// }

// function flippedCards(event: Event) {
//     let card = event.currentTarget as HTMLElement

//     if (!game.setCardInMemory(card.id)) return

//     card.classList.add("flip")

//     if (!game.card2) return

//     game.checkMath()

//     if (game.checkMath()) {
//         game.clearCards()

//         if (game.checkGameOver()) {
//             let endgameView = document.querySelector("#endgame") as HTMLElement
//             endgameView.style.display = "flex"
//             insertAttempts()
//         }
//     } else {
//         setTimeout(() => {
//             if (!game.card1 || !game.card2) return
//             let card1Element = document.getElementById(game.card1.id) as HTMLElement
//             let card2Element = document.getElementById(game.card2.id) as HTMLElement
//             card1Element.classList.remove("flip")
//             card2Element.classList.remove("flip")
//             game.unflipCards()
//         }, 1000)
//     }
// }

// function insertAttempts() {
//     let attempts = document.querySelector("#attempts") as HTMLElement
//     attempts.innerText = `Tentativas: ${game.attempts}`
// }

// function restartGame() {
//     //reinicia o jogo
//     document.querySelector("#restart")?.addEventListener("click", () => {
//         window.location.reload()
//     })
// }