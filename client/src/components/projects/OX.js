import React, { Component } from "react";
// document.getElementById("main")
// import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

class OX extends Component {
  render() {
    return (
      <div><Navbar />
     

     
   
      <div id="stretchFrame">

        <iframe id="magicFrame"
         src="./ox/oxindex.html"
          width="500"
          height="500"
          title="Tic Tac Toe">

        </iframe>
      </div> 
        </div>


    );
  }
}
export default OX;