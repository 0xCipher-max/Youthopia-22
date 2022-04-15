import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        {/* <div className="f-left">
          <div className="address left-content">
            Mussorie-Diversion Road, Village Makkawala, Dehradun,Uttarakhand
            -248009, india
          </div>
          <div className="phno left-content ">
            <img src="./images/call.svg" alt="" /> 1800121041000
          </div>
          <div className="mail left-content">
            <img src="./images/mail.svg" alt="" />
            admissions@dituniversity.edu.in
          </div>
          <div className="maps left-content">
            <img src="./images/maps.svg" alt="" /> Open in Google Maps
          </div>
        </div>
        <div className="f-right">
          <div className="about">
            <div className="about-text">About</div>
            <div className="aboout-content">
              <div className="content">About Us</div>
              <div className="content">Blog</div>
              <div className="content">Gallery</div>
            </div>
          </div>
          <div className="others">
            <div className="others-text">Others</div>
            <div className="others-content">
              <div className="content">Contact Us</div>
              <div className="content">Online Chat</div>
              <div className="content">Whatsapp</div>
              <div className="content">E-mail</div>
            </div>
          </div>
        </div> */}
        <div className="f-left">
          <ul className="left-list">
            <li>
              Mussorie-Diversion Road, Village Makkawala, Dehradun,Uttarakhand
              -248009, india
            </li>
            <li>1800121041000</li>
            <li>admissions@dituniversity.edu.in</li>
            <li> Open in Google Maps</li>
          </ul>
        </div>
        <div className="f-left">
          <div className="f-heading">About</div>
          <ul className="right-list">
            <li>About Us</li>
            <li>Blog</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="f-left">
          <div className="f-heading">Others</div>
          <ul className="right-list">
            <li>Contact Us</li>
            <li>Online Chat</li>
            <li>Whatsapp</li>
            <li>E-mail</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
