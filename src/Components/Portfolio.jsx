import "../CSS/portfolio.css"
import Jeopardy from "../Media/Jeopardy-Logo.jpg"

const Portfolio = (props) => {
    return ( 
    <>
    <h2 class = "fontone">Current and Previous Projects</h2>
    <br/>
    <wrapper class="wrapper">
        <ul>
            <li className="port-box1">
                <a href="https://github.com/burlingtoncodeacademy-students/jeopardy-board-T-Wingood.git"><img src={Jeopardy} style={{height:"15em", width:"25em"}}></img></a>
                <h4>Jeopardy Gameboard</h4>
            </li>
            <li className="port-box2"></li>
            <li className="port-box3"></li>
        </ul>
    </wrapper>


    </> );
}
 
export default Portfolio;