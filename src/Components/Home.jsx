import "../CSS/home.css"
import picture from "../Media/Home_Page_Photo.jpg"
const Home = (props) => {
    return ( 
    <>
    <h1 class="home fontone">Tyler Wingood</h1>
    <h4 class="home fontone">Passionate and Driven. Curious and Unique</h4>
    <div class="home-image">
    <img id="home-picture"src={picture}/>
    </div>

    </> );
}
 
export default Home;