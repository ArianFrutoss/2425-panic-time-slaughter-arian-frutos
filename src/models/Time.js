const mongoose = require('mongoose');
const { Schema } = mongoose;

const timeSchema = new Schema({
    day_number: { type: 'Number' },
    day_week: { type: 'String' },
    km_traveled: { type: 'Number' },
    km_total: { type: 'Number' },
})

module.exports = mongoose.model('Time', timeSchema);