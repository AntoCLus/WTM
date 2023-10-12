const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
 
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;