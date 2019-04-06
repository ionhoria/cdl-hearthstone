cards = [
  {
    attack: 0,
    cardClass: 'NEUTRAL',
    cost: 0,
    dbfId: 52424,
    faction: 'ALLIANCE',
    health: 0,
    id: 'ART_BOT_Bundle_001',
    name: 'Golden Legendary',
    rarity: 'LEGENDARY',
    set: 'TB',
    type: 'MINION'
  },
  {
    artist: 'Nutthapon Petchthai',
    cardClass: 'MAGE',
    collectible: true,
    cost: 5,
    dbfId: 2539,
    flavor:
      "It's on the rack next to ice lance, acid lance, and English muffin lance.",
    id: 'AT_001',
    name: 'Flame Lance',
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: 'COMMON',
    set: 'TGT',
    text: 'Deal $8 damage to a minion.',
    type: 'SPELL'
  },
  {
    artist: 'Tooth',
    cardClass: 'MAGE',
    collectible: true,
    cost: 3,
    dbfId: 2541,
    flavor: 'Burning man, brah.',
    id: 'AT_002',
    mechanics: ['SECRET'],
    name: 'Effigy',
    rarity: 'RARE',
    set: 'TGT',
    text:
      '<b>Secret:</b> When a friendly minion dies, summon a random minion with the same Cost.',
    type: 'SPELL'
  }
]
const db = class {
  getCards () {
    return [...cards]
  }
}
module.exports = new db()
