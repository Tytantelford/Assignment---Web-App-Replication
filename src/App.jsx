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
      <div className="logo">LOGO</div>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <div className="logo">LOGO</div>
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
        <div className="grid">grid</div>
        <img className="grid" src="/public/r2.jpg" alt="" />
        <img className="grid" src="/public/r2d2-grid.jpeg" alt="" />
        <div className="grid">
          R2-D2 often hides in tall grass, using his small size to stay
          unnoticed, quietly observing and waiting for action.
        </div>
      </div>
      <div className="main-content-bottom">MAIN CONTENT</div>
      <button className="button-main"></button>
      <div className="icons">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faTiktok} />
      </div>
      <div className="copyright">copyright</div>
    </div>
  );
}

function App() {
  console.log("working");
  return (
    <>
      <Main />
      <LeftSide />
    </>
  );
}

export default App;
