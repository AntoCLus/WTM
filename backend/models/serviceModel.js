const mongoose = require("mongoose");




const serviceSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: String,
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);



module.exports = Service;