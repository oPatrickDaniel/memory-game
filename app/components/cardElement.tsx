import Image from 'next/image'
import LogoImg from '@/public/logo.webp'

interface CardCmpProps {
  card: {
    id: string
    flipped: boolean
    icon: string
  }
  turnCard: (id: string) => void
}

export default function CardCmp({ card, turnCard }: CardCmpProps) {
  return (
    <>
      <div
        onContextMenu={(e) => {
          e.preventDefault()
        }}
        onClick={() => {
          turnCard(card.id)
          console.log(card.flipped)
        }}
        id={card.id}
        className={`preserve-3d
        ${card.flipped ? 'flip' : ''}
         relative h-24 w-20`}
        data-icon={card.icon}
      >
        <div
          className="backface-hidden shadow-custom absolute flex
           h-full w-full items-center justify-center rounded-2xl bg-blue-800"
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
          className="backface-hidden shadow-custom rotate-y-180 absolute flex h-full w-full
         items-center justify-center rounded-2xl bg-white"
        >
          <Image
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${card.icon}/${card.icon}-plain.svg`}
            alt={card.icon}
            style={{
              width: '65%',
              height: 'auto',
            }}
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  )
}
