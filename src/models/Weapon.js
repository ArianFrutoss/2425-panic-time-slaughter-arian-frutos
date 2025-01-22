const mongoose = require('mongoose');
const { Schema } = mongoose;

const weaponSchema = new Schema({
    name: { type: 'String' },
    description: { type: 'String' },
    num_die_damage: { type: 'Number' },
    type: { type: 'String' },
    quality: { type: 'Number' },
})

module.exports = mongoose.model('Weapon', weaponSchema);