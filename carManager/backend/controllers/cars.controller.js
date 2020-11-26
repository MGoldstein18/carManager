const { json } = require("express");
const Cars = require("../models/car.model.js");

//display all cars
const GetAll = (req, res) => {
  Cars.find()
    .then((car) => res.json(car))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

//display all cars older than 5 years
const ViewOld = (req, res) => {
  //get current year and subtract 5 to get older cars
  const years = new Date().getFullYear() - 5;
  //find all cars and filter to find the ones which are older than the "years"
  Cars.find({ model: { $lt: years } })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

//find and display one car - search by ID
const GetOne = (req, res) => {
  Cars.findById(req.params.id)
    .then((car) => res.json(car))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

//add a new car
const Add = (req, res) => {
  const make = req.body.make;
  const model = Number(req.body.model);
  const registration = req.body.registration;
  const owner = req.body.owner;

  const newCar = new Cars({
    make,
    model,
    registration,
    owner,
  });

  newCar
    .save()
    .then(() => res.json("Car Added!"))
    .catch((err) => json.status(400).json(`Error: ${err}`));
};

//delete a specific car
const Delete = (req, res) => {
  Cars.findByIdAndDelete(req.params.id)
    .then(() => res.json("Car Deleted"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

//update a specific car
const UpdateOne = (req, res) => {
  Cars.findById(req.params.id)
    .then((car) => {
      car.make = req.body.make;
      car.model = Number(req.body.model);
      car.registration = req.body.registration;
      car.owner = req.body.owner;

      car
        .save()
        .then(() => res.json("Car updated!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

//route to update many items at once
const UpdateMany = (req, res) => {
  const idArray = req.body.id;
  const field = req.body.field;
  const data = req.body.data;

  const update = { [field]: data };

  idArray.forEach((id) => {
    const filter = { _id: id };

    Cars.findOneAndUpdate(filter, update).then(() => res.json("Cars Updated!"));
  });
};

//export all functions
module.exports = {
  GetAll,
  ViewOld,
  GetOne,
  Add,
  Delete,
  UpdateOne,
  UpdateMany,
};
