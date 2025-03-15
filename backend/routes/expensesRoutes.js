const express = require ("express");
const router = express.Router();
const {createExpenses, deleteExpenses, getAllExpenses, updateExpenses }= require("../controllers/expensesController")
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())

router.post("/", createExpenses);
router.get("/", getAllExpenses);
router.delete("/:id", deleteExpenses);
router.put("/:id", updateExpenses);
/*
router.post("/api/expenses", createExpenses)
router.get("/api/expenses", getAllExpenses)
router.delete("/api/expenses/:id", deleteExpenses)
router.put("/api/expenses/:id", updateExpenses)
/*router.post("/expenses/create", createExpenses)


router.get("/", getAllExpenses)*/

/*app.post('/expenses/create', createExpenses);

app.get('/expenses', getAllExpenses);

app.delete('/expenses/:id', deleteExpenses);

app.put('/expenses/:id', updateExpenses);*/


module.exports = router;