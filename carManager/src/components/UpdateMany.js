//import react and axios
import React from "react";
import axios from "axios";

//create a class component call UpdateMany which has state to take the IDs, field and new data for the cars the user wants to update
class UpdateMany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idArray: this.props.location.data,
      field: "",
      data: "",
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  //method to ensure that state is always the ultimate source
  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /*when the form is submitted the newData object, consisting of the ID's of the vehicles which need to be updated, the field and new data, 
  are passed to the post request*/
  submit(e) {
    e.preventDefault();

    const newData = {
      id: this.state.idArray,
      field: this.state.field,
      data: this.state.data,
    };

    axios
      .post("http://localhost:5000/updatemany", newData)
      .then((response) => alert(response.data))
      .catch((err) => console.log(err));
  }

  //the render method return a form to take user input 
  render() {
    return (
      <div>
        <h3>Update All Selected Cars</h3>
        <hr />
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Which attribute of the cars would you like to update?</label>
            <select
              className="form-control"
              value={this.state.field}
              onChange={this.change}
              name="field"
            >
              <option value="make">Make</option>
              <option value="model">Model</option>
              <option value="registration">Registration</option>
              <option value="owner">Owner</option>
            </select>
          </div>
          <div className="form-group">
            <label>New Data</label>
            <input
              type="text"
              name="data"
              value={this.state.data}
              onChange={this.change}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateMany;
