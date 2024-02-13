import { NavLink } from 'react-router-dom'
import './mobileNav.css'

const MobileNav = ({isOpen , toggleMenu}) => {
    return (
        <>
          <div
          className={`mobile-menu ${isOpen ? "active": ""}`}
          onClick={toggleMenu}
          >
            <div className="mobile-menu-container">
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
            </div>
           </div> 

         
        </>
    );
}

export default MobileNav;