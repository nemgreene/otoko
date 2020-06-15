import React, { useState, useEffect } from "react";
import brand from "../otoko.png";
import { Col, Row } from "react-bootstrap";
import NavBar from "./navBarC";
import { Link } from "react-router-dom";
import Gallery from "./galleryComponent";

function App() {
  const [galleryOverlay, cGalleryOverlay] = useState(false);
  const [dynamicSize, cDynamicSize] = useState("53.1vh");

  const dynamicHeight = (widthCap, over, under) => {
    console.log(window.innerWidth, window.innerHeight);
    if (window.innerWidth < 1500 && dynamicSize !== "50vh") {
      cDynamicSize(() => "50vh");
    }
    if (window.innerWidth > 1500 && dynamicSize !== "100vh") {
      cDynamicSize("100vh");
    }
  };
  useEffect(() => {
    dynamicHeight();
  }, []);
  window.addEventListener("resize", dynamicHeight);

  return (
    <div className="App">
      {galleryOverlay && (
        <Gallery open={galleryOverlay} changeOpened={cGalleryOverlay} />
      )}
      <a id="top"></a>
      <div className="container">
        <NavBar />
        <div
          className="welcome1"
          style={{
            height: `${dynamicSize}`,
          }}
        >
          <div className="welcomeImage"></div>
        </div>
        <div
          className="welcome2"
          style={{
            height: `${dynamicSize}`,
          }}
        >
          <div className="welcomeFooter"></div>
          <div className="welcomeBrand">
            <img
              src={brand}
              className="brandText"
              style={{
                height: "20vw",
                marginTop: window.innerWidth < 1500 ? "-29vw" : "-30vw",
              }}
              alt="OTOKO"
            ></img>
          </div>
          <Row
            style={{
              height: `${dynamicSize}`,
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "antiqueWhite" }}
              to="/watertrade"
            >
              <Col className="welcome2Col1">
                <div className="welcome2Cols">
                  <div className="welcome2ColsText hf"> WATERTRADE</div>
                </div>
              </Col>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "antiqueWhite" }}
              to="/otoko"
            >
              <Col className="welcome2Col2">
                <div className="welcome2Cols">
                  <div className="welcome2ColsText hf">OTOKO</div>
                </div>
              </Col>
            </Link>
            <a
              style={{ textDecoration: "none", color: "antiqueWhite" }}
              target="_blank"
              href="https://otokoaustin.com/contact"
            >
              <Col className="welcome2Col3">
                <div className="welcome2Cols">
                  <div className="welcome2ColsText hf">CONTACT</div>
                </div>
              </Col>
            </a>
            <Link
              style={{ textDecoration: "none", color: "antiqueWhite" }}
              to="/swag"
            >
              <Col className="welcome2Col4">
                <div className="welcome2Cols">
                  <div className="welcome2ColsText hf">SWAG</div>
                </div>
              </Col>
            </Link>
            <Col className="welcome2Col5" onClick={() => cGalleryOverlay(true)}>
              <div className="welcome2Cols">
                <div className="welcome2ColsText hf">GALLERY</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
