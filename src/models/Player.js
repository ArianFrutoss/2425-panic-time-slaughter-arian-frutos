const mongoose = require('mongoose');
const Saddlebag = require('./Saddlebag');
const Weapon = require('./Weapon');
const PreciousStone = require('./PreciousStone');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: { type: 'String' },
    occupation: { type: 'String' },
    description: { type: 'String' },
    stats: {
        strength: { type: 'Number' },
        dexterity: { type: 'Number' },
        stamina: { type: 'Number' },
    },
    equipment: {
        saddlebag: [{ type: Schema.Types.ObjectId, ref: Saddlebag }],
        quiver: { type: 'Number' },
        weapons: [{ type: Schema.Types.ObjectId, ref: Weapon }],
        pouch: {
            coins: { type: 'Number' },
            gold: { type: 'Number' },
            precious_stones: [{ type: Schema.Types.ObjectId, ref: PreciousStone }],
        },
        miscellaneous: [],
    },
})

module.exports = mongoose.model('Player', playerSchema);