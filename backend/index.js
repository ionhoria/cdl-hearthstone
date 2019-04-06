const express = require('express')
const db = require('./db')
const axios = require('axios')

const stats = {}
const decks = {}
const app = express()
let cards
axios
  .get('https://api.hearthstonejson.com/v1/29933/enUS/cards.json')
  .then(function (response) {
    cards = response.data
    db.setCards(cards)
  })
  .catch(function (error) {
    console.log(error)
  })

app.use(express.json())
app.get('/cards', (req, res) => {
  res.json(db.getCards())
})

app.post('/deck', (req, res, next) => {
  const { name, class: _class } = req.body
  if (!name || !_class) {
    res.status('400').json({ error: 'undefined name or class' })
  } else {
    const deck = {}
    deck.name = name
    deck.class = _class
    decks[deck.name] = deck
    res.status('200').json(deck)
  }
})

app.use((req, res, next) => {
  stats[req.originalUrl] = stats[req.originalUrl]
    ? stats[req.originalUrl] + 1
    : 1
  console.log(stats)
  res.json({ desc: 'descriere' })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
