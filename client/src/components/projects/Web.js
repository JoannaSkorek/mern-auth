import React, { Component } from "react";
// document.getElementById("main")
// import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

class Web extends Component {
  render() {
    return (
      <div><Navbar />
     

     
   
      <div id="stretchFrame">

        <iframe id="magicFrame"
         src="./compvision/compvision.html"
          width="900"
          height="900"
          title="Web">

        </iframe>
      </div> 
        </div>
        


    );
  }
}
export default Web;
