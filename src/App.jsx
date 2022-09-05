import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import About from './Components/About';
import { Routes, Route } from "react-router-dom"
import Portfolio from './Components/Portfolio';
import Interests from './Components/Interests';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
  <>
  <NavBar/>
  <Routes>
  <Route path = "/" element = {<Home/>} />
  </Routes>
  <Routes>
        <Route path = "/Home" element = {<Home/>} />
        <Route path = "/About" element = {<About/>} />
        <Route path = "/Portfolio" element = {<Portfolio/>} />
        <Route path = "/Interests" element = {<Interests/>} />
        <Route path = "/Experience" element = {<Experience/>} />
        <Route path = "/Contact" element = {<Contact/>} />
    </Routes>
  <Footer/>

  <br/>
  

    </> 
  );
}

export default App;

