const Expenses= require("../models/expensesModel")


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


module.exports = {createExpenses, deleteExpenses, updateExpenses, getAllExpenses};