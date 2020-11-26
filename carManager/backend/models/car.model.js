//import mongoose and the Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a new Schema
const carSchema = new Schema(
  {
    make: { type: String, required: true },
    model: { type: Number, required: true },
    registration: { type: String, required: true },
    owner: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//set the newly created schema to the Cars variable
const Cars = mongoose.model("cars", carSchema)


//export the Cars Schema
module.exports = Cars;