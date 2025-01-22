const mongoose = require('mongoose');
const { Schema } = mongoose;

const saddlebagSchema = new Schema({
    name: { type: 'String' },
    description: { type: 'String' },
    value: { type: 'Number' },
})

module.exports = mongoose.model('Saddlebag', saddlebagSchema);