const db = class {
  setCards (cards) {
    this.cards = cards
    // console.log(this.cards)
  }
  getCards () {
    return [...this.cards]
  }
}
module.exports = new db()
