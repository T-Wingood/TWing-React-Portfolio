import { NavLink} from "react-router-dom"


const NavBar = (props) => {
    let activeStyle = {color: "red"}
    let inActiveStyle = {textDecoration: "none"}
    return ( 
    <>
    <nav id="top-nav-bar">
        <ul className="site-links" style={{listStyleType : "none", justifyContent : "right", display:"flex", margin:"2em", backgroundColor:"beige", margin:"0", padding:"2em"}} >
            <li className="upper-left-link" style = {{padding:"1em"}}>
                <NavLink to = "/Home" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Home</NavLink>
            </li>
            <li className="upper-left-link" style = {{padding:"1em"}}>
                <NavLink to = "/About" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>About</NavLink></li>
            <li className="upper-left-link" style = {{padding:"1em"}}>
                <NavLink to = "/Portfolio" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Portfolio</NavLink>
            </li>
            <li className="upper-left-link" style = {{padding:"1em"}}>
                <NavLink to = "/Interests" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Interests</NavLink>
            </li>
            <li className="upper-left-link" style = {{padding:"1em"}}>
                <NavLink to = "/Experience" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Experience</NavLink>
            </li>
            <li className="upper-left-link" style = {{padding:"1em"}}>
                <NavLink to = "/Contact" style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle}>Contact</NavLink>
            </li>
        </ul>
    </nav>
    </> 
    );
}
 
export default NavBar;