
import { card } from "./card"
import { Card } from "./card"

export class Game extends Card {
    private _card1: card | null = null
    private _card2: card | null = null
    private _lockMode: boolean = false
    private _attempts = 0

    set card1(card1: card | null) {
        this._card1 = card1
    }

    get card1() {
        return this._card1
    }

    set card2(card2: card | null) {
        this._card2 = card2
    }

    get card2() {
        return this._card2
    }

    set lockMode(lockMode: boolean) {
        this._lockMode = lockMode
    }

    get lockMode() {
        return this._lockMode
    }

    get attempts() {
        return this._attempts
    }

    set attempts(attempts: number) {
        this._attempts = attempts
    }

    public setCardInMemory(id: string) {
        // coloca as cartas clicadas na memoria
        let card: card = this.deck.filter(card => { return card.id === id })[0]

        if (card.flipped || this.lockMode) {
            return false
        }

        if (!this.card1) {
            this.card1 = card
            this.card1.flipped = true
            return true

        } else {
            this.card2 = card
            this.card2.flipped = true
            this.lockMode = true
            return true
        }
    }

    private attemptCounter() {
        this.attempts++
    }

    public checkMath() {
        //checa se são cartas iguais
        this.attemptCounter()
        return this.card1?.icon === this.card2?.icon
    }

    public clearCards() {
        //esvazia a memoria
        this.card1 = null
        this.card2 = null
        this.lockMode = false
    }

    public unflipCards() {
        // desvira as cartas
        if (this.card1 && this.card2) {
            this.card2.flipped = false
            this.card1.flipped = false
            this.clearCards()
        }
    }

    public checkGameOver() {
        // checa se o jogo acabou
        return this.deck.filter((cards) => { return !cards.flipped }).length === 0
    }
}