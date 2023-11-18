// interface endGameCmpProps {

// }
export default function EndGameCmp() {
  return (
    <div
      className="absolute hidden h-full w-full flex-col items-center justify-center
       gap-8 bg-black/75 text-white "
    >
      <h2 className="text-4xl font-bold">Parabéns. Você completou o jogo</h2>
      <p className="text-3xl">Tentativas: 22</p>
      <button className="rounded-full bg-blue-600 px-8 py-4 text-xl">
        Jogar novamente
      </button>
    </div>
  )
}
