import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons";

export default function topbar({menuOpen,setMenuOpen}) {
    return (
        <div className = {"topbar " +(menuOpen && "active")}>
            <div className = "wrapper">
              <div className = "left">
               <a href = "#intro" className = "logo">LITERAL<span>BASE</span></a>
               <div className ="itemContainer">
                 <Person className = "icon"/>
                 <span> +234-81-61744540</span>
               </div>
               <div className ="itemContainer">
                   <Mail className = "icon"/>
                   <span>literalbase@gmail.com</span>
               </div>
               </div>
              <div className = "right">
              <div className = "hamburger" onClick = {() => setMenuOpen(!menuOpen)}>
                  <span className = "line1"></span>
                  <span className = "line2"></span>
                  <span className = "line3"></span>
              </div>
               </div>
           </div>
        </div>
    )
}
