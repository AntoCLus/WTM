const Expenses= require("../models/expensesModel")
const express = require('express');
const app = express()

const createExpenses= async (req, res) =>{
    try{
        let newExpenses =req.body;
        let expenses = await Expenses.create(newExpenses)
        res.send({msg: "Expense created successfully", expenses})
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}


const getAllExpenses= async (req, res) =>{
    try{
        let expenses = await Expenses.find()
        res.status(200).send(expenses)
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}



const deleteExpenses = async (req, res) => {
    try { 
        const userConfirmation = req.body.confirmation; 
        if (userConfirmation === 'yes') {
            await Expenses.deleteOne({ _id: req.params.id });
            res.status(200).send({ msg: "Deleted successfully" });
        } else {
            res.status(400).send({ msg: "Deletion not confirmed by user" });
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal server error" });
    }
}




const updateExpenses= async (req, res) =>{
    try{
        let clientValue = req.value
        await Expenses.updateOne({_id: req.params.id}, clientValue);
        res.status(200).send({msg: "Deleted successfully"})
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}

app.post('/expenses/create', createExpenses);

app.get('/expenses', getAllExpenses);

app.delete('/expenses/:id', deleteExpenses);

app.put('/expenses/:id', updateExpenses);

/*app.post('/expenses/create', async (req, res) => {
    try {
        const newExpense = await Expense.create(req.body);
        res.json(newExpense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get('/expenses', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get('/expenses/:id', async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        res.json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.put('/expenses/:id', async (req, res) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.delete('/expenses/:id', async (req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
        res.json(deletedExpense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
*/

module.exports = {createExpenses, deleteExpenses, updateExpenses, getAllExpenses};