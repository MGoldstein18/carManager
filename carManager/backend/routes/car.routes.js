//import express, router and functions from controller
const express = require("express");
const router = express.Router();
const { Add, GetAll, GetOne, Delete, UpdateMany, UpdateOne, ViewOld } = require("../controllers/cars.controller.js");

// Get routes
router.get("/", GetAll);
router.get("/old", ViewOld);
router.get("/:id", GetOne);

// Post routes
router.post("/add", Add);
router.post("/updatemany", UpdateMany);
router.post("/edit/:id", UpdateOne);

// Delete route
router.delete("/delete/:id", Delete);


//export all routes
module.exports = router;