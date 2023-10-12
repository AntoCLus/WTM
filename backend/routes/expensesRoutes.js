const express = require ("express");
const router = express.Router();
const {createExpenses, deleteExpenses, getAllExpenses, updateExpenses }= require("../controllers/expensesController")



router.post("/expenses/create", createExpenses)
router.get("/", getAllExpenses)
router.delete("/:id", deleteExpenses)
router.put("/:id", updateExpenses)

module.exports = router;