import Image from 'next/image'
import LogoImg from '@/app/images/logo.webp'

// interface CardCmpProps { }
// props: cardCmpProps

export default function CardCmp() {
  return (
    <>
      <div className="preserve-3d  flip relative h-24 w-20">
        <div
          className="backface-hidden shadow-custom rotate-y-180 absolute flex
           h-full w-full items-center justify-center rounded-2xl bg-blue-700"
        >
          <Image
            src={LogoImg}
            alt="Logo"
            style={{
              width: '80%',
              height: 'auto',
            }}
          />
        </div>
        <div
          className="backface-hidden shadow-custom absolute flex h-full w-full
         items-center justify-center rounded-2xl bg-blue-200"
        >
          tecnologia
        </div>
      </div>
    </>
  )
}
