import "./intro.scss"
import {init} from "ityped"
import {useRef,useEffect} from "react"

export default function Intro() {
    
        const textRef = useRef();

useEffect(() => {
    init(textRef.current, { 
        showCursor: true, 
        backDelay:  1500,
        backSpeed: 60,
        strings: ['Web Hosting', 'Web design','Content Creator' ], });
},[]);

    return (
        <div className = "intro" id = "intro">
            <div className = "left">
                <div className = "imgContainer" > 
                
                <img src = "assets/intro.png" alt = "" />
                </div>
            </div>
            <div className = "right">
                <div className = "wrapper">
                    <h2>LITERAL<span>BASE</span></h2>
                     <h1>Offering Digital Services</h1>
                     <h3>Freelance <span ref= {textRef}></span></h3>
                </div>
                <a href = "#portfolio"> 
                <img src = "assets/arrow.png" alt = "" />
                </a>
            </div>

        </div>
    )
}
