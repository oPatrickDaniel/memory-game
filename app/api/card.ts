export interface CardProps {
  id: string
  icon: string
  url: string
  flipped: boolean
}

interface CardDataProps {
  tech: string
  url: string
}

class CardDeckShuffler {
  static shuffleDeck(deck: CardProps[]): CardProps[] {
    return deck.sort(() => Math.random() - 0.5)
  }
}

export class Card {
  protected _deck: CardProps[]
  protected _cardsTechs: CardDataProps[]

  constructor(cardsTechs: CardDataProps[]) {
    this._cardsTechs = cardsTechs
    this._deck = []
  }

  private createPairsOfCards(cardData: CardDataProps): CardProps[] {
    return [
      {
        id: `${cardData.tech}01`,
        icon: cardData.tech,
        url: cardData.url,
        flipped: false,
      },
      {
        id: `${cardData.tech}02`,
        icon: cardData.tech,
        url: cardData.url,
        flipped: false,
      },
    ]
  }

  private initializeDeck(): CardProps[] {
    const deck: CardProps[] = []
    this._cardsTechs.forEach((data) => {
      deck.push(...this.createPairsOfCards(data))
    })
    return deck
  }

  public createAndShuffleDeck(): CardProps[] {
    this._deck = this.initializeDeck()
    this._deck = CardDeckShuffler.shuffleDeck(this._deck)
    return this._deck
  }
}
