import React from 'react'

interface EndGameCmpProps {
  gameOver: boolean
  attempts: number
  restartGame: () => void
}

export default function EndGameCmp({
  gameOver,
  attempts,
  restartGame,
}: EndGameCmpProps) {
  return gameOver ? (
    <div
      className="absolute flex h-full w-full flex-col items-center justify-center
       gap-8 bg-black/75 text-white "
    >
      <h2 className="text-4xl font-bold">Parabéns. Você completou o jogo</h2>
      <p className="text-3xl">Tentativas: {attempts}</p>
      <button
        onClick={restartGame}
        className="rounded-full bg-blue-600 px-8 py-4 text-xl"
      >
        Jogar novamente
      </button>
    </div>
  ) : (
    <></>
  )
}
