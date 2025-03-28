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
      <span className="header">HEADER</span>
      <span className="subheader">SUBHEADER</span>
      <span className="main-content">MAINCONTENT</span>
      <div className="grid-container">
        <div className="grid">grid</div>
        <img className="grid" src="/public/r2.jpg" alt="" />
        <img className="grid" src="/public/r2d2-grid.jpeg" alt="" />
        <div className="grid">grid</div>
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
