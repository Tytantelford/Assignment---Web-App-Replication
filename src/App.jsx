import { useState } from "react";
// import "./App.css";
import "./styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function LeftSide() {
  return (
    <div className="left-container">
      <img className="logo-img" src="/public/r2-logo.jpg" alt="" />
      <button>Droids</button>
      <button>Maker</button>
      <button>C3PO</button>
      <button>R2D4</button>
      <button>About</button>
      <img className="logo-img" src="/public/r2-logo.jpg" alt="" />
    </div>
  );
}

function Main() {
  return (
    <div className="main-container">
      <img className="main-img" src="/public/r2d2.jpg" />
      <span className="header">R2D2</span>
      <span className="subheader">
        R2-D2 is a brave and loyal astromech droid, known for his
        resourcefulness and iconic beeps.
      </span>
      <span className="main-content">
        R2-D2 is a small but incredibly skilled droid who has saved the galaxy
        time and time again with his intelligence and bravery. With his trusty
        beeps and whistles, he’s become an iconic symbol of loyalty and
        resourcefulness in the Star Wars universe.
      </span>
      <div className="grid-container">
        <div className="grid">
          R2-D2 is a fearless droid, always ready to help his friends and
          outsmart enemies with his clever tactics.
        </div>
        <img className="grid" src="/public/r2.jpg" alt="" />
        <img className="grid" src="/public/r2d2-grid.jpeg" alt="" />
        <div className="grid">
          R2-D2 often hides in tall grass, using his small size to stay
          unnoticed, quietly observing and waiting for action.
        </div>
      </div>
      <div className="main-content-bottom">
        R2-D2 cleverly hides in tall grass, using his compact size to stay
        hidden while scanning the surroundings and waiting for the perfect
        moment.
      </div>
      <button className="button-main">Click Me!</button>
      {/* <div className="icons">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faTiktok} />
      </div>
      <div className="copyright">
        © 2025 R2-D2 Universe. All rights reserved. Unauthorized droid
        modifications strictly prohibited. Beep-boop approved.
      </div> */}
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faTiktok} />
      </div>
      <div className="copyright">
        © 2025 R2-D2 Universe. All rights reserved. Unauthorized droid
        modifications strictly prohibited. Beep-boop approved.
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Main />
      <LeftSide />
      <Footer />
    </>
  );
}

export default App;
