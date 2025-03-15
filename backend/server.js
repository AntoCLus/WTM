const express = require("express")
const app = express()
const connection = require ("./connection")
const incomeRoute = require("./routes/incomeRoutes")
const taxesRoute = require ("./routes/taxesRoutes")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT= 8000
const routes = require("./routes/routers")
const bcrypt = require ("bcrypt")
const jwt = require ("jsonwebtoken")
const verifyToken = require('./middleware/auth')
const User = require('./models/userModel')
const expensesRoutes = require("./routes/expensesRoutes");
require('dotenv').config();
/*const { default: axios } = require("axios")*/

app.use(express.json())
app.use(cors())
app.use("/incomes", incomeRoute);
app.use("/taxes", taxesRoute);
app.use("/api/expenses", expensesRoutes);
app.use("/routes", routes)


app.post("/register", async (req, res) =>{
    try{
        let {name, lastName, email, password} = req.body
        if( !email || !password){
            return res.send ({ msg: "email and password are required" })
        }
        let found = await User.findOne({ email })
        if (found){
            return res.send({
                msg: "email exists, please login or register with a new email"
            })
        }
        let hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUND))
        await User.create ({ name, lastName, email, password: hashPassword})
        return res.status(200).send ({ msg: "registered successfully"})
    }catch (err){
        console.log(err)
        res.status(500).send({ msg: "Internal server error, please try again later" })
    }
})
app.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        if (email.length < 1 || password.length < 1) {
            return res.send({ msg: "email and password are required" });
        } else {
            let user = await User.findOne({ email });
            if (!user) {
                return res.send({ msg: "User not found" });
            }

            let validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                let token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
                return res.status(200).send({ token });
            } else {
                return res.send({ msg: "Invalid password" });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({
            msg: "cannot login. Internal server error"
        });
    }
});
    app.get("/testToken", verifyToken, async (req, res) =>{
        res.send("protected route")
    })



app.listen(PORT, () =>{
    console.log(`Server started listening on port ${8000}`)

})