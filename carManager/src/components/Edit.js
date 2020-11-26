//import React and axios
import React from "react";
import axios from "axios";

//create class component called Edit with state which will track the attributes of a car
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
      model: "",
      registration: "",
      owner: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  //When component mounts get the attributes of the vehicle which has the ID that was passed down in the URL
  //Then set the state to the attributes of that vehicle
  componentDidMount() {
    axios
      .get(`http://localhost:5000/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          make: response.data.make,
          model: response.data.model,
          registration: response.data.registration,
          owner: response.data.owner,
        });
      })
      .catch((err) => console.log(err));
  }

  /*on change function to ensure that state is always the ultimate source. It sets the state with the "name" attribute of each input on the form
  equal to the value of that input*/
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /*When an edit is submitted create and post a new car object with the updated attributes to the vehicle 
  in the data which has the ID passed down in the url*/
  submit(e) {
    e.preventDefault();

    const newCar = {
      make: this.state.make,
      model: this.state.model,
      registration: this.state.registration,
      owner: this.state.owner,
    };

    axios
      .post(`http://localhost:5000/edit/${this.props.match.params.id}`, newCar)
      .then((res) => alert(res.data))
      .catch((err) => alert(err));

    window.location = "/all";
  }

  //the render method returns a form to take the user's input
  render() {
    return (
      <div>
        <h3>Edit a Car</h3>
        <hr />
        <form onSubmit={this.submit}>
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
            Submit Edit
          </button>
        </form>
      </div>
    );
  }
}

export default Edit;
