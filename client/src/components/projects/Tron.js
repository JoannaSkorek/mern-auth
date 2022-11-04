import React, { Component } from "react";
// document.getElementById("main")
// import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

class Tron extends Component {
  render() {
    return (
      <div><Navbar />
     

     
   
      <div id="stretchFrame">

        <iframe id="magicFrame"
         src="./tron/tronindex.html"
          width="900"
          height="900"
          title="Tron">

        </iframe>
      </div> 
        </div>
        


    );
  }
}
export default Tron;
// document.getElementById ('someDiv').tronindex.html
// "http://127.0.0.1:5501/index.html" 
// "~/src/components/projects/tronindex.html"
// "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
// id="magicFrame" 
// Link.render(<Tron />, document.getElementById("TRON"));