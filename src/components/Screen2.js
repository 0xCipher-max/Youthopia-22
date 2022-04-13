import React from "react";
import event1 from "./Images/Cultural.png";
import event2 from "./Images/Debate.png";
import event3 from "./Images/Gaming.png";
import event4 from "./Images/Technical.png";
import event5 from "./Images/Cultural.png";
import event6 from "./Images/Cultural.png";

function Screen2() {
  return (
    <>
      <div className="fullvh">
        <div className="events-title">Top Events Happening</div>
        <div className="event-grid">
          <div className="event">
            <img src={event1} alt="" />
          </div>
          <div className="event">
            <img src={event2} alt="" />
          </div>
          <div className="event">
            <img src={event3} alt="" />
          </div>
          <div className="event">
            <img src={event4} alt="" />
          </div>
          <div className="event">
            <img src={event5} alt="" />
          </div>
          <div className="event">
            <img src={event6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen2;
