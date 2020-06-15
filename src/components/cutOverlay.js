import React from "react";

function CutOverlay() {
  return (
    <div className="overlayContainer">
      <div className="water4OverlayContainer">
        <div
          className="overlay1"
          onClick={() => {
            handleClick("overlay1");
          }}
        >
          <div className="exit">
            <button
              className="overlayExit"
              onClick={() => {
                cActiveOverlay(null);
              }}
            >
              X
            </button>
          </div>
          {flipped === "overlay1" ? (
            <div className="flipped">
              {" "}
              <div className="overlayHeader flippedHeader">
                ARITSUGU Deba Blue Steel Fillet Kitchen Japanese Chef Knife 135
                mm 5.31" AT018s Engraved Name Saya Cover
              </div>
              <div className="overlayDescription flippedDescription">
                This is a Deba knife. It is made not only stainless steels and
                ceramics, but also Aoko (Blue steel #2). It is made of Japanese
                swords (Samurai Katana) technique for a long time, then it
                feature tough and sharpness. Deba is also used in both cleaning
                and preparing chicken and fish. This is the most popular knife
                in Japan. It has a wide blade and is stronger than any other
                knives. It can be used to cut fish like a salmon. It is
                recommended for a restaurants which serve fish and meat.
              </div>
              <div className="tag flippedTag">$274.00</div>
              <div className="flippedTable">
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Brand</div>
                  <div className="col flippedColContent">Tsukiji ARITSUGU</div>
                </div>

                <div className="row flippedRow">
                  <div className="col flippedColHeader">Type</div>
                  <div className="col flippedColContent">
                    {" "}
                    Japanese style Gyuto A
                  </div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Use</div>
                  <div className="col flippedColContent">
                    Fish, meat and vegetables
                  </div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Edge Angle</div>
                  <div className="col flippedColContent">Single-edged</div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Blade Material</div>
                  <div className="col flippedColContent">AUS-10</div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Bolster material</div>
                  <div className="col flippedColContent">
                    Buffalo-horn bolster
                  </div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Handle material</div>
                  <div className="col flippedColContent">Magnolia</div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Total length</div>
                  <div className="col flippedColContent">
                    Approx 400 mm (15.74")
                  </div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Blade length</div>
                  <div className="col flippedColContent">
                    Approx 240 mm (9.44")
                  </div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Blade width</div>
                  <div className="col flippedColContent">
                    Approx 40 mm (1.57")
                  </div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Blade thickness</div>
                  <div className="col flippedColContent">
                    Approx 2 mm (0.07")
                  </div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">Weight</div>
                  <div className="col flippedColContent">
                    Approx 140 g (4.93 oz)
                  </div>
                </div>
                <div className="row flippedRow">
                  <div className="col flippedColHeader">HRC</div>
                  <div className="col flippedColContent"> 62+-</div>
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
          ) : (
            <div className="overlay1Container">
              <div className="overlayImg">img</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CutOverlay;
