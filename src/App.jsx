import { useState } from "react";
// import "./App.css";
import "./styles/styles.scss";

function LeftSide() {
  return (
    <div className="left-container">
      <div>LOGO</div>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <div>LOGO</div>
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
