import React, { Component } from "react";
import { Link } from "react-router-dom";
import tronPic from "./TronImage.png"
import TTPic from "./ox.jpeg"
import ISY from "./i see you.jpeg"
class Project extends Component {
  render() {
    return (
      <div>
        <Link
        to="/tron"
        style={{
          fontFamily: "monospace"
        }}
        className="col s5 brand-logo right black-text"
      >
        TRON
        <img src={tronPic} alt="logo"/>
      </Link>
      <Link
        to="/ox"
        style={{
          fontFamily: "monospace"
        }}
        className="col s5 brand-logo left black-text"
      >
        Tic Tac Toe
        <img src={TTPic} alt="logo"/>
      </Link>
      <Link
        to="/web"
        style={{
          fontFamily: "monospace"
        }}
        className="col s5 brand-logo  centre red-text"
      >
       Webcam
        <img src={ISY} alt="logo"/>
      </Link>
      </div>
    );
  }
}

export default Project;