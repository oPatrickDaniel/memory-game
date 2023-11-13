// interface CardCmpProps { }
// props: cardCmpProps

export default function CardCmp() {
  return (
    <>
      <div className="preserve-3d  flip relative h-24 w-20">
        <div
          className="backface-hidden shadow-custom rotate-y-180 absolute flex h-full
         w-full items-center justify-center rounded-2xl bg-violet-700"
        >
          1
        </div>
        <div
          className="backface-hidden shadow-custom absolute flex h-full w-full
         items-center justify-center rounded-2xl bg-purple-500"
        >
          2
        </div>
      </div>
    </>
  )
}
