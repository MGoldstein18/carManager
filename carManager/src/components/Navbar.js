//import React and Link component
import React from "react";
import { Link } from "react-router-dom";


//create class component called Navbar which is a navbar made using bootstrap and react router
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Car Manager
        </Link>
        <div className="nav-ul collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/all" className="nav-link">
                View All Cars
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Car
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/old" className="nav-link">
                View Older Cars
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
