import React from "react";
import DIT_logo from "./Images/DITU_logo.png";

function Nabvar() {
  return (
    <>
      <div className="container-nav">
        <div className="navbar">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="left">
            <div className="nav-items">
              <ul>
                <a href="https://www.google.com">
                  <li className="item">Home</li>
                </a>
                <a href="https://www.facebook.com">
                  <li className="item">Events</li>
                </a>
                <a href="https://www.google.com">
                  <li className="item">Gallery</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="right">
            <img src={DIT_logo} alt="DIT" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nabvar;
