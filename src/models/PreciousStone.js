const mongoose = require('mongoose');
const { Schema } = mongoose;

const preciousStoneSchema = new Schema({
    name: { type: 'String' },
    description: { type: 'String' },
    value: { type: 'Number' },
})

module.exports = mongoose.model('Preciousstone', preciousStoneSchema);