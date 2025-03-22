const express = require("express")
const app = express()
const connection = require ("./connection")
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
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, msg: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ success: false, msg: "Invalid password" });
        }

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({
            success: true,
            msg: "Login successful",
            token
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ success: false, msg: "Internal server error" });
    }
});


app.listen(PORT, () =>{
    console.log(`Server started listening on port ${8000}`)

})