import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import Gallery from "./galleryComponent";

function NavBar(props) {
  const [galleryOverlay, cGalleryOverlay] = useState(false);
  const [activeMenu, cActiveMenu] = useState(props.active || null);

  return (
    <div className="global">
      {galleryOverlay && (
        <Gallery open={galleryOverlay} changeOpened={cGalleryOverlay} />
      )}
      <div className="navBarContainer">
        <div className="navBar hf">
          <Row>
            <Link
              className="navStyle "
              style={{
                height: "10vw",
                textDecoration: "none",
                color: "antiqueWhite",
              }}
              to={activeMenu === "watertrade" ? "/" : "/watertrade"}
            >
              <Col className="navBarCol">
                <div className="navWatertrade">
                  {activeMenu === "watertrade" ? "HOME" : "WATERTRADE"}
                </div>
              </Col>
            </Link>
            <Link
              className="navStyle "
              style={{ textDecoration: "none", color: "antiqueWhite" }}
              to={activeMenu === "otoko" ? "/" : "/otoko"}
            >
              <Col className="navBarCol">
                <div className="navOtoko">
                  {activeMenu === "otoko" ? "HOME" : "OTOKO"}
                </div>
              </Col>
            </Link>
            <Col className="navBarCol">
              <a
                style={{ textDecoration: "none", color: "antiqueWhite" }}
                target="_blank"
                href="https://otokoaustin.com/contact"
              >
                <div className="navContact">CONTACT</div>
              </a>
            </Col>
            <Link
              className="navStyle "
              style={{ textDecoration: "none", color: "antiqueWhite" }}
              to="/swag"
            >
              <Col className="navBarCol">
                <div className="navOtoko">SWAG</div>
              </Col>
            </Link>
            <Col
              className="navBarCol"
              id="galleryNav"
              onClick={() => {
                cGalleryOverlay(true);
              }}
            >
              <div className="navGallery">GALLERY</div>
            </Col>
            <Col className="navBarLogo">
              <div className="navLogo" style={{ cursor: "not-allowed" }}>
                {`CART  `}
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    display: "inline-block",
                    height: "30px",
                  }}
                ></img>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
