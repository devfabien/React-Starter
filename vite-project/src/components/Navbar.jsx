import React from "react";
import logo from '../assets/react.svg';

 
function Navbar(){
    return(
        <div className="nav">
<div className="iconDiv">
    <img className="rlogo" src={logo} alt="" srcset="" />
    <h2 className="heada">ReactFacts</h2>
</div>
<div className="course"><h3>React Course - Project1</h3></div>

        </div>
    )
}
export default Navbar