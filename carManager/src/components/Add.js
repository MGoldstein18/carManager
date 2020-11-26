//import react and axios
import React from "react";
import axios from "axios";

//create a class component called Add which is used to add new cars to database 
class Add extends React.Component {
  //constructor to hold input from the user
  constructor(props) {
    super(props);
    this.state = {
      make: "",
      model: "",
      registration: "",
      owner: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  /*on change function to ensure that state is always the ultimate source. It sets the state with the "name" attribute of each input on the form
  equal to the value of that input*/
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /*the submit function take the input from state, creates a new car object with the values from state and then passes that object to the 
  axios get request to create a new car in the database*/
  submit(e) {
    e.preventDefault();

    const car = {
      make: this.state.make,
      model: this.state.model,
      registration: this.state.registration,
      owner: this.state.owner,
    };

    axios
      .post("http://localhost:5000/add", car)
      .then((res) => alert(res.data))
      .catch((err) => alert(`Error: ${err}`));
  }

  //render function renders a form to take input from the user
  render() {
    return (
      <div>
        <h3>Log a New Car</h3>
        <hr />
        <form onSubmit={(e) => this.submit(e)}>
          <div className="form-group">
            <legend>Make:</legend>
            <input
              className="form-control"
              type="text"
              value={this.state.make}
              name="make"
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <legend>Model:</legend>
            <input
              className="form-control"
              type="text"
              value={this.state.model}
              name="model"
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <legend>Registration:</legend>
            <input
              className="form-control"
              type="text"
              value={this.state.registration}
              name="registration"
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <legend>Owner:</legend>
            <input
              className="form-control"
              type="text"
              value={this.state.owner}
              name="owner"
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-lg btn-info">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
