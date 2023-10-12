const express = require ("express");
const router = express.Router();
const {createIncome, deleteIncome, getAllIncome, updateIncome }= require("../controllers/incomeController")



router.post("/income/create", createIncome)
router.get("/", getAllIncome)
router.delete("/:id", deleteIncome)
router.put("/:id", updateIncome)

module.exports = router;