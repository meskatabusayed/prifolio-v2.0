import { NavLink } from "react-router-dom";
import './navbar.css'
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [openMenu , setOpenMenu] = useState(false);
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };





    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

        <nav className="nav-wrapper">
            <div className="nav-content">
               <h1><span>Meskat</span><br /><span>AbuSayed</span></h1>

               <ul>
                <li>
                    <NavLink className="menu-item">Home</NavLink>
                </li>
                <li>
                    <NavLink className="menu-item">Skills</NavLink>
                </li>
                <li>
                    <NavLink className="menu-item">Work Experience</NavLink>
                </li>
                <li>
                    <NavLink className="menu-item">Contact Me</NavLink>
                </li>
                <button className="contact-btn" onClick={() => {}}>Hire Me</button>
               </ul>
               <button className="menu-btn" onClick={toggleMenu}>
               {openMenu ?  <IoClose /> : <HiMenu /> }

               </button>
            </div>
        </nav>
        </>
    );
};

export default Navbar;