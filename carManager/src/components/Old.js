//import react and axios
import axios from "axios";
import React from "react";

//create a class component which has state of an array to hold the vehicle
class Old extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  //when the component mounts it "gets" all vehicle which are older than 5 years and save to state
  componentDidMount() {
    axios
      .get("http://localhost:5000/old")
      .then((response) =>
        this.setState({
          cars: response.data,
        })
      )
      .catch((err) => console.log(err));
  }

  //this function returns rows in the table which contain the attributes of each car in state
  carsList() {
    return this.state.cars.map((car) => {
      return (
        <tr>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.registration}</td>
          <td>{car.owner}</td>
        </tr>
      );
    });
  }

  //render methos return a table with the cars 
  render() {
    return (
      <div>
        <h3>Cars Older Than 5 Years</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Registration</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>{this.carsList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Old;
