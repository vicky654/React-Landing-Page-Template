import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12  intro-text">
                <h5>
                  {props.data ? props.data.title : "Loading"}
                  
                </h5>
                {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                <a
                  href="/register"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                  <i className="fa fa-arrow-down ml-2"></i>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
