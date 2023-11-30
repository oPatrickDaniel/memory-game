'use client'
import { useEffect, useState } from 'react'
import { CardProps, Game } from './api/game'
import GameBoardCmp from './components/gameBoard'
import EndGameCmp from './components/gameOver'

const techCards = [
  'typescript',
  'c',
  'cplusplus',
  'php',
  'csharp',
  'python',
  'bash',
  'java',
  'mysql',
  'javascript',
]

const game = new Game(techCards)
game.createTheDeck()

export default function Home() {
  const [cards, setCards] = useState<CardProps[]>([])
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    setCards(game.deck)
  }, [])

  function compareCards(id: string): void {
    if (game.lockMode) return
    const updatedCards = [...cards]

    if (game.setCardInMemory(id)) {
      setCards(updatedCards)
    }

    if (!game.card2) return

    if (game.checkMatch()) {
      if (game.checkGameOver()) {
        setGameOver(true)
        return
      }
      game.attemptCounter()
      game.clearMemory()
    } else {
      setTimeout(() => {
        game.unflipCards()
        game.clearMemory()
        setCards(game.deck)
      }, 1000)
    }
  }

  function restartGame() {
    setCards(game.createTheDeck())
    game.unflipCards()
    game.clearMemory()
    setGameOver(false)
  }

  return (
    <main
      className="flex h-screen flex-col items-center justify-center gap-12
       bg-gradient-to-b from-cyan-500 to-cyan-200"
    >
      <GameBoardCmp cards={cards} compareCards={compareCards} />
      <EndGameCmp
        attempts={game.attempts}
        gameOver={gameOver}
        restartGame={restartGame}
      />
    </main>
  )
}
