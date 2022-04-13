import React from 'react'

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
            <div className="search">
              <img src="./images/Search.svg" alt="" />
            </div>
            <div className="cart">
              <img src="./images/cart.svg" alt="" />
            </div>
            <div className="auth">
              <div className="login">Login</div>
              <div className="signup">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nabvar