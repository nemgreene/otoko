import React, { useEffect, useState } from "react";
import NavBar from "./navBarC";
import Scrollbar from "../scrollbar.png";
import Img from "../demoImg1.png";
import logo from "../logo.png";
import { Col, Row } from "react-bootstrap";
import Footer from "./footerC";

function Watertrade() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="watertradeContainer">
      <NavBar active={"watertrade"} />
      <a id="top"></a>
      <div className="water1">
        <div className="waterBrandOverlay bf">CRAFT+CREW</div>
        <div className="waterImg1">
          <div
            className="waterOverlayImg"
            style={{
              marginTop: "auto",
              width: "35vw",
              height: "35vw",
            }}
          ></div>
        </div>
        <div className="water1UndelayImg"></div>
      </div>
      <div className="buttonOverlay">
        <a
          className="bookNow"
          target="_blank"
          href="https://otokoaustin.com/tickets"
        ></a>
        <a className="backToTop" href="#top"></a>
      </div>
      <div className="water2">
        <div className="water2Container">
          <div className="waterImgGrid1">
            <Row>
              <Col className="water2Col1 c1"></Col>
              <Col className="water2Col1 c2"></Col>
              <Col className="water2Col1 c3"></Col>
              <Col className="water2Col1 c4"></Col>
            </Row>
          </div>
          <div className="water2TextBox">
            <div className="water2Text">
              <div className="water2TextHeader hf"> Speakeasy</div>
              <div className="water2TextBody">
                Stop by and chat with the team in this little cubby secreted
                away from Austin. Enjoy our collection of records as a backdrop
                to this little escape from space and time. The bar marries a WW2
                Japanese Hibiki bar with the plush elegance and comfort of
                Londons hotel lobby bars.
              </div>
            </div>
          </div>
          <div className="waterImgGrid2">
            <Row>
              <Col className="water2Col2 c5"></Col>
              <Col className="water2Col2 c6"></Col>
              <Col className="water2Col2 c7"></Col>
              <Col className="water2Col2 c8"></Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="water3">
        <div className="water3RightContainer">
          <div className="whitneyContainer">
            <div className="whitneyHeaderContainer">
              <div className="whitneyHeader hf">
                <img
                  className="waterLogo"
                  src={logo}
                  alt="logo"
                  style={{ marginLeft: "-2.5vw" }}
                />
                Whitney Hazelmeyer
              </div>
            </div>
            <div className="whitneyText bf">
              <br />
              <br />
              Stop by for a chat and as the night goes on you'll find just how
              fantastic a conversation Whitney is. With a bachelors in
              mycenology to bolster her 10 plus years of experience as a
              dedicated mixologist, dont tell Ricky, but Whitney is the brains
              that runs the outfit. She keeps the team grounded.
              <br />
              <br />
              Long time holder of numerous laureats lauding her talent behind
              the bar, she pulls from a staggering breadth of experiences
              travelling the world which percolate down through her brain and
              into each and every glass. Her, and jointly Rickys, love for
              creativity and general aversion to endlessly pouring the same
              dozen cocktails every night lead the way to a cocktail service
              unique in the industry today. Mirroring its sister restaurant next
              door, these two spear-head an Omakase cocktail bar. Trust them.
            </div>
          </div>
        </div>
        <div className="water3LeftContainer">
          <div className="rickyContainer">
            <div className="rickyHeaderContainer">
              <div className="rickyHeader hf">
                {" "}
                Ricky Cobia
                <img className="waterLogo" src={logo} alt="logo" />
              </div>
            </div>
            <div className="rickyText bf">
              <br />
              <br />
              Ricky forms one half of the dynamic duo that contributes the
              talent to the Watertrade name. Citing the London Bathtub Gin
              movement and Johnny Chash as his two greates inspirations, Ricky
              brings a dashing charm and easy back and forth to the bar. He
              allows reign his prodigious musical talent in his ecclectic
              choices from his personal vinly collection of over 300 carefully
              selected records lending his own personal touch to permeate every
              experience in the space. <br />
              <br />
              Ricky brings a devilish, boy-next-door charm and makes for easy
              company overlaying a razor keen wit with a profound understanding
              of craft mixology. <br />
              <br />
              Ask him about Mezcal, Maguey and Oaxaca and watch his eyes light
              up
            </div>
          </div>
        </div>
        <div className="profileContainer">
          <div className="rickyProfile"></div>
          <div className="whitneyProfile"></div>
        </div>
      </div>
      <div className="water4">
        <div className="water4container">
          <div className="water4header hf">Suntory and Doughnuts</div>
          <div className="water4Text bf">
            Join us for an idependent opening of the bar to celebrate one of the
            most extensive japanese whisky lists in the country. Weekly pop-up
            with live musicians as well as a highlights Whisky Flight of the
            Week. Explore the world of Japanese whisky hands on, just like
            sitting in a Hibiki bar in Tokyo.
          </div>
          <div className="water4Selections bf">This weeks selections:</div>
          <div className="water4WhiskeyContainer">
            <div className="whisky1">
              <div className="whiskyContainer">
                <div className="whiskyImg w1">img</div>
                <div className="whiskyHeader hf">Nikka Coffey Malt</div>
                <div className="whiskyTags">
                  <div className="tag" style={{ backgroundColor: "#3f2a22" }}>
                    Caramel
                  </div>
                  <div className="tag" style={{ backgroundColor: "#b9b3aa" }}>
                    Coconut
                  </div>
                  <div className="tag" style={{ backgroundColor: "#533931" }}>
                    Hazelnut
                  </div>
                </div>
                <div className="whiskyDescription">
                  Named after Aeneas Coffey, the Irishman who patented a
                  super-efficient column still in 1830. Coffey Malt is made from
                  100-percent malted barley that is distilled in a Coffey
                  column.
                </div>
              </div>
            </div>
            <div className="whisky2">
              <div className="whiskyContainer">
                <div className="whiskyImg w2">img</div>
                <div className="whiskyHeader hf">Ohishi Single Sherry Cask</div>
                <div className="whiskyTags">
                  <div className="tag" style={{ backgroundColor: "#b18d5d" }}>
                    Honey
                  </div>
                  <div className="tag" style={{ backgroundColor: "#41434b" }}>
                    Structure
                  </div>
                  <div className="tag" style={{ backgroundColor: "#98656a" }}>
                    Fruity
                  </div>
                </div>
                <div className="whiskyDescription">
                  The Ohishi distillery, located on the Kuma River, uses two
                  different types of rice, (gohyakumanishi and mocha) to distill
                  its whisky. The spirit is then aged for an undisclosed length
                  of time in sherry casks, making this a rich and fruity dram
                  that stands up with the best of Japanese whisky.
                </div>
              </div>
            </div>
            <div className="whisky3">
              <div className="whiskyContainer">
                <div className="whiskyImg w3">img</div>
                <div className="whiskyHeader hf">Yamazaki 12</div>
                <div className="whiskyTags">
                  <div className="tag" style={{ backgroundColor: "#98656a" }}>
                    Fruity
                  </div>
                  <div className="tag" style={{ backgroundColor: "#7d5744" }}>
                    Toast
                  </div>
                  <div className="tag" style={{ backgroundColor: "#dbb9a4" }}>
                    Marshmallow
                  </div>
                </div>
                <div className="whiskyDescription">
                  The whisky is light with dry spice notes and loads of fruity
                  flavors, easy on the oak with a finish that lingers for
                  awhile. Yamazaki 12 is aged in a variety of casks, giving it a
                  nice balance of flavors that, like a well-rehearsed orchestra,
                  complement each other and result in something greater than the
                  sum of its parts.
                </div>
              </div>
            </div>
            <div className="whisky4">
              <div className="whiskyContainer">
                <div className="whiskyImg w4">img</div>
                <div className="whiskyHeader hf">Chichibu Port Pipe</div>
                <div className="whiskyTags">
                  <div className="tag" style={{ backgroundColor: "#af829a" }}>
                    Candy
                  </div>
                  <div className="tag" style={{ backgroundColor: "#485b79" }}>
                    Balanced
                  </div>
                  <div className="tag" style={{ backgroundColor: "#6e8e88" }}>
                    Smooth
                  </div>
                </div>
                <div className="whiskyDescription">
                  Chichibu, founded in 2008, was built upon the remains of the
                  old Hanyu distillery about an hour outside of Tokyo.
                  Considering the distillery’s youth, there are a surprising
                  number of expressions available. One of the best is the Port
                  Pipe release, a single malt with no age statement that is aged
                  in ex-port barrels, giving it a nice, candy-like quality
                  without becoming overly sweet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Watertrade;
