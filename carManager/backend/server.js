//import express, cors, mongoose and morgan
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

//configure env
require("dotenv").config();

//declare app and PORT variable for express and the port
const app = express();
const PORT = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Require Routes
const carRoutes = require('./routes/car.routes');

// Use custom routes
app.use('/', carRoutes);

//set uri variable equal to env variable for database connection string 
const uri = process.env.ATLAS_URI;

//connect to database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//declare variable for database connection and then check that it connected correctly
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to Database!");
});

//start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
