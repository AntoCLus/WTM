const Income= require("../models/incomeModel")


const createIncome= async (req, res) =>{
    try{
        let newIncome =req.body;
        let income = await Income.create(newIncome)
        res.send({msg: "Expense created successfully", income})
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}


const getAllIncome= async (req, res) =>{
    try{
        let income = await Income.find()
        res.status(200).send(income)
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}



const deleteIncome = async (req, res) => {
    try { 
        const userConfirmation = req.body.confirmation; 
        if (userConfirmation === 'yes') {
            await Income.deleteOne({ _id: req.params.id });
            res.status(200).send({ msg: "Deleted successfully" });
        } else {
            res.status(400).send({ msg: "Deletion not confirmed by user" });
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal server error" });
    }
}




const updateIncome= async (req, res) =>{
    try{
        let clientValue = req.value
        await Income.updateOne({_id: req.params.id}, clientValue);
        res.status(200).send({msg: "Deleted successfully"})
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}


module.exports = {createIncome, deleteIncome, updateIncome, getAllIncome};