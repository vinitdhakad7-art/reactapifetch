import React from 'react'
import "./Navbar.css"
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo"><h1 style={{color:"orange", marginTop:"10px", fontSize:"35px",textShadow:"3px 5px 5px black", backgroundColor:""}}>S𝓱ₒ𝐩<span style={{color:"red"}}>ₑₐ𝘴y</span></h1></div>
        <div className="searchbar"><p className='p1'><IoIosSearch style={{ width: "25px", height: "30px" }} /></p> <input type="text" placeholder='Search for product brand and more' id='srh' /> 
          <button>Search</button>
        </div>
          

        <p className='p2'><SlLocationPin />
        </p>
        <div className='login'><a href="">Login/SignUp </a><span> <CgProfile className='profile' /></span> <p className='p3'><FaCartPlus /></p></div>
    </nav>

    </div>
  )
}

export default Navbar