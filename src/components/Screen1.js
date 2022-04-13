import React from 'react'
import Nabvar from './Nabvar'

function Screen1() {
  return (
    <>
      <div className="main-screen">
        <Nabvar />
        <div className="container">
          <div className="main-text">
            <div className="youthopia">Youthopia</div>
            <div className="date">April 22nd & 23rd</div>
          </div>
          <div className="register-now">
            <div className="text">
              <a href="https://google.com" className='white'> Register Now</a>
            </div>
            <div className="arrow">
              <img src="./images/ArrowDownCircle.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen1