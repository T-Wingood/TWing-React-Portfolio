import Footer from "./Footer";
import Header from "./Header";
import resumePhoto from "../Media/resume-photo.jpg"
import resumePDF from "../Media/Resume.pdf"
import "../CSS/experience.css"

const Experience = (props) => {
    return ( 
    <>
    <h1 class= "center fontone">Professional Experience </h1>
    <h3 class= "center fontone">Click below to download Resume</h3>
    <div>
    <a id = "resume-photo" class= "center" href={resumePDF} download>
        <img src= {resumePhoto} alt = "Resume Screenshot"></img></a>
    </div>
    </> );
}
 
export default Experience;