//import react, axios, the Car component and Link
import React from "react";
import axios from "axios";
import Car from "./Car.js";
import { Link } from "react-router-dom";

//create class component View which has state of all the cars  to be displayed and the cars which have been selected for mass update
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      selected: [],
    };
    this.deleteCar = this.deleteCar.bind(this);
    this.select = this.select.bind(this);
  }

  //when the component "get" all the cars from the database and save to state
  componentDidMount() {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        this.setState({
          cars: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  //This function return a Car component which the relevant attributes for each car in state 
  carsList() {
    return this.state.cars.map((car) => {
      return (
        <Car
          car={car}
          key={car._id}
          delete={this.deleteCar}
          select={this.select}
        />
      );
    });
  }

  /*when the delete button of a car is clicked this method is called. It calls a delete request and removes 
  the deleted car from the car array in state*/
  deleteCar(id) {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((response) => alert(response.data))
      .catch((err) => console.log(err));

    this.setState({
      cars: this.state.cars.filter((car) => car._id !== id),
    });
  }


  /*an async function to keep track of selected cars and save them to state. This function is called when a checkbox is checked or unchecked. 
  It creates a newArray and puts state's selected array into it. Then it checks if the checkbox is now checked or unchecked.
  If it is now checked the id of that vehicles is added to the new array. If it is now unchecked that ID is removed from the new Array.
  The Selected array in state is then to set to equal the new array*/
  async select(id, e) {
    let newArray = [...this.state.selected];
    (await e.target.checked)
      ? newArray.push(id)
      : (newArray = newArray.filter((item) => item !== id));
    this.setState({
      selected: newArray,
    });
  }

  //the render method returns a table with all the cars, their attributes and the button which can be used to update multiple vehicles
  render() {
    return (
      <div>
        <h3>All Cars</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Select</th>
              <th>Make</th>
              <th>Model</th>
              <th>Registration</th>
              <th>Owner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.carsList()}</tbody>
          <tfoot>
            <tr>
              <th>
                <button className="btn">
                  <Link
                    to={{
                      pathname: "/updatemany",
                      data: [...this.state.selected],
                    }}
                  >
                    Update All Selected Cars
                  </Link>
                </button>
              </th>
              <th>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default View;
