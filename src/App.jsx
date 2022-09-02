import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import About from './Components/About';
import { Routes, Route, NavLink} from "react-router-dom"
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
  <>
  <NavBar/>
  <Routes>
        <Route path = "/Home" element = {<Home/>} />
        <Route path = "/About" element = {<About/>} />
        <Route path = "/Portfolio" element = {<Portfolio/>} />
        <Route path = "/Skills" element = {<Skills/>} />
        <Route path = "/Experience" element = {<Experience/>} />
        <Route path = "/Contact" element = {<Contact/>} />
    </Routes>
  <Footer/>

  <br/>
  

    </> 
  );
}

export default App;

