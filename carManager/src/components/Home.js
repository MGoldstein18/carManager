//import React, CSS and Link
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

//create a functional component called Home which displays heading and instructions for using this web app
function Home() {
  return (
    <div>
      <header className="text-center header">
        <h1>Welcome to the Car Management App</h1>
        <h4>
          <i>We keep track of all your vehicles</i>
        </h4>
      </header>
      <hr />
      <main>
        <section id="instructions">
          <h5 className="text-center">How does it work?</h5>
          <div className="options d-flex justify-content-between flex-wrap">
            <div className="option">
              You are currently on the{" "}
              <b>
                <Link to="/" className="link">
                  Home Page
                </Link>
              </b>{" "}
              and you can navigate back here at any time by clicking on the "Car
              Manager" in the nav bar at the top of the page.
            </div>
            <div className="option">
              {" "}
              You can{" "}
              <b>
                <Link className="link" to="/all">
                  view all cars
                </Link>
              </b>{" "}
              in your database by clicking on the "View All Cars" in the nav bar
              at the top of the page.
            </div>
            <div className="option">
              See all{" "}
              <b>
                <Link to="/old" className="link">
                  vehicles older than 5 years
                </Link>
              </b>{" "}
              by clicking in the "View Older Car" in the nav bar at the top of
              the page.
            </div>
            <div className="option">
              On the "View All Cars" page you can{" "}
              <b>
                <Link to="/all" className="link">
                  edit or delete a specific vehicle
                </Link>
              </b>{" "}
              by clicking on the buttons next to the vehicle you wish to
              edit/delete.
            </div>
            <div className="option">
              On the "View All Cars" page you can{" "}
              <b>
                <Link to="/all" className="link">
                  select and edit multiple vehicles
                </Link>
              </b>{" "}
              using the checkbox and you can edit one field of all those
              vehicles by clicking on the "Update All Selected Cars" button.
            </div>
            <div className="option">
              You can{" "}
              <b>
                <Link to="/add" className="link">
                  add a new car
                </Link>
              </b>{" "}
              to the database by clicking on the "Add Car" in the nav bar at the
              top of the page.
            </div>
          </div>
        </section>

        
      </main>

      <footer className="text-center">
            <h5>Car Manager &copy; 2020</h5>
        </footer>
    </div>
  );
}

export default Home;
