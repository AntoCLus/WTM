const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
 
});

const Tax = mongoose.model('Tax', taxSchema);

module.exports = Tax;