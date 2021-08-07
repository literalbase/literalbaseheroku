import "./portfolio.scss"
import { useState } from "react"
import Topdisplay from '../Topdisplay/Topdisplay';

export default function Portfolio() {
    const [currentSlide,setCurrentSlide] = useState(0);
const data = [
    {
        id: "1",
        icon: "./assets/globe.png",
        title: "Web Design",
        desc:
        "A freelancer portfolio website using react.js ",
        img : "assets/freelance.png" ,
        
    },
    {
        id: "2",
        title: "React libraries",
        icon: "./assets/mobile.png",
        desc:
          "A portfolio website  using  libraries",
          img : "assets/portfolio.png"
      },
      {
        id: "3",
        icon: "./assets/finger.png",
        title: "Branding",
        desc:
          "online branding",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
];

const handleClick = (way) =>{
     way === "left" 
     ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2):
     setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
}

    return (
        <div className = "portfolio" id = "portfolio">
            <div className = "slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (<div className = "container">
                    <div className = "item">
                        <div className = "left">
                            <div className = "leftContainer">
                                <div className = "imgContainer">
                                    <img src = {d.icon} alt = ""/> 
                                </div>
                                <h2>{d.title}</h2>
                                 <p>{d.desc}</p>
                                 <span>Projects</span>
                            </div>
                        </div>
                        <div className = "right">
                        <img src = {d.img} alt = "" />
                        </div>
                    </div>
                </div>))}
            </div>
                <img src = "assets/right-arrow.png"  className = "arrow left" alt = "" onClick = {() => handleClick("left")}/>
                <img src = "assets/right-arrow.png"  className = "arrow right" alt = "" onClick = {() => handleClick()}/>
                <Topdisplay className = "cardlist"/>
        </div>
    )
}

    
            