const axios = require('axios')
const db = class {
  constructor () {
    this.decks = []
    axios
      .get('https://api.hearthstonejson.com/v1/29933/enUS/cards.json')
      .then(response => {
        this.cards = [...response.data]
        this.heroes = this.cards.filter(
          card => card.type == 'HERO' && card.set == 'CORE'
        )
      })
      .catch(error => console.log(error))
  }
  addDeck (deck) {
    this.decks.push(deck)
  }
  getDecks () {
    return this.deck
  }
  getHeroes () {
    return this.heroes
  }

  getCards () {
    return this.cards
  }
  getCardsByClass (className) {
    return this.cards.filter(card => card.cardClass == className)
  }
}
module.exports = new db()
