const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const {
    getAllServices,
    createService,
    updateService,
    deleteService,
    register,
    login,
  } = require("../controllers/controllers");

  router.get("/", getAllServices);
  router.post("/create",verifyToken, createService);
  router.put("/:id", updateService);
  router.delete("/:id", deleteService);
  router.post("/register",register)
  router.post("/login",login)

  module.exports = router; 