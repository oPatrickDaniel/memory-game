import CardCmp from './components/card'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-12 bg-gradient-to-b from-indigo-500 to-indigo-300">
      <h1 className="text-4xl font-bold">Jogo da memória</h1>
      <div className="grid max-w-md grid-cols-4 grid-rows-5 gap-3">
        <CardCmp />
      </div>
    </main>
  )
}
