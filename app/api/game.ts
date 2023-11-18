import { Card, CardProps } from './card'
export default class MemoryGame extends Card {
  private _card1: CardProps | null = null
  private _card2: CardProps | null = null
  private _lockMode = false
  private _attempts = 0

  public setCardInMemory(id: string): boolean {
    const card: CardProps | undefined = this._deck.find((c) => c.id === id)

    if (!card || card.flipped || this._lockMode) {
      return false
    }

    if (!this._card1) {
      this._card1 = card
      this._card1.flipped = true
    } else {
      this._card2 = card
      this._card2.flipped = true
      this._lockMode = true
    }
    return true
  }

  public attemptCounter(): void {
    this._attempts++
  }

  public checkMatch(): boolean {
    this.attemptCounter()
    return this._card1?.icon === this._card2?.icon
  }

  public clearCards(): void {
    this._card1 = null
    this._card2 = null
    this._lockMode = false
  }

  public unflipCards(): void {
    if (this._card1 && this._card2) {
      this._card1.flipped = false
      this._card2.flipped = false
      this.clearCards()
    }
  }

  public checkGameOver(): boolean {
    return this._deck.filter((card) => !card.flipped).length === 0
  }
}
