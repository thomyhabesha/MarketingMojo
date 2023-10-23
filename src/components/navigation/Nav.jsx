import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Routes,Route,Link} from "react-router-dom";
import Logo from '../img/Our_logo-removebg-preview.png'
import User from '../img/download-removebg-preview.png'
import './Nav.css'

export default function Nav(){
    const [active,setactive]=useState("nav_menu");
    const [toggleIcon,setToggleIcon]=useState("nav_toggler")

    const navToggle=()=>{
        active==="nav_menu"? setactive("nav_menu nav_active"):setactive("nav_menu")
    toggleIcon==="nav_toggler"?setToggleIcon("nav_toggler toggle"):setToggleIcon("nav_toggler")
    }
    return(
        <nav className="nav">
           <a href="/" className='a_img'> <img src={Logo}  alt="" className='headerlogo'/></a>
            <ul className={active}>
               

               
                <li className='nav_items'><a href="/" className='nav_link'>Home</a></li>
                <li className='nav_items'><a href="/Service" className='nav_link'>Service</a></li>
                <li className='nav_items'><a href="/Aboutuspage" className='nav_link'>About</a></li>
                
                </ul>
                

               
                <div onClick={navToggle} className={toggleIcon}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>

                </div>
                
        </nav>
    )
}