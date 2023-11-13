
export interface card {
    id: string
    icon: string
    flipped: boolean
}

export class Card {
    private _deck: card[]
    private _cardsTechs

    constructor(cardsTechs: string[]) {
        this._cardsTechs = cardsTechs
        this._deck = new Array
    }

    set deck(deck: card[]) {
        this._deck = deck
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


    private createPairsOfCards(tech: string): card[] {
        // cria pares de cartas com base em tecnologias
        return [{
            id: `${tech}01`,
            icon: tech,
            flipped: false,
        },
        {
            id: `${tech}02`,
            icon: tech,
            flipped: false,
        }]
    }

    private shuffleCards(card: card[]) {
        // embaralha as cartas
        for (let i = card.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [card[i], card[j]] = [card[j], card[i]];
        }
        return card;
    }

    public createDeckOfCards() {
        //cria as cartas do tabuleiro
        let deck: card[] = this.deck
        let cardsTechs = this.cardsTechs
        cardsTechs.forEach((tech) => {
            deck.push(...this.createPairsOfCards(tech))
        })
        deck = this.shuffleCards(this.deck)
        this.deck = deck
        console.log('Baralho criado com sucesso')
        return this.deck
    }
}