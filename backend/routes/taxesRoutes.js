const express = require ("express");
const router = express.Router();
const {createTax, deleteTax, getAllTax, updateTax }= require("../controllers/taxController")



router.post("/tax/create", createTax)
router.get("/", getAllTax)
router.delete("/:id", deleteTax)
router.put("/:id", updateTax)

module.exports = router;