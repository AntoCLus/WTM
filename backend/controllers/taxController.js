const Tax= require("../models/taxModel")


const createTax= async (req, res) =>{
    try{
        let newTax =req.body;
        let tax = await Tax.create(newTax)
        res.send({msg: "Expense created successfully", tax})
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}


const getAllTax= async (req, res) =>{
    try{
        let tax = await Tax.find()
        res.status(200).send(tax)
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}



const deleteTax = async (req, res) => {
    try { 
        const userConfirmation = req.body.confirmation; 
        if (userConfirmation === 'yes') {
            await Tax.deleteOne({ _id: req.params.id });
            res.status(200).send({ msg: "Deleted successfully" });
        } else {
            res.status(400).send({ msg: "Deletion not confirmed by user" });
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal server error" });
    }
}




const updateTax= async (req, res) =>{
    try{
        let clientValue = req.value
        await Tax.updateOne({_id: req.params.id}, clientValue);
        res.status(200).send({msg: "Deleted successfully"})
    } catch (error){
        res.status(500).send({msg:"internal server error"})
    }
}


module.exports = {createTax, deleteTax, updateTax, getAllTax};