import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import gallery1 from "../img/gallery/1.jpg";
import gallery2 from "../img/gallery/2.jpg";
import gallery3 from "../img/gallery/3.jpg";
import gallery4 from "../img/gallery/4.jpg";
import gallery5 from "../img/gallery/5.jpg";
import gallery6 from "../img/gallery/6.jpg";
import gallery7 from "../img/gallery/7.jpg";
import gallery8 from "../img/gallery/8.jpg";
import gallery9 from "../img/gallery/9.jpg";
import gallery10 from "../img/gallery/10.jpg";
import gallery11 from "../img/gallery/11.jpg";
import gallery13 from "../img/gallery/13.jpg";
import gallery14 from "../img/gallery/14.jpg";
import gallery15 from "../img/gallery/15.jpg";
import gallery16 from "../img/gallery/16.webp";
import gallery17 from "../img/gallery/17.webp";
import gallery18 from "../img/gallery/18.webp";
import gallery19 from "../img/gallery/19.jpg";
import gallery20 from "../img/gallery/20.jpg";
import gallery21 from "../img/gallery/21.jpg";
import gallery22 from "../img/gallery/22.jpg";
import gallery23 from "../img/gallery/23.jpg";
import gallery24 from "../img/gallery/24.jpg";
import gallery25 from "../img/gallery/25.jpg";
import gallery26 from "../img/gallery/26.jpg";
import gallery27 from "../img/gallery/27.jpg";
import gallery28 from "../img/gallery/28.jpg";
import gallery29 from "../img/gallery/29.jpg";
import gallery30 from "../img/gallery/30.jpg";
import gallery31 from "../img/gallery/31.jpg";
import gallery34 from "../img/gallery/34.jpg";
import gallery35 from "../img/gallery/35.jpg";
import gallery36 from "../img/gallery/36.jpg";
import gallery37 from "../img/gallery/37.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
];
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: this.props.open,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.props.changeOpened(false)}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
