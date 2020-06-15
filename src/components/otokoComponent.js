import React, { useEffect, useState } from "react";
import NavBar from "./navBarC";
import Scrollbar from "../scrollbar.png";
import Img from "../demoImg1.png";
import logo from "../logo.png";
import { Col, Row } from "react-bootstrap";
import Footer from "./footerC";

function Otoko() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <NavBar active={"otoko"} />
      <div className="water1">
        <div className="waterBrandOverlay otokoBrandOverlay">MISSION+MEANS</div>
        <div className="waterImg1">
          <div
            className="otokoOverlayImg"
            style={{
              marginTop: "auto",
              width: "35vw",
              height: "35vw",
            }}
          ></div>
        </div>
        <div className="otoko1UndelayImg"></div>
      </div>
      <div className="otoko2">
        <div className="otoko2img" />
        <div className="otokoTextBox1C">
          <div className="otokoTextBox1">
            <div className="otb1Header hf">About Otoko</div>
            <br />
            <div className="otb1Text">
              <div className="otb1 bf">
                Classical Japanese omakase borught to a new life with local
                Texas ingredients. <br /> 21 Courses carefully hand crafted by
                Chef Yoshi Okai showcasing more then 10 years of dedication to
                his craft, using freshest fish flown direct from Japanese
                waters. Join him and his team, take a seat across the counter
                and enjoy the dining room that marries{" "}
                <i>2001: A Space Odyssey</i> with the whimsical Japanese Punk
                Rocker personality of the mind behind the concept{" "}
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div className="otoko3">
        <div className="otoko3Container">
          <div className="o3imgC"></div>
          <div className="otokoTextBox3">
            <div className="otb3Header hf">
              `` お任せ: OMAKASE: "I'll leave it up to you"
            </div>
            <br />
            <div className="otb3Text">
              <div className="otb3 bf">
                Enjoy a daily menu carefully selected by our team curated to
                guide you through twin journeys, exploring jointly the nuance
                and elegance of traditional Japanese cuisine, alongside the
                vibrant, colorful exploration of the massive palette of produce
                locally available in Texas. Sit back and relax, as the best we
                can offer and enjoy the company of the patrons at our intimate
                sushi bar, as well as the team supporting Chef Yoshi. <br />
                <br />
                Follow along with the program provided if you like, or just
                enjoy the flavours and chat with the chefs about their favorite
                sake, whiskey or music.
                <br />
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    float: "right",
                    marginTop: "1vh",
                    marginRight: "5vh",
                    height: "4vh",
                  }}
                />
              </div>
            </div>
            <div className="o3img">
              <div className="o3imgPadding">
                <div className="bioImg1"></div>
                <div className="imgPairContainer">
                  <div className="bioImg2"></div>
                  <div className="bioImg3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="otoko4">
        <div className="otokoTextBox4">
          <div className="otb4Header hf"> Yoshi Okai</div>
          <div className="otb4Text bf">
            Born and raised in Kyoto, Chef Yoshi chose to leave Japan to pursue
            a career as a punk rocker. An adept chef from his time learning
            cooking with his familty, he spent his time in restaurants to
            support his burgeoning music career. After finding success and
            increased responsibility, finally taking over as Head of RnD for the
            New Waterloo Hospitality Group he found his niche to live the life
            of a rockstar while recieving the professional autonomy to partner
            with NW to open Otoko.
          </div>
        </div>
      </div>
      <div className="otoko5">
        <div className="otokoContainer5">
          <div className="otoko5HeaderContainer">
            <div className="otokoDrinks5Header ">
              <div
                className="hf"
                style={{
                  paddingTop: ".5vh",
                  fontSize: "1vw",
                  textAlign: "center",
                }}
              >
                Our team humbly presents a carefully selected choice of pairings
                to accompany your meal.
              </div>
            </div>
          </div>
          <div className="otokoDrinks">
            <Row className="otoko5Row">
              <Col className="otoko2Col1">
                <div className="otoko2Cols">
                  <div className="otoko2ColsText"> WINE</div>
                </div>
              </Col>
              <Col className="otoko2Col2">
                <div className="otoko2Cols">
                  <div className="otoko2ColsText">SAKE</div>
                </div>
              </Col>
              <Col className="otoko2Col3">
                <div className="otoko2Cols">
                  <div className="otoko2ColsText">TEA</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="buttonOverlay">
          <a
            className="bookNow"
            target="_blank"
            href="https://otokoaustin.com/tickets"
          ></a>
          <a className="backToTop" href="#top"></a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Otoko;

{
  /*       <div className="scrollBarContainer">
        <div className="scrollBar">
        <img
        src={Scrollbar}
        style={{ marginTop: "5vh", height: "90vh" }}
        ></img>
        </div>
      </div> */
}
