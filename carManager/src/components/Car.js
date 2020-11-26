//import react and a link component 
import React from "react";
import { Link } from "react-router-dom";

/*functional component called Car to create the table in which all cars are displayed. It takes props from the view component which
are the details of each car and also creates two buttons - one to edit that car which take the user to the edit page and passes the car id
as a prop into the URL and one to delete which calls the deleteCar function in the View component and passes the ID of the relevant car*/
function Car(props) {
  return (
    <tr>
      <td><input type="checkbox" name = {props.car._id} onChange= {(event) => props.select(props.car._id, event)}/></td>
      <td>{props.car.make}</td>
      <td>{props.car.model}</td>
      <td>{props.car.registration}</td>
      <td>{props.car.owner}</td>
      <td>
        <button className="btn">
          <Link to={`/edit/${props.car._id}`}>Edit</Link>
        </button>
        <button className="btn" onClick = {() => props.delete(props.car._id)}>
          <a href="#">Delete</a>
        </button>
      </td>
    </tr>
  );
}

export default Car;
