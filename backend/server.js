const express = require("express")
const app = express()
const connection = require ("./connection")
const incomeRoute = require("./routes/incomeRoutes")
const taxesRoute = require ("./routes/taxesRoutes")
const expensesRoute = require ("./routes/ExpensesRoutes")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT= 8080



app.use(express.json())
app.use(cors())
app.use("incomes", incomeRoute);
app.use("taxes", taxesRoute);
app.use("expenses", expensesRoute);




app.listen(PORT, () =>{
    console.log('Server started listening on port ${8080}')

})