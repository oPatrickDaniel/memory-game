import CardCmp from './cardElement'
import { CardProps } from '../api/game'

interface GameBoardCmpProps {
  cards: CardProps[]
  compareCards: (id: string) => void
}

export default function GameBoardCmp({
  cards,
  compareCards,
}: GameBoardCmpProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Jogo da memória</h1>
        <div className="grid max-w-md grid-cols-5 grid-rows-4 gap-3">
          {cards.map((card, index) => {
            return <CardCmp key={index} card={card} turnCard={compareCards} />
          })}
        </div>
      </div>
    </>
  )
}
