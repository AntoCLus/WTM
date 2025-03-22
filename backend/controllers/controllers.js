const Services = require("../models/serviceModel");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth");
require("dotenv").config();

const getAllServices = async (req, res) => {
  try {
    let services = await Services.find({})
    console.log(services)
    res.status(200).send(services);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "server error from getAll controllers" });
  }
};

const createService = async (req, res) => {
  try {
    //console.log(req.user)
    //let creator = req.user.id;
    console.log(req);
    let { title, description, price } = req.body;
    let newService = {
      title,
      description,
      price,
    };
    console.log(newService);
    let service = await Services.create(newService);
    res.send(service);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "server error from create controllers" });
  }
};

const updateService = async (req, res) => {
  try {
    let clientValue = req.body;
    await Service.updateOne({ _id: req.params.id }, clientValue);
    res.status(200).send({ msg: "update is work" });
  } catch {
    console.log(error);
    res.status(500).send({ msg: "server error from update controllers" });
  }
};

const deleteService = async (req, res) => {
  try {
    await Service.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete is work" });
  } catch {
    console.log(error);
    res.status(500).send({ msg: "server error from delete controllers" });
  }
};

const register = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.send({ msg: "Both email and password are required" });
    }
    let found = await User.findOne({ email });
    if (found) {
      return res.send({ msg: "Email already exists" });
    }
    let hashPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashPassword });
    return res.send({ msg: "Registered successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ msg: "Both email and password are required" });
    }
    let oldUser = await User.findOne({ email });
    console.log(oldUser)
    if (oldUser) {
      let validPassword = await bcrypt.compare(password, oldUser.password);
      console.log (validPassword)
      if (!validPassword) {
        return res.status(401).send({ msg: "Invalid password" });
      } else {
        // return res.send({msg:"login successful"})
        let token = jwt.sign(
          {
            email: oldUser.email,
            id: oldUser._id,
            userType: oldUser.userType
          },
          process.env.TOKEN_KEY,
          // { expiresIn: "2h" }
        );
        res.status(200).send({ msg: "Login successful", token });
      }
    } else {
      return res
        .status(404)
        .send({ msg: "Invalid email, please register first" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
  }
};

module.exports = {
  getAllServices,
  createService,
  updateService,
  deleteService,
  register,
  login,
};