import CardCmp from './components/card'
import EndGameCmp from './components/endgame'

export default function Home() {
  return (
    <main
      className="flex h-screen flex-col items-center justify-center gap-12
       bg-gradient-to-b from-cyan-500 to-cyan-200"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Jogo da memória</h1>
        <div className="grid max-w-md grid-cols-5 grid-rows-4 gap-3">
          <CardCmp />
        </div>
      </div>
      <EndGameCmp />
    </main>
  )
}
