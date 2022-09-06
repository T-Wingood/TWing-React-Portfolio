import Footer from "./Footer";
import Header from "./Header";
import photo from "../Media/diving_picture.jpg"
import "../CSS/interests.css"

const Interests = (props) => {
    return ( 
    <>
    <h2 class = "fontone">Interests and Hobbies </h2>
    <div class ="interest-grid">
        <p class = "fontone">I love traveling, exploring, and experiencing life. I actively pursue knowledge and push my boundaries physically, mentally, and emotionally. I enjoy spending time with my family, learning new skills, coming up with fun app ideas, website designs, or business prospects, and bringing people together. Highlights of my experiences have included helicopter boarding in British Columbia, Scuba diving in Bali, hiking throughout Patagonia, competing in a full ironman competition.</p>
        <img class="interest-photo" src={photo}/>
    </div>

    </> );
}
 
export default Interests;