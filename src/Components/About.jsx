import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route, NavLink} from "react-router-dom"
const About = (props) => {
    return (
    <>
    <h1>About Me</h1>
    <p>Naturally curious and driven to challenges, my journey into tech started later in life. My professional passions include change management, process improvement, and providing solutions to difficult problems. This originally led me to a career in healthcare where I worked as Pharmacist in an industry setting. </p>
    <br/>
    <p>Personally, I love travelling, exploring, learning, and meeting new people. My home is in Vermont where I partake in hiking, trail running, biking, and back-country skiing. I have also travelled across the world whether it is hiking to Mount Everest basecamp or exploring one of the most southern cities of the world, Ushuaia, Argentina. </p>
        <div>
        <img src="./Media/Mount-Everest.jpg"/>
        </div>
    <br/>
    <p>This love for exploring and the drive to solve difficult problems have led me to pursuing a new life in tech and software engineering, where I can bring forward of the skills learned in my previous career while being free to experience the world.  </p>

    <Routes>
        <Route path = "/About" element = {<About/>} />
    </Routes>


    </> );
}
 
export default About;