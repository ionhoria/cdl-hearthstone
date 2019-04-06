const db = class {
  constructor () {
    this.decks = []
  }
  addDeck (deck) {
    console.log(deck)
    this.decks.push(deck)
  }
  getDecks () {
    return this.deck
  }
  setCards (cards) {
    this.cards = cards
  }
  getCards () {
    return [...this.cards]
  }
  getCardsByClass (className) {
    const classCards = []
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i].cardClass == className) {
        classCards.push(this.cards[i])
      }
    }
    return classCards
  }
}
module.exports = new db()
