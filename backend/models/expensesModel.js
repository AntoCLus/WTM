const mongoose = require('mongoose');
const express = require('express')
const app = express();
app.use(express.json());

const expenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
 
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;