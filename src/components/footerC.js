import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Insta from "../img/iLogo.png";
import FB from "../img/fbLogo.png";
import Phone from "../img/pLogo.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerAddy">
        <a
          style={{
            textDecoration: "none",
            color: "antiqueWhite",
            fontSize: "1vw",
          }}
          href="https://www.google.com/maps/place/Otoko/@30.2476863,-97.7521839,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b4fc88f8ef91:0xbf63f4feb5933e57!8m2!3d30.2476863!4d-97.7499952"
        >
          1603 S Congress Ave Austin,
          <br />
          TX 78704 SoCo, 78704
        </a>
      </div>
      <div className="footerSocial">
        Keep up with the happenings
        <br />
        <input
          style={{ marginTop: "1vh" }}
          type="email"
          className="footerInput"
          placeholder="Enter Email"
          required=""
        />
        <br />
        <a target="_blank" href="https://www.instagram.com/otokoaustin/?hl=en">
          <img className="footerLogos" src={Insta}></img>
        </a>
        <a target="_blank" href="https://www.facebook.com/otokoaustin/">
          <img className="footerLogos" src={FB}></img>
        </a>
        <a target="_blank" href="https://otokoaustin.com/contact">
          <img className="footerLogos" src={Phone}></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
