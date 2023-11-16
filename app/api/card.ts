export interface CardProps {
  id: string
  icon: string
  flipped: boolean
}
export class Card {
  private _deck: CardProps[]
  private _cardsTechs

  constructor(cardsTechs: string[]) {
    this._cardsTechs = cardsTechs
    this._deck = []
    this.createDeckOfCards()
  }

  set deck(cards: CardProps[]) {
    this._deck = cards
  }

  get deck() {
    return this._deck
  }

  set cardsTechs(cardsTechs: string[]) {
    this._cardsTechs = cardsTechs
  }

  get cardsTechs() {
    return this._cardsTechs
  }

  private createPairsOfCards(tech: string): CardProps[] {
    // cria pares de cartas com base em tecnologias
    return [
      {
        id: `${tech}01`,
        icon: tech,
        flipped: false,
      },
      {
        id: `${tech}02`,
        icon: tech,
        flipped: false,
      },
    ]
  }

  private shuffleDeck(deck: CardProps[]): CardProps[] {
    // embaralha as cartas
    return deck.sort(() => Math.random() - 0.5)
  }

  protected createDeckOfCards() {
    // cria as cartas do tabuleiro
    let deck: CardProps[] = this.deck
    const cardsTechs = this.cardsTechs
    cardsTechs.forEach((tech) => {
      deck.push(...this.createPairsOfCards(tech))
    })
    deck = this.shuffleDeck(deck)
    this.deck = deck
    console.log('Baralho criado com sucesso')
    return this.deck
  }
}
