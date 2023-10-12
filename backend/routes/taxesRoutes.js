const express = require ("express");
const router = express.Router();
const {createTaxes, deleteTaxes, getAllTaxes, updateTaxes }= require("../controllers/taxController")



router.post("/tax/create", createTaxes)
router.get("/", getAllTaxes)
router.delete("/:id", deleteTaxes)
router.put("/:id", updateTaxes)

module.exports = router;