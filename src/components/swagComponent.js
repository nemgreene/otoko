import React, { useState, useEffect } from "react";
import brandlogo from "../otoko.png";
import { Col, Row } from "react-bootstrap";
import NavBar from "./navBarC";
import { Link } from "react-router-dom";
import Background1 from "../img/1.jpg";
import Background2 from "../img/2.jpg";
import Background3 from "../img/3.jpg";
import Background4 from "../img/4.jpg";
import Background5 from "../img/5.jpg";
import Background6 from "../img/6.webp";

import mTT from "../img/mttFull.png";
import wTT from "../img/wTTfull.png";
import denim from "../img/denimFull.png";
import letterman from "../img/lettermanFull.png";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import apron1 from "../img/apron1Full.png";
import apron2 from "../img/apron2Full.png";
import daruma1 from "../img/daruma1Half.png";
import daruma2 from "../img/daruma2Half.png";
import daruma1Full from "../img/daruma1.png";
import daruma2Full from "../img/daruma2Full.png";
import daruma3Full from "../img/daruma3.png";
import daruma4Full from "../img/daruma4.png";

import mn1 from "../img/mn1.png";
import mn2 from "../img/mn2.png";
import mnBlack from "../img/mnBlack.png";
import mnBlue from "../img/mnBlue.png";
import mnRed from "../img/mnRed.png";
import mnYellow from "../img/mnYellow.png";

import b1 from "../img/binch01.png";
import b2 from "../img/binch02.png";
import b from "../img/bincho.png";

import brass1 from "../img/brass1.png";
import brass2 from "../img/brass2.png";
import brass3 from "../img/brass3.png";
import brass4 from "../img/brass4.png";
import bPatch1 from "../img/bPatch1.png";
import bPatch2 from "../img/bPatch2.png";
import bPatch3 from "../img/bPatch3.png";
import bPatch4 from "../img/bPatch4.png";

import set1 from "../img/01.jpg";
import set2 from "../img/02.jpg";
import set3 from "../img/03.jpg";
import set4 from "../img/04.jpg";
import set5 from "../img/05.jpg";
import set6 from "../img/06.jpg";

function Swag() {
  const [dynamicSize, cDynamicSize] = useState("100vh");
  const [flipped, tFlipped] = useState(null);
  const [overlay, tOverlay] = useState(true);
  const [activeOverlay, cActiveOverlay] = useState(null);
  const [activeFlipOverlay, cActiveFlipOverlay] = useState(null);
  const [activeDrinksOverlay, cActiveDrinksOverlay] = useState("wine");
  const [flippedImg, cFlippedImg] = useState(mTT);
  const [bgColor, cBGColor] = useState("hotPink");
  const [
    patchDesc,
    cPatchDesc,
  ] = useState(`A vintage pair of nut crackers designed and made by Carl Auböck II in Vienna circa 1950.
The handles of the nutcrackers are two solid, sand cast, pieces of brass pinned together at the pivot by a brass pin. Each handle is tightly woven with cane which now has a brilliantly even and warm patina.
Stamped Auböck Made in Austria.

Workshop: Werkstätte Carl Auböck`);
  function handleClick(targ) {
    flipped === null ? tFlipped(targ) : tFlipped(null);
  }
  function Exit() {
    return (
      <div className="exit">
        <div
          className="overlayExit"
          onClick={() => {
            cActiveOverlay(null);
            cActiveFlipOverlay(null);
            cActiveDrinksOverlay("wine");
          }}
        >
          X
        </div>
      </div>
    );
  }

  //--------------------------------------CutOverlay-------------------------------------
  function FlipOverlay(obj) {
    const {
      header,
      desc,
      tag,
      brand,
      type,
      use,
      edgeAngle,
      bladeMaterial,
      bolsterMaterial,
      handleMaterial,
      totalLength,
      bladeLength,
      bladeWidth,
      bladeThickness,
      weight,
      hrc,
      background,
    } = obj;
    return (
      <div
        className="flipped"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className="back"
          onClick={() => {
            cActiveFlipOverlay(null);
          }}
        />
        <div className="overlayHeader flippedHeader">{header}</div>
        <div className="overlayDescription flippedDescription">{desc}</div>
        <div className="tag flippedTag">{tag}</div>
        <div className="flippedTable">
          <div className="row flippedRow">
            <div className="col flippedColHeader">Brand</div>
            <div className="col flippedColContent">{brand}</div>
          </div>

          <div className="row flippedRow">
            <div className="col flippedColHeader">Type</div>
            <div className="col flippedColContent"> {type}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Use</div>
            <div className="col flippedColContent">{use}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Edge Angle</div>
            <div className="col flippedColContent">{edgeAngle}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Blade Material</div>
            <div className="col flippedColContent">{bladeMaterial}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Bolster material</div>
            <div className="col flippedColContent">{bolsterMaterial}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Handle material</div>
            <div className="col flippedColContent">{handleMaterial}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Total length</div>
            <div className="col flippedColContent">{totalLength}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Blade length</div>
            <div className="col flippedColContent">{bladeLength}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Blade width</div>
            <div className="col flippedColContent">{bladeWidth}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Blade thickness</div>
            <div className="col flippedColContent">{bladeThickness}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">Weight</div>
            <div className="col flippedColContent">{weight}</div>
          </div>
          <div className="row flippedRow">
            <div className="col flippedColHeader">HRC</div>
            <div className="col flippedColContent"> {hrc}</div>
          </div>
        </div>
        <button
          className="addToCart flippedAddToCart"
          type="addToCart"
          disabled
        >
          Add to cart
        </button>
      </div>
    );
  }

  function CutOverlay() {
    return (
      <div className="overlayContainer">
        <div className="water4OverlayContainer">
          <div className="overlay1">
            <div className="exit">
              <Exit />
            </div>
            {activeFlipOverlay ? (
              activeFlipOverlay
            ) : (
              <div className="overlay1Container">
                <div
                  className="overlayImg "
                  onClick={() => {
                    cActiveFlipOverlay(
                      FlipOverlay({
                        header: `ARITSUGU Deba Blue Steel Fillet Kitchen Japanese Chef Knife 135 mm
            5.31" AT018s Engraved Name Saya Cover`,
                        desc: `          This is a Deba knife. It is made not only stainless steels and
            ceramics, but also Aoko (Blue steel #2). It is made of Japanese swords
            (Samurai Katana) technique for a long time, then it feature tough and
            sharpness. Deba is also used in both cleaning and preparing chicken
            and fish. This is the most popular knife in Japan. It has a wide blade
            and is stronger than any other knives. It can be used to cut fish like
            a salmon.`,
                        tag: `$274.00`,
                        brand: `Tsukiji ARITSUGU`,
                        type: `Japanese style Gyuto A`,
                        use: `Fish, meat and vegetables`,
                        edgeAngle: `Single-edged`,
                        bladeMaterial: `AUS-10`,
                        bolsterMaterial: `Buffalo-horn bolster`,
                        handleMaterial: `Magnolia`,
                        totalLength: `Approx 400 mm (15.74")`,
                        bladeLength: `Approx 240 mm (9.44")`,
                        bladeWidth: `Approx 40 mm (1.57")`,
                        bladeThickness: `Approx 2 mm (0.07")`,
                        weight: `Approx 140 g (4.93 oz)`,
                        hrc: `62+-`,
                        background: Background1,
                      })
                    );
                  }}
                >
                  <div className="overlayImg1" />
                  <div className="overlayText">
                    ARITSUGU Deba Blue Steel Fillet Knife 135 mm 5.31" AT018s
                  </div>
                </div>
                <div
                  className="overlayImg "
                  onClick={() => {
                    cActiveFlipOverlay(
                      FlipOverlay({
                        header: `Japanese Chef's Knife ARITSUGU Gyuto AUS-10 Steel 300 mm 11.81" Kitchen Scabbard`,
                        desc: `This is a Gyuto knife. It is made of carbon steel. It has a thin, long blade with a sharp tip. It works well cutting big pieces of meat, whole fish and raw vegetables. Chefs use it to slice nice steaks, fillet fish, chop vegetables and peel fruits for desert.`,
                        tag: `$257.00`,
                        brand: `Tsukiji ARITSUGU`,
                        type: `AUS-10 Steel Gyuto`,
                        use: `Fish, meat and vegetables`,
                        edgeAngle: `Double-edged`,
                        bladeMaterial: `AUS-10`,
                        bolsterMaterial: `l	
                        No bolster type`,
                        handleMaterial: `Rose-wood`,
                        totalLength: `	
                        Approx 430 mm (16.92")`,
                        bladeLength: `	
                        Approx 300 mm (11.81")`,
                        bladeWidth: `	
                        Approx 50 mm (1.96")`,
                        bladeThickness: `	
                        Approx 2 mm (0.07")`,
                        weight: `	
                        Approx 330 g (11.64 oz)`,
                        hrc: `60+-`,
                        background: Background2,
                      })
                    );
                  }}
                >
                  <div className="overlayImg2" />
                  <div className="overlayText">
                    ARITSUGU Gyuto 300 mm 11.81" Scabbard
                  </div>
                </div>
                <div
                  className="overlayImg "
                  onClick={() => {
                    cActiveFlipOverlay(
                      FlipOverlay({
                        header: `Japanese Chef's Knife ARITSUGU Gyuto Carbon Steel 210mm 8.26" Kitchen Scabbard`,
                        desc: `This is a western Gyuto knife. It is made of Alloy steel. It has a thin, long blade with a sharp tip. It works well cutting big pieces of meat, whole fish and raw vegetables. Chefs use it to slice nice steaks, fillet fish, chop vegetables and peel fruits for desert.`,
                        tag: `$185.00`,
                        brand: `Tsukiji ARITSUGU`,
                        type: `	S Alloy steel Gyuto with a bolster`,
                        use: `	
                        Meat, fish and vegetable`,
                        edgeAngle: `Double-edged`,
                        bladeMaterial: `	
                        Alloy steel (Carbon steel)`,
                        bolsterMaterial: `	
                        Stainless Steel `,
                        handleMaterial: `	
                        Black wood`,
                        totalLength: `Approx 340 mm (13.38")`,
                        bladeLength: `	
                        Approx 210 mm (8.26")`,
                        bladeWidth: `	
                        Approx 45 mm (1.77")`,
                        bladeThickness: `	
                        Approx 2 mm (0.07")`,
                        weight: `Approx 200 g (7.05 oz)`,
                        hrc: `60+-`,
                        background: Background3,
                      })
                    );
                  }}
                >
                  <div className="overlayImg3" />
                  <div className="overlayText">
                    ARITSUGU Gyuto Carbon Steel 210mm 8.26" Kitchen Scabbard
                  </div>
                </div>
                <div
                  className="overlayImg "
                  onClick={() => {
                    cActiveFlipOverlay(
                      FlipOverlay({
                        header: `Japanese Chef's Knife ARITSUGU Gyuto AUS-10 Steel 240mm 9.44" Kitchen Scabbard`,
                        desc: `This is a Japanese Gyuto knife. It is made of AUS-10. Gyuto is originally a western style knife, and used as a general purpose knife to cut a variety of foods including meat and vegetables. Like a standard Gyuto, Washiki-Gyuto is also a double bevel knife. This kitchen knife is hard to rust and sharpness is good. It is lighter than Western knives. As this one is a versatile type Japanese style knives, it is very popular with overseas customers. Japanese sushi chefs are using this style of knives.`,
                        tag: `$212.00`,
                        brand: `Tsukiji ARITSUGU`,
                        type: `Japanese style Gyuto A`,
                        use: `Fish, meat and vegetables`,
                        edgeAngle: `Single-edged`,
                        bladeMaterial: `AUS-10`,
                        bolsterMaterial: `Black water buffalo-horn bolster`,
                        handleMaterial: `Magnolia`,
                        totalLength: `Approx 400 mm (15.74")`,
                        bladeLength: `Approx 240 mm (9.44")`,
                        bladeWidth: `Approx 40 mm (1.57")`,
                        bladeThickness: `Approx 2 mm (0.07")`,
                        weight: `Approx 140 g (4.93 oz)`,
                        hrc: `62+-`,
                        background: Background4,
                      })
                    );
                  }}
                >
                  <div className="overlayImg4" />
                  <div className="overlayText">
                    ARITSUGU Gyuto AUS-10 Steel 240mm 9.44" Scabbard
                  </div>
                </div>
                <div
                  className="overlayImg "
                  onClick={() => {
                    cActiveFlipOverlay(
                      FlipOverlay({
                        header: `ARITSUGU Alloy Steel Garasuki Kitchen Japanese Chef Knife 180 mm 7.08" AT085 Engraved Name`,
                        desc: `This is a Garasuki knife. It is made of Alloy Steel. This knife is used to cut and prepare chicken. It facilitates de-boning chicken. It also works well cutting and preparing fish. It is a useful knife to own.The Garasuki shares the same overall blade profile as the Honesuki, but the Garasuki is larger in size, thicker, and heavier.`,
                        tag: `$252.00`,
                        brand: `Tsukiji ARITSUGU`,
                        type: `	Goukin (carbon steel) Garasuki knife with a bolster `,
                        use: `Meat and bone (Chicken)`,
                        edgeAngle: `Double-edged`,
                        bladeMaterial: `	
                        Carbon steel`,
                        bolsterMaterial: `	
                        Stainless`,
                        handleMaterial: `Rose-wood`,
                        totalLength: `	
                        Approx 315 mm (12.40")`,
                        bladeLength: `	
                        Approx 180 mm (7.08")`,
                        bladeWidth: `	
                        Approx 50 mm (1.96")`,
                        bladeThickness: `	
                        Approx 4 mm (0.15")`,
                        weight: `	
                        Approx 270 g (9.52 oz)`,
                        hrc: `60+-`,
                        background: Background5,
                      })
                    );
                  }}
                >
                  <div className="overlayImg5" />
                  <div className="overlayText">
                    ARITSUGU Alloy Steel Garasuki 180 mm 7.08" AT085 Engraved
                  </div>
                </div>
                <div
                  className="overlayImg "
                  onClick={() => {
                    cActiveFlipOverlay(
                      FlipOverlay({
                        header: `Japanese Chef's Knife ARITSUGU Fugubiki Blue Steel Kitchen 330mm 12.99"`,
                        desc: `This is a Fugubiki knife. It is made of blue steel. It is used to slice fugu (puffer fish) to make sashimi. Since fugu is supposed to be sliced extremely thin, Fugubiki has a thinner blade than Yanagi and has a straighter edge as well.`,
                        tag: `$430.00`,
                        brand: `Tsukiji ARITSUGU`,
                        type: `	Betsuuchi Fugubiki`,
                        use: `	
                        Fish (Sushi and Sashimi)`,
                        edgeAngle: `Single-edged`,
                        bladeMaterial: `	
                        Blue steel (Aoko #2)`,
                        bolsterMaterial: `	
                        Black water Buffalo-horn bolster`,
                        handleMaterial: `Magnolia`,
                        totalLength: `	
                        Approx 490 mm (19.29")`,
                        bladeLength: `	
                        Approx 330 mm (12.99")`,
                        bladeWidth: `	
                        Approx 30 mm (1.18")`,
                        bladeThickness: `	
                        Approx 2 mm (0.07")`,
                        weight: `	
                        Approx 190 g (6.70 oz)`,
                        hrc: `62+-`,
                        background: Background6,
                      })
                    );
                  }}
                >
                  <div className="overlayImg6" />
                  <div className="overlayText">
                    ARITSUGU Fugubiki Blue Steel Kitchen 330mm 12.99"
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  //--------------------------------------WearOverlay-------------------------------------

  const WearOverlay = () => {
    return (
      <div className="wearOverlayContainer">
        <div className="wearOverlay">
          <Exit />
          {/* --------------------------------tees------------------- */}
          <div className="wearGrid wearGrid1">
            <div className="wearGridContainer">
              {flipped === "wearFlip1" ? (
                <div className="wearFlip1Container">
                  <div className="wear1Flip">
                    <div
                      style={{ backgroundImage: `url(${flippedImg})` }}
                      className="wNFImg"
                    />
                    <div
                      className="colorUnderlay"
                      style={{ backgroundColor: `${bgColor}` }}
                    />
                    <div className="wNFLogoContainer">
                      <div className="wNFlogo" />
                      <div className="wNFlogo" id="logoInv" />
                      <div className="wNFlogo" id="logoLetter" />
                    </div>
                    <div className="wNFColors">
                      <div
                        className="colorDiv"
                        style={{ background: "grey" }}
                        onClick={() => {
                          cBGColor("grey");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "slateGray" }}
                        onClick={() => {
                          cBGColor("slateGray");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "Pink" }}
                        onClick={() => {
                          cBGColor("Pink");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "maroon" }}
                        onClick={() => {
                          cBGColor("maroon");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "chocolate" }}
                        onClick={() => {
                          cBGColor("chocolate");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "white" }}
                        onClick={() => {
                          cBGColor("white");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "antiqueWhite" }}
                        onClick={() => {
                          cBGColor("antiqueWhite");
                        }}
                      ></div>
                    </div>
                    <div className="wNFFooter">
                      {" "}
                      <button
                        className="addToCart wearAddToCart"
                        type="addToCart"
                        disabled
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="wear1NoFlip">
                  <div className="wear1NFHeader"></div>
                  <div
                    className="wNFImg1"
                    onClick={() => {
                      cFlippedImg(wTT);
                      handleClick("wearFlip1");
                    }}
                  ></div>
                  <div
                    className="wNFImg2"
                    onClick={() => {
                      cFlippedImg(mTT);
                      handleClick("wearFlip1");
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* --------------------------------jackets------------------- */}
          <div className="wearGrid wearGrid1">
            <div className="wearGridContainer">
              {flipped === "wearFlip2" ? (
                <div className="wearFlip1Container">
                  <div className="wear1Flip">
                    <div
                      className="testImg"
                      style={{
                        backgroundImage: `url(${flippedImg})`,
                      }}
                    ></div>
                    <div
                      className="colorUnderlay"
                      style={{ backgroundColor: `${bgColor}` }}
                    />
                    <div className="wNFLogoContainer">
                      <div className="wNFlogo" />
                      <div className="wNFlogo" id="logoInv" />
                      <div className="wNFlogo" id="logoLetter" />
                    </div>
                    <div className="wNFColors">
                      <div
                        className="colorDiv"
                        style={{ background: "maroon" }}
                        onClick={() => {
                          cBGColor("maroon");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "darkGrey" }}
                        onClick={() => {
                          cBGColor("darkGrey");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "white" }}
                        onClick={() => {
                          cBGColor("white");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "midnightBlue" }}
                        onClick={() => {
                          cBGColor("midnightBlue");
                        }}
                      ></div>
                    </div>
                    <div className="wNFFooter">
                      {" "}
                      <button
                        className="addToCart wearAddToCart"
                        type="addToCart"
                        disabled
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="wear2NoFlip">
                  <div className="wear1NFHeader"></div>
                  <div
                    className="wNF2Img1"
                    onClick={() => {
                      cFlippedImg(letterman);
                      handleClick("wearFlip2");
                    }}
                  ></div>
                  <div
                    className="wNF2Img2"
                    onClick={() => {
                      cFlippedImg(denim);
                      handleClick("wearFlip2");
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* --------------------------------patches------------------- */}
          <div className="wearGrid wearGrid1">
            <div className="wearGridContainer">
              {flipped === "wearFlip3" ? (
                <div className="wearFlip1Container">
                  <div className="wear1Flip">
                    <div
                      className="testImg"
                      style={{
                        backgroundImage: `url(${flippedImg})`,
                      }}
                    ></div>

                    <div className="wNFLogoContainer">
                      <div
                        className="backward"
                        onClick={() => {
                          const patches = [p1, p2, p3, p4];
                          let index = patches.indexOf(flippedImg);
                          index > 0 ? (index = index - 1) : (index = 3);
                          cFlippedImg(patches[index]);
                        }}
                      >{`<`}</div>
                      <div
                        className="forward"
                        onClick={() => {
                          const patches = [p1, p2, p3, p4];
                          let index = patches.indexOf(flippedImg);
                          index < 3 ? (index = index + 1) : (index = 0);
                          cFlippedImg(patches[index]);
                        }}
                      >
                        {`>`}
                      </div>
                    </div>
                    <div className="wNFFooter">
                      {" "}
                      <button
                        className="addToCart wearAddToCart"
                        type="addToCart"
                        disabled
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="wear3NoFlip">
                  <div className="wear1NFHeader"></div>
                  <div
                    className="wNFpatch patch1"
                    onClick={() => {
                      cFlippedImg(p1);
                      handleClick("wearFlip3");
                    }}
                  ></div>
                  <div
                    className="wNFpatch patch2"
                    onClick={() => {
                      cFlippedImg(p2);
                      handleClick("wearFlip3");
                    }}
                  ></div>
                  <div
                    className="wNFpatch patch3"
                    onClick={() => {
                      cFlippedImg(p3);
                      handleClick("wearFlip3");
                    }}
                  ></div>
                  <div
                    className="wNFpatch patch4"
                    onClick={() => {
                      cFlippedImg(p4);
                      handleClick("wearFlip3");
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* --------------------------------aprons------------------- */}
          <div className="wearGrid wearGrid1">
            <div className="wearGridContainer">
              {flipped === "wearFlip4" ? (
                <div className="wearFlip1Container">
                  <div className="wear1Flip">
                    <div
                      className="testImg"
                      style={{
                        backgroundImage: `url(${flippedImg})`,
                      }}
                    ></div>
                    <div
                      className="colorUnderlay"
                      style={{
                        backgroundColor: `${bgColor}`,
                        marginTop: "-18.6vw;",
                      }}
                    />
                    <div className="wNFLogoContainer">
                      <div className="wNFlogo" />
                      <div className="wNFlogo" id="logoInv" />
                      <div className="wNFlogo" id="logoLetter" />
                    </div>
                    <div className="wNFColors">
                      <div
                        className="colorDiv"
                        style={{ background: "grey" }}
                        onClick={() => {
                          cBGColor("grey");
                        }}
                      ></div>

                      <div
                        className="colorDiv"
                        style={{ background: "Pink" }}
                        onClick={() => {
                          cBGColor("Pink");
                        }}
                      ></div>
                      <div
                        className="colorDiv"
                        style={{ background: "maroon" }}
                        onClick={() => {
                          cBGColor("maroon");
                        }}
                      ></div>
                    </div>
                    <div className="wNFFooter">
                      {" "}
                      <button
                        className="addToCart wearAddToCart"
                        type="addToCart"
                        disabled
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="wear4NoFlip">
                  <div className="wear1NFHeader"></div>
                  <div
                    className="wNF4ImgApron1"
                    onClick={() => {
                      cFlippedImg(apron1);
                      handleClick("wearFlip4");
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundImage: `url(${apron2})`,
                    }}
                    className="wNF4ImgApron2"
                    onClick={() => {
                      cFlippedImg(apron2);
                      handleClick("wearFlip4");
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {flipped ? (
            <div
              className="wearFlipUnderlay"
              onClick={() => {
                tFlipped(null);
              }}
            />
          ) : null}
        </div>
      </div>
    );
  };

  //--------------------------------------DrinksOverlay-------------------------------------

  const DrinksOverlay = () => {
    return (
      <div className="drinkOverlayContainer">
        <Exit />
        <div className="menuToggleContainer">
          <div
            className="menuToggle"
            onClick={() =>
              cActiveDrinksOverlay((c) => (c === "wine" ? "sake" : "wine"))
            }
          >
            <div className="menuWine">Wine</div>
            <div className="menuSake">Sake</div>
            <div
              className="toggleOverlay"
              style={{
                transform: `translate(${
                  activeDrinksOverlay === "wine" ? ".2vw" : "2.6vw"
                }, 0vw)`,
              }}
            ></div>
          </div>
        </div>
        <div className="drinksOverlay">
          <div className="drinksOverlayGridContainer">
            {activeDrinksOverlay === "wine" ? (
              <div className="drinksWineContainer">
                {/* ------------------------------------Wine--------------------- */}
                <div className="drinksWine">
                  <div
                    className="sparkling"
                    onClick={() => alert("Added to cart")}
                  >
                    <div className="drinkHeader">Sparkling</div>
                    <div className="drinksItem">
                      Bernardi Flor<div className="winePrice">40</div>
                    </div>
                    <div className="drinksItem">
                      Gavi Spumante<div className="winePrice">46</div>
                    </div>
                    <div className="drinksItem">
                      Emiliana Sparkling <div className="winePrice">56</div>
                    </div>
                    <div className="drinksItem">
                      Nytimber Classic <div className="winePrice">58</div>
                    </div>
                    <div className="drinksItem">
                      Nytimber Rose <div className="winePrice">105</div>
                    </div>
                  </div>
                  <div
                    className="orange"
                    onClick={() => alert("Added to cart")}
                  >
                    <div className="drinkHeader">Orange</div>
                    <div className="drinksItem">
                      Solara Orange <div className="winePrice">45</div>
                    </div>
                    <div className="drinksItem">
                      Baglio Bianco<div className="winePrice">45</div>
                    </div>
                    <div className="drinksItem">
                      Partida Creus BN<div className="winePrice">48</div>
                    </div>
                    <div className="drinksItem">
                      Kindelli Blanco<div className="winePrice">50</div>
                    </div>
                    <div className="drinksItem">
                      Testalonga Stay Brave<div className="winePrice">68</div>
                    </div>
                    <div className="drinksItem">
                      Chateau Mercian GdG<div className="winePrice">75</div>
                    </div>
                    <div className="drinksItem">
                      Cloudwalker Cambridge<div className="winePrice">80</div>
                    </div>
                    <div className="drinksItem">
                      Palmento Vino Bianco<div className="winePrice">182</div>
                    </div>
                  </div>
                  <div className="white" onClick={() => alert("Added to cart")}>
                    <div className="drinkHeader">White</div>
                    <div className="drinksItem">
                      Ciello Bianco<div className="winePrice">44</div>
                    </div>
                    <div className="drinksItem">
                      Villa Nova Vinho Verde <div className="winePrice">45</div>
                    </div>
                    <div className="drinksItem">
                      Willowglen <div className="winePrice">50</div>
                    </div>
                    <div className="drinksItem">
                      Raul Perez Adaras Alluvia
                      <div className="winePrice">55</div>
                    </div>
                    <div className="drinksItem">
                      Picpoul de Pinet <div className="winePrice">56</div>
                    </div>
                    <div className="drinksItem">
                      Beaujolais Blanc, Couvette{" "}
                      <div className="winePrice">56</div>
                    </div>
                    <div className="drinksItem">
                      Domaine Luneau Papin <div className="winePrice">56</div>
                    </div>
                    <div className="drinksItem">
                      Gymnasium Fritz Willi <div className="winePrice">60</div>
                    </div>
                    <div className="drinksItem">
                      Clos Bagatelle, Lulu <div className="winePrice">61</div>
                    </div>
                    <div className="drinksItem">
                      Domaine de la Pepiere, Muscadet{" "}
                      <div className="winePrice">65</div>
                    </div>
                    <div className="drinksItem">
                      Davenport Horsmonden<div className="winePrice">67</div>
                    </div>
                    <div className="drinksItem">
                      Guerila Zelen <div className="winePrice">68</div>
                    </div>
                    <div className="drinksItem">
                      Sokol Blosser Evolution White{" "}
                      <div className="winePrice">70</div>
                    </div>
                    <div className="drinksItem">
                      Sam Vinciullo Glenn<div className="winePrice">72</div>
                    </div>
                    <div className="drinksItem">
                      Andorfer 17<div className="winePrice">74</div>
                    </div>
                    <div className="drinksItem">
                      Mad Tokaij<div className="winePrice">78</div>
                    </div>
                    <div className="drinksItem">
                      Château Vessière Blanc<div className="winePrice">86</div>
                    </div>
                    <div className="drinksItem">
                      Bodegas Tajinaste<div className="winePrice">89</div>
                    </div>
                    <div className="drinksItem">
                      Chateau Mercian Yamanashi
                      <div className="winePrice">105</div>
                    </div>
                    <div className="drinksItem">
                      Cave de Ribeauville<div className="winePrice">115</div>
                    </div>
                    <div className="drinksItem">
                      Domaine Goisot Bourgogne
                      <div className="winePrice">120</div>
                    </div>
                    <div className="drinksItem">
                      Domaine Marie-Pierre<div className="winePrice">125</div>
                    </div>
                    <div className="drinksItem">
                      Nicolas ReaucChenin Mechant
                      <div className="winePrice">130</div>
                    </div>
                    <div className="drinksItem">
                      Clément Klur Katz<div className="winePrice">160</div>
                    </div>
                    <div className="drinksItem">
                      Albourne Estate<div className="winePrice">210</div>
                    </div>
                    <div className="drinksItem">
                      Chablis Premier Cru<div className="winePrice">250</div>
                    </div>
                    <div className="drinksItem">
                      Grace Winery Private Reserve
                      <div className="winePrice">320</div>
                    </div>
                  </div>
                  <div className="red" onClick={() => alert("Added to cart")}>
                    <div className="drinkHeader">Red</div>
                    <div className="drinksItem">
                      Blaufrankish Hochacker<div className="winePrice">54</div>
                    </div>
                    <div className="drinksItem">
                      Partida Creus TN<div className="winePrice">55</div>
                    </div>
                    <div className="drinksItem">
                      Lectores Vini Pomagrana<div className="winePrice">58</div>
                    </div>
                    <div className="drinksItem">
                      Piquentum Refosk<div className="winePrice">67</div>
                    </div>
                    <div className="drinksItem">
                      Calcarius Roz<div className="winePrice">69</div>
                    </div>
                    <div className="drinksItem">
                      C-Hermitages Les Pirelles{" "}
                      <div className="winePrice">70</div>
                    </div>
                    <div className="drinksItem">
                      Zorgivelt Richelle<div className="winePrice">76</div>
                    </div>
                    <div className="drinksItem">
                      Rainbow Juice<div className="winePrice">78</div>
                    </div>
                    <div className="drinksItem">
                      Querciabella Chianti DOCG{" "}
                      <div className="winePrice">125</div>
                    </div>
                    <div className="drinksItem">
                      Post Flirtation<div className="winePrice">136</div>
                    </div>
                    <div className="drinksItem">
                      Sokol Blosser Estate <div className="winePrice">250</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ----------------------------------------Sake---------------------- */
              <div className="drinksWineContainer">
                <div className=" drinksSake">
                  <div
                    className="sparkling"
                    onClick={() => alert("Added to cart")}
                  >
                    <div className="drinkHeader">Sparkling</div>
                    <div className="drinksItem">
                      Shochikubai Shirakabegura Mio{" "}
                      <div className="winePrice">9.50</div>
                    </div>
                    <div className="drinksItem">
                      Ozeki Hanaawaka<div className="winePrice">7.95</div>
                    </div>
                    <div className="drinksItem">
                      Kasumitsuru Kingyo Nigori{" "}
                      <div className="winePrice">16.98</div>
                    </div>
                    <div className="drinksItem">
                      Dassai 50 Nigori<div className="winePrice">17.98</div>
                    </div>
                    <div className="drinksItem">
                      Kamomidori Hana Hou Hou Shu{" "}
                      <div className="winePrice">21.99</div>
                    </div>
                  </div>
                  <div
                    className="sparkling nama"
                    onClick={() => alert("Added to cart")}
                  >
                    <div className="drinkHeader">Nama</div>
                    <div className="drinksItem">
                      Bushido Way of the Warrior
                      <div className="winePrice">40</div>
                    </div>
                    <div className="drinksItem">
                      Konteki Pearls of Simplicity
                      <div className="winePrice">46</div>
                    </div>
                    <div className="drinksItem">
                      Tatsuriki Kome no Sasayaki
                      <div className="winePrice">56</div>
                    </div>
                    <div className="drinksItem">
                      Nihon Sakari <div className="winePrice">58</div>
                    </div>
                    <div className="drinksItem">
                      Mana 1751 "True Vision"{" "}
                      <div className="winePrice">105</div>
                    </div>
                  </div>
                  <div
                    className="orange nigori"
                    onClick={() => alert("Added to cart")}
                  >
                    <div className="drinkHeader">Nigori</div>
                    <div className="drinksItem">
                      Shotoku "Karakuchi" <div className="winePrice">7</div>
                    </div>
                    <div className="drinksItem">
                      Tamagawa Special<div className="winePrice">12</div>
                    </div>
                    <div className="drinksItem">
                      Tamagawa Red Lable<div className="winePrice">12</div>
                    </div>
                    <div className="drinksItem">
                      Kamoizumi Shusen<div className="winePrice">12</div>
                    </div>
                    <div className="drinksItem">
                      Kuzuryu<div className="winePrice">13.50</div>
                    </div>
                    <div className="drinksItem">
                      Sohomare 'Karakuchi'<div className="winePrice">14</div>
                    </div>
                    <div className="drinksItem">
                      Amabuki Himawara<div className="winePrice">80</div>
                    </div>
                    <div className="drinksItem">
                      Dassai 50<div className="winePrice">182</div>
                    </div>
                  </div>
                  <div
                    className="white ginjo"
                    onClick={() => alert("Added to cart")}
                  >
                    <div className="drinkHeader">Ginjo</div>
                    <div className="drinksItem">
                      Masumi Hiyaoroshi<div className="winePrice">42</div>
                    </div>
                    <div className="drinksItem">
                      Hakkaisan "Eight Peaks"<div className="winePrice">45</div>
                    </div>
                    <div className="drinksItem">
                      Fukucho "Seaside" <div className="winePrice">50</div>
                    </div>
                    <div className="drinksItem">
                      Nihon Sakari
                      <div className="winePrice">55</div>
                    </div>
                    <div className="drinksItem">
                      Kirinzan "Flying Dragon<div className="winePrice">56</div>
                    </div>
                    <div className="drinksItem">
                      Hanahato "Gorgeous Bird"
                      <div className="winePrice">56</div>
                    </div>
                    <div className="drinksItem">
                      Kanbara "Ancient Treasure"{" "}
                      <div className="winePrice">56</div>
                    </div>
                    <div className="drinksItem">
                      Ichinokura Himizen Ume<div className="winePrice">60</div>
                    </div>
                    <div className="drinksItem">
                      Nanbu Bijin "Shinpaku" <div className="winePrice">61</div>
                    </div>
                    <div className="drinksItem">
                      Ryujin "Dragon God"
                      <div className="winePrice">65</div>
                    </div>
                    <div className="drinksItem">
                      Nishinoseki "Daruma Cup"
                      <div className="winePrice">67</div>
                    </div>
                    <div className="drinksItem">
                      Yuho "Eternal Embers"<div className="winePrice">68</div>
                    </div>
                    <div className="drinksItem">
                      Yamada Shoten "Everlasting Roots"
                      <div className="winePrice">70</div>
                    </div>
                    <div className="drinksItem">
                      TamanoHikari<div className="winePrice">72</div>
                    </div>
                    <div className="drinksItem">
                      Hakkaisan Snowaged "Yukimuro"
                      <div className="winePrice">74</div>
                    </div>
                  </div>
                  <div
                    className="red daiginjo"
                    onClick={() => alert("Added to cart")}
                  >
                    <div className="drinkHeader">Daiginjo/Honjozu</div>
                    <div className="drinksItem">
                      Hoyo Kure No Hana<div className="winePrice">46</div>
                    </div>
                    <div className="drinksItem">
                      Dassai 45<div className="winePrice">55</div>
                    </div>
                    <div className="drinksItem">
                      Dassai 50<div className="winePrice">58</div>
                    </div>
                    <div className="drinksItem">
                      Dassai 70<div className="winePrice">67</div>
                    </div>
                    <div className="drinksItem">
                      Sohomare Kimoto<div className="winePrice">70</div>
                    </div>
                    <div className="drinksItem">
                      Kokuryu 'Ryu'
                      <div className="winePrice">72</div>
                    </div>
                    <div className="drinksItem">
                      Dassai 39<div className="winePrice">76</div>
                    </div>
                    <div className="drinksItem">
                      Kuro Kabuto Black Samurai Armor Helmet
                      <div className="winePrice">78</div>
                    </div>
                    <div className="drinksItem">
                      Shoten Everlasting Roots
                      <div className="winePrice">125</div>
                    </div>
                    <div className="drinksItem">
                      Amabuki Himawara<div className="winePrice">136</div>
                    </div>
                    <div className="drinksItem">
                      Ichiban Taru Sake<div className="winePrice">250</div>
                    </div>
                  </div>
                </div>
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    );
  };

  //--------------------------------------Live Overlay------------------------------------------------
  const LiveOverlay = () => {
    return (
      <div className="liveOverlayContainer">
        <div className="liverOverlay">
          <Exit />
          <div className="wearOverlay">
            {/* --------------------------------Daruma------------------- */}
            <div className="wearGrid wearGrid1">
              <div className="wearGridContainer">
                {flipped === "wearFlip1" ? (
                  <div className="wearFlip1Container">
                    <div className="wear1Flip">
                      <div
                        className="wNFImg"
                        style={{ backgroundImage: `url(${flippedImg})` }}
                      />

                      <div className="wNFColors">
                        <div
                          className="colorDiv"
                          style={{
                            background: "red",
                            border: "0.05vw antiquewhite solid",
                          }}
                          onClick={() => cFlippedImg(daruma1Full)}
                        ></div>
                        <div
                          className="colorDiv"
                          style={{
                            background: "black",
                            border: "0.05vw red solid",
                          }}
                          onClick={() => cFlippedImg(daruma2Full)}
                        ></div>
                        <div
                          className="colorDiv"
                          style={{
                            background: "antiqueWhite",
                            border: "0.05vw red solid",
                          }}
                          onClick={() => cFlippedImg(daruma3Full)}
                        ></div>
                        <div
                          className="colorDiv"
                          style={{
                            background: "gold",
                            border: "0.05vw red solid",
                          }}
                          onClick={() => cFlippedImg(daruma4Full)}
                        ></div>
                      </div>
                      <div className="wNFFooter">
                        {" "}
                        <button
                          className="addToCart wearAddToCart"
                          type="addToCart"
                          disabled
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="wear1NoFlip">
                    <div
                      className="wNFImg1 "
                      style={{ backgroundImage: `url(${daruma1})` }}
                      onClick={() => {
                        cFlippedImg(daruma1Full);
                        handleClick("wearFlip1");
                      }}
                    ></div>
                    <div
                      className="wNFImg2 "
                      onClick={() => {
                        handleClick("wearFlip1");
                        cFlippedImg(daruma2Full);
                      }}
                      style={{ backgroundImage: `url(${daruma2})` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>

            {/* --------------------------------Maneki------------------- */}
            <div className="wearGrid wearGrid1">
              <div className="wearGridContainer">
                {flipped === "wearFlip2" ? (
                  <div className="wearFlip1Container">
                    <div className="wear1Flip">
                      <div
                        className="wNFImg"
                        style={{ backgroundImage: `url(${flippedImg})` }}
                      />

                      <div className="wNFColors">
                        <div
                          className="colorDiv"
                          style={{ background: "red" }}
                          onClick={() => cFlippedImg(mnRed)}
                        ></div>
                        <div
                          className="colorDiv"
                          onClick={() => cFlippedImg(mnYellow)}
                          style={{ background: "gold" }}
                        ></div>

                        <div
                          className="colorDiv"
                          onClick={() => cFlippedImg(mnBlue)}
                          style={{ background: "midnightBlue" }}
                        ></div>
                        <div
                          className="colorDiv"
                          onClick={() => cFlippedImg(mnBlack)}
                          style={{ background: "black" }}
                        ></div>
                      </div>
                      <div className="wNFFooter">
                        {" "}
                        <button
                          className="addToCart wearAddToCart"
                          type="addToCart"
                          disabled
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="wear2NoFlip">
                    <div
                      className="wNF2Img1"
                      style={{ backgroundImage: `url(${mn1})` }}
                      onClick={() => {
                        handleClick("wearFlip2");
                        cFlippedImg(mnBlack);
                      }}
                    ></div>
                    <div
                      className="wNF2Img2"
                      style={{ backgroundImage: `url(${mn2})` }}
                      onClick={() => {
                        handleClick("wearFlip2");
                        cFlippedImg(mnRed);
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>

            {/* --------------------------------Textile------------------- */}
            <div className="wearGrid wearGrid1">
              <div className="wearGridContainer">
                {flipped === "wearFlip3" ? (
                  <div className="wearFlip1Container">
                    <div className="wear1Flip">
                      <div
                        className="wNFImg"
                        style={{
                          backgroundImage: `url(${flippedImg})`,
                        }}
                      />
                      <div className="patchDesc">{patchDesc}</div>
                      <div className="wNFFooter">
                        {" "}
                        <button
                          className="addToCart wearAddToCart"
                          type="addToCart"
                          disabled
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="wear3NoFlip">
                    <div
                      className="wNFpatch wNFpatchOffset "
                      onClick={() => {
                        handleClick("wearFlip3");
                        cFlippedImg(brass4);
                        cPatchDesc(`£750
                        DescriptionA vintage pair of nut crackers designed and made by Carl Auböck II in Vienna circa 1950.
                        The handles of the nutcrackers are two solid, sand cast, pieces of brass pinned together at the pivot by a brass pin. Each handle is tightly woven with cane which now has a brilliantly even and warm patina.
                        Stamped Auböck Made in Austria.`);
                      }}
                      style={{
                        backgroundImage: `url(${bPatch1})`,
                      }}
                    ></div>
                    <div
                      className="wNFpatch wNFpatchOffset "
                      onClick={() => {
                        handleClick("wearFlip3");
                        cFlippedImg(brass3);
                        cPatchDesc(`£600
                        DescriptionCylindrical pot in brass by the Auböck Werkstatte, Vienna circa 1960.
                        The outer part of the lid features an effigy of Charles VI, Holy Roman Emperor right profile with the inscription 'CAROLUS VI:D.G.:ROM.IMP.SEMP.AUG:'. The inner part bears another image in low relief which is more difficult to decipher; clearly visible are a man on the right, holding a shield and two ships behind him, in the background.
                        `);
                      }}
                      style={{
                        backgroundImage: `url(${bPatch2})`,
                      }}
                    ></div>
                    <div
                      className="wNFpatch wNFpatchOffset "
                      onClick={() => {
                        handleClick("wearFlip3");
                        cFlippedImg(brass2);
                        cPatchDesc(`£320
                        DescriptionA vintage brass ashtray with a very tactile and visually satisfying geometric amoeba shape, made by the Auböck Werkstatte, Vienna circa 1950. Although very slender and delicately shaped the ash tray is also pleasingly weighty.The brass is now covered by a uniform patina naturally built over time.
                        Stamped with the Auböck signature to the underside.`);
                      }}
                      style={{
                        backgroundImage: `url(${bPatch3})`,
                      }}
                    ></div>
                    <div
                      className="wNFpatch wNFpatchOffset "
                      onClick={() => {
                        handleClick("wearFlip3");
                        cFlippedImg(brass1);
                        cPatchDesc(
                          `£630
                          DescriptionA sculptural pair of polished brass candlesticks with a patinated lower half. Designed in the 1950s, they were influenced by Carl Auböck's time at the Bauhaus but created today as new cast. Sold as a pair.`
                        );
                      }}
                      style={{
                        backgroundImage: `url(${bPatch4})`,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>

            {/* --------------------------------Binchotan------------------- */}
            <div className="wearGrid wearGrid1">
              <div className="wearGridContainer">
                {flipped === "wearFlip4" ? (
                  <div className="wearFlip1Container">
                    <div className="wear1Flip">
                      <div
                        className="wNFImg binchotanImg "
                        style={{ backgroundImage: `url(${b})` }}
                      />
                      <div className="wNFColors binchotanTextContainer">
                        <div className="binchotanHeader">Binchotan</div>
                        <div className="binchotanText">
                          Traditional japanese white oak(Quercus Mongolicus)
                          brought to popularity in classic Yakitori grills. The
                          rendered fat from grilling meat drapes onto the coals,
                          perfuming the meat and infusing it with a
                          characteristic flavor. <br />
                          Sustainable sourced from Mie, Japan, the oak have
                          branches removed only when there is another in its
                          place. The balance of this practice is key, because
                          true binchotan can only come from oaks over a century
                          old. These oaks will not be straight enough untill
                          after years of careful nurturng, making the wood
                          itself increasingly prized.
                        </div>
                        <div className="menuToggleContainer">
                          <div
                            className="menuToggle"
                            onClick={() =>
                              cActiveDrinksOverlay((c) =>
                                c === "wine" ? "sake" : "wine"
                              )
                            }
                          >
                            <div className="menuWine">1kg</div>
                            <div className="menuSake">.5kg</div>
                            <div
                              className="toggleOverlay"
                              style={{
                                transform: `translate(${
                                  activeDrinksOverlay === "wine"
                                    ? ".2vw"
                                    : "2.6vw"
                                }, 0vw)`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="wNFFooter">
                        {" "}
                        <button
                          className="addToCart wearAddToCart"
                          type="addToCart"
                          disabled
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="wear4NoFlip"
                    onClick={() => {
                      handleClick("wearFlip4");
                      cFlippedImg();
                    }}
                  >
                    <div
                      className="wNF4Img1"
                      style={{
                        backgroundImage: `url(${b1})`,
                      }}
                    ></div>
                    <div
                      className="wNF4Img2"
                      style={{
                        backgroundImage: `url(${b2})`,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>

            {flipped ? (
              <div
                className="wearFlipUnderlay"
                onClick={() => {
                  tFlipped(null);
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  //--------------------------------------SetOverlay-------------------------------------
  function SetFlipped(obj) {
    const { header, desc, tag, brand, type, bg } = obj;
    return (
      <div
        className="flipped"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: `20vw`,
        }}
      >
        <div
          className="back"
          onClick={() => {
            cActiveFlipOverlay(null);
          }}
        />
        <div className="overlayHeader flippedHeader">{header}</div>
        <div className="overlayDescription flippedDescription">{desc}</div>
        <div className="tag flippedTag">{tag}</div>
        <div className="flippedTable">
          <div className="row flippedRow">
            <div className="col flippedColHeader">Size</div>
            <div className="col flippedColContent">{brand}</div>
          </div>

          <div className="row flippedRow">
            <div className="col flippedColHeader">Studio Notes</div>
            <div className="col flippedColContent">
              <ul className="listContent">
                {type.map((i) => {
                  return <li className="listContentItem">{i}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <button
          className="addToCart flippedAddToCart"
          type="addToCart"
          disabled
        >
          Add to cart
        </button>
      </div>
    );
  }

  function SetOverlay() {
    return (
      <div className="overlayContainer">
        <div className="water4OverlayContainer">
          <div className="overlay1">
            <div className="exit">
              <Exit />
            </div>
            {activeFlipOverlay ? (
              activeFlipOverlay
            ) : (
              <div className="overlay1Container">
                <div
                  className="overlayImg"
                  onClick={() => {
                    cActiveFlipOverlay(
                      SetFlipped({
                        header: `Oval Serving Platter`,
                        desc: `This platter means business. It’s a substantial, gorgeous, yet understated platter that can hold your family dinner of fish, steak or whole roast chicken and sides.  It’s also equally at home holding court on your coffee table, just waiting for your next family feast..`,
                        tag: `$450.00`,
                        brand: `11.5" X 17.5” `,
                        type: [
                          `Hand-crafted in Austin, Texas out of porcelain `,
                          `Made using a slab-building technique`,
                          `Durable, semi-gloss glaze with inlaid slip`,
                          `Slight variations are inherent in the hand-made process and are the soul of our work`,
                          <a href="https://keithkreeger.com/pages/care-use">{`Care & Use Guide`}</a>,
                        ],
                        bg: set1,
                      })
                    );
                  }}
                >
                  <div className="overlayImgSet1"></div>
                  <div className="overlayText">Oval Serving Platter</div>
                </div>
                <div
                  className="overlayImg"
                  onClick={() => {
                    cFlippedImg(set2);
                    cActiveFlipOverlay(
                      SetFlipped({
                        header: `Round Serving Platter - Ltd. Edition Blue Linea`,
                        desc: `This made-to-order platter gets noticed.  Our 15" Round Serving Platter has a gentle slope and is ready to upgrade your coffee table, entranceway or next meal. We've updated it for a limited release with a blue linea band.`,
                        tag: `$450.00`,
                        brand: `11.5"`,
                        type: [
                          `These pieces are made-to-order and will ship within 4 weeks`,
                          `Hand-crafted in Austin, Texas out of porcelain `,
                          `Durable, semi-gloss clear glaze with inlaid slip design `,
                          `Slight variations are inherent in the hand-made process and are the soul of our work `,
                          `Dishwasher and microwave safe`,
                          <a href="https://keithkreeger.com/pages/care-use">{`Care & Use Guide`}</a>,
                        ],
                        bg: set2,
                      })
                    );
                  }}
                >
                  <div className="overlayImgSet2"></div>
                  <div className="overlayText">
                    Round Serving Platter - Ltd. Edition Blue Linea
                  </div>
                </div>
                <div
                  className="overlayImg"
                  onClick={() => {
                    cFlippedImg(set3);
                    cActiveFlipOverlay(
                      SetFlipped({
                        header: `Oval Sides Bowl - Linea`,
                        desc: `If we were throwing a dinner party, we'd certainly use this dish. It's a beautiful compliment to our Gramercy dinnerware, and the simple Linea pattern helps define whatever you're plating, be it grains, salad or macaroons. It's also great for appetizers like brie and crackers, topped with blackberry compote. `,
                        tag: `$90.00`,
                        brand: `10" x 5"`,
                        type: [
                          `Durable, semi-gloss clear glaze with inlaid slip design `,
                          `Durable matte glaze`,
                          `Slight variations are inherent in the hand-made process and are the soul of our work `,
                          `Dishwasher and microwave safe`,
                          <a href="https://keithkreeger.com/pages/care-use">{`Care & Use Guide`}</a>,
                        ],
                        bg: set3,
                      })
                    );
                  }}
                >
                  <div className="overlayImgSet3"></div>
                  <div className="overlayText">Oval Sides Bowl - Linea</div>
                </div>
                <div
                  className="overlayImg"
                  onClick={() => {
                    cFlippedImg(set4);
                    cActiveFlipOverlay(
                      SetFlipped({
                        header: `Lexington Serving Bowl - Banded Stripes`,
                        desc: `This beauty is the newest addition to our Lexington Collection. It's being released with our special Banded Stripes Collection and makes a statement sitting on the table with our without food. Perfect for serving larger sides, like salads, grains and more. With it's gentle sloping sides and narrow base, it's also perfect for your rice or noodle bowls.
`,
                        tag: `$95.00`,
                        brand: `10" wide x 6" tall`,
                        type: [
                          `Hand-crafted in Austin, Texas out of porcelain`,
                          `Made using a slipcasting technique  `,
                          `Durable, glazed interior, matte exterior`,
                          `Slight variations are inherent in the hand-made process and are the soul of our work`,
                          `Dishwasher and microwave safe`,
                          <a href="https://keithkreeger.com/pages/care-use">{`Care & Use Guide`}</a>,
                        ],
                        bg: set4,
                      })
                    );
                  }}
                >
                  <div className="overlayImgSet4"></div>
                  <div className="overlayText">
                    Lexington Serving Bowl - Banded Stripes
                  </div>
                </div>
                <div
                  className="overlayImg"
                  onClick={() => {
                    cFlippedImg(set5);
                    cActiveFlipOverlay(
                      SetFlipped({
                        header: `Essential Serving Bowl - Turquoise`,
                        desc: `The perfect addition to your kitchen. Think crisp and delicious salads to start your meal, a perfectly al dente pasta for your family, or a bright bowl of citrus sitting on your countertop.  It’s no wonder this is one of our most popular serving pieces.`,
                        tag: `$200.00`,
                        brand: `11" X 3”`,
                        type: [
                          `Hand-crafted in Austin, Texas out of porcelain`,
                          `Made using a slipcasting technique  `,
                          `Durable, glazed interior, matte exterior`,
                          `Slight variations are inherent in the hand-made process and are the soul of our work`,
                          `Dishwasher and microwave safe`,
                          <a href="https://keithkreeger.com/pages/care-use">{`Care & Use Guide`}</a>,
                        ],
                        bg: set5,
                      })
                    );
                  }}
                >
                  <div className="overlayImgSet5"></div>
                  <div className="overlayText">
                    Essential Serving Bowl - Turquoise
                  </div>
                </div>
                <div
                  className="overlayImg"
                  onClick={() => {
                    cFlippedImg(set6);
                    cActiveFlipOverlay(
                      SetFlipped({
                        header: `Rectangular Serving Dish White and Gold`,
                        desc: `
                       This simple statement piece with dripping gold is ready to hold your next family-style feast, a batch of lemons or just sit on your table looking good. This piece is made to order and typically ships in 4-5 weeks. Check with us to see what we have in stock.`,
                        tag: `$450.00`,
                        brand: `14.5" x 5.5"`,
                        type: [
                          `Hand-crafted in Austin, Texas out of porcelain`,
                          `Made using a slipcasting technique  `,
                          `Durable, semi-gloss glaze with metallic edge`,
                          `Slight variations are inherent in the hand-made process and are the soul of our work`,
                          <a href="https://keithkreeger.com/pages/care-use">{`Care & Use Guide`}</a>,
                        ],
                        bg: set6,
                      })
                    );
                  }}
                >
                  <div className="overlayImgSet6"></div>
                  <div className="overlayText">
                    Rectangular Serving Dish White and Gold
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  //--------------------------------------Render-------------------------------------
  const GlobalUnderlay = () => {
    return (
      <div
        className="globalUnderlay"
        onClick={() => {
          cActiveOverlay(null);
          cActiveFlipOverlay(null);
          cActiveDrinksOverlay("wine");
        }}
      ></div>
    );
  };
  const dynamicHeight = (widthCap, over, under) => {
    console.log(window.innerHeight, window.innerWidth);
    if (window.innerWidth < 1500 && dynamicSize !== "45vw") {
      cDynamicSize(() => "45vw");
    }
    if (window.innerWidth > 1500 && dynamicSize !== "100vh") {
      cDynamicSize("100vh");
    }
  };

  console.log(window.addEventListener("resize", dynamicHeight));

  return (
    <div className="swagContainer">
      <div className="swag1">
        {activeOverlay === "cutOverlay" ? <CutOverlay /> : null}
        {activeOverlay === "wearOverlay" ? <WearOverlay /> : null}
        {activeOverlay === "drinksOverlay" ? <DrinksOverlay /> : null}
        {activeOverlay === "liveOverlay" ? <LiveOverlay /> : null}
        {activeOverlay === "setOverlay" ? <SetOverlay /> : null}
        {activeOverlay !== null ? <GlobalUnderlay /> : null}
        <Row>
          <Col
            className="welcome2Col1 swagCol1"
            style={{
              height: `${dynamicSize}`,
            }}
            onClick={() => {
              tFlipped(null);
              cActiveOverlay("cutOverlay");
            }}
          >
            <div className="welcome2Cols">
              <div className="welcome2ColsText swagOverlay"> CUT</div>
            </div>
          </Col>
          <Col
            className="welcome2Col2 swagCol2"
            style={{
              height: `${dynamicSize}`,
            }}
            onClick={() => {
              tFlipped(null);
              cActiveOverlay("wearOverlay");
            }}
          >
            <div className="welcome2Cols">
              <div className="welcome2ColsText swagOverlay">WEAR</div>
            </div>
          </Col>
          <Col
            className="welcome2Col3 swagCol3"
            style={{
              height: `${dynamicSize}`,
            }}
            onClick={() => {
              tFlipped(null);
              cActiveOverlay("drinksOverlay");
            }}
          >
            <div className="welcome2Cols">
              <div className="welcome2ColsText swagOverlay">DRINK</div>
            </div>
          </Col>
          <Col
            className="welcome2Col4 swagCol4"
            style={{
              height: `${dynamicSize}`,
            }}
            onClick={() => {
              cActiveOverlay("liveOverlay");
            }}
          >
            <div className="welcome2Cols">
              <div className="welcome2ColsText swagOverlay">LIVE</div>
            </div>
          </Col>
          <Col
            className="welcome2Col5 swagCol5"
            style={{
              height: `${dynamicSize}`,
            }}
            onClick={() => {
              cActiveOverlay("setOverlay");
            }}
          >
            <div className="welcome2Cols">
              <div
                className="welcome2ColsText swagOverlay"
                style={{ color: "antiqueWhite" }}
              >
                SET
              </div>
            </div>
          </Col>
        </Row>
        <div className="buttonOverlay">
          <a
            className="bookNow"
            target="_blank"
            href="https://otokoaustin.com/tickets"
          ></a>
          <a className="back" href="/"></a>
        </div>
      </div>
    </div>
  );
}

export default Swag;
