//Importing components

import Contact from "./components/contact/Contact";
import Inrto from "./components/into/Intro"
import Portfolio from "./components/portfolio/Portfolio";
import Blogspot from "./components/Blog/Blogspot";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu"
// importing app.css file
import "./app.scss"
import {useState} from "react"



function App() {
const [ menuOpen,setMenuOpen ] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>

      <Menu   menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className = "sections">  
      <Inrto />
      <Portfolio />
      <Blogspot/>
      <Contact  />
    


      </div>
    </div>
  );
}

export default App;
