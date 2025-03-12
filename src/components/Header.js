import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';



 const Header = () => {
    const[btnNameReact,setBtnNameReact] = useState("login");
 
    // NOTE: In useEffect hooks  dependency array is necessary, if not, useEffect will be called after every   render of component  
    // if dependency array is empty =[], useEffect called on initial render(just once)
     // if dependency array is btnNameReact, useEffect called everytime btnName  is updated
useEffect(()=>{
  console.log("usseEffect called");
},[btnNameReact]);

    return(
        <div className = "header_container">

        <div className ="logo_container">
        <img className="logo" src ={LOGO_URL}  />
        </div>

        <div className ="nav-items">
         <ul>
            <li>
            <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login" 
            onClick={ () => {
                btnNameReact === "login"?setBtnNameReact("Logout"):setBtnNameReact("login");
            }}
            >{btnNameReact}</button>
         </ul>
        </div>

        </div>
    );
};

export default Header;