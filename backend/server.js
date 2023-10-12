const express = require("express")
const app = express()
const port = 8000
const connection = require ("./connection")
const incomeRoute = require("./routes/incomeRoutes")
const taxesRoute = require ("./routes/taxesRoutes")
const expensesRoute = require ("./routes/expensesRoutes")
const cors = require("cors")
const mongoose = require("mongoose")


app.use(express.json())
app.use(cors())
app.use("incomes", incomeRoute);
app.use("taxes", taxesRoute);
app.use("expenses", expensesRoute);



app.listen(port, () =>{
    console.log('Server started listening on port ${port}')

})