export interface CardProps {
  id: string
  icon: string
  flipped: boolean
}

function shuffleDeck(deck: CardProps[]): CardProps[] {
  return deck.sort(() => Math.random() - 0.5)
}

export class Card {
  protected _deck: CardProps[]
  private _cardsTech: string[]

  constructor(cardsTech: string[]) {
    this._cardsTech = cardsTech
    this._deck = []
  }

  get deck() {
    return this._deck
  }

  private createPairsOfCards(cardTech: string): CardProps[] {
    return [
      {
        id: `${cardTech}01`,
        icon: cardTech,
        flipped: false,
      },
      {
        id: `${cardTech}02`,
        icon: cardTech,
        flipped: false,
      },
    ]
  }

  private initializeDeck(): CardProps[] {
    const deck: CardProps[] = []
    this._cardsTech.forEach((tech) => {
      deck.push(...this.createPairsOfCards(tech))
    })
    return deck
  }

  public createTheDeck(): CardProps[] {
    this._deck = this.initializeDeck()
    this._deck = shuffleDeck(this._deck)
    return this._deck
  }
}
export class Game extends Card {
  private _card1: CardProps | null = null
  private _card2: CardProps | null = null
  private _lockMode: boolean
  private _attempts: number

  constructor(cardsTech: string[]) {
    super(cardsTech)
    this._lockMode = false
    this._attempts = 1
  }

  get card2() {
    return this._card2
  }

  get attempts() {
    return this._attempts
  }

  public setCardInMemory(id: string): boolean {
    const card: CardProps | undefined = this._deck.find((c) => c.id === id)
    console.log(card)
    if (!card || card.flipped || this._lockMode) {
      console.log('carta não setada')
      return false
    }

    if (!this._card1) {
      this._card1 = card
      this._card1.flipped = true
      console.log('carta 1 setada')
    } else {
      this._card2 = card
      this._card2.flipped = true
      this._lockMode = true
      console.log('carta 2 setada')
    }
    return true
  }

  public attemptCounter(): void {
    this._attempts++
  }

  public checkMatch(): boolean {
    this.attemptCounter()
    this._card1?.icon === this._card2?.icon
      ? console.log('ouve match')
      : console.log('não ouve match')
    return this._card1?.icon === this._card2?.icon
  }

  public clearMemory(): void {
    this._card1 = null
    this._card2 = null
    this._lockMode = false
    console.log('memoria limpa')
  }

  public unflipCards(): void {
    if (this._card1 && this._card2) {
      this._card1.flipped = false
      this._card2.flipped = false
      console.log('cartas desviradas')
    }
  }

  public checkGameOver(): boolean {
    if (this._deck.filter((card) => !card.flipped).length === 0) {
      console.log('o jogo acabou')
    }
    return this._deck.filter((card) => !card.flipped).length === 0
  }
}
