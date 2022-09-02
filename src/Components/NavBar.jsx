import { Routes, Route, NavLink} from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const NavBar = (props) => {
    let activeStyle = {color: "red"}
    let inActiveStyle = {textDecoration: "none"}
    return ( 
    <>
    <nav id="top-nav-bar">
        <ul className="site-links" style={{listStyleType : "none"}}>
            <li className="upper-left-link">
                <NavLink to = "/About" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>About</NavLink></li>
            <li className="upper-left-link">
                <NavLink to = "/Portfolio" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Portfolio</NavLink>
            </li>
            <li className="upper-left-link">
                <NavLink to = "/Skills" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Skills</NavLink>
            </li>
            <li className="upper-left-link">
                <NavLink to = "/Experience" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Experience</NavLink>
            </li>
            <li className="upper-left-link">
                <NavLink to = "/Contact" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Contact</NavLink>
            </li>
        </ul>
    </nav>

    <Routes>
        <Route path = "/About" element = {<About/>} />
        <Route path = "/Portfolio" element = {<Portfolio/>} />
        <Route path = "/Skills" element = {<Skills/>} />
        <Route path = "/Experience" element = {<Experience/>} />
        <Route path = "/Contact" element = {<Contact/>} />
    </Routes>
    </> 
    );
}
 
export default NavBar;