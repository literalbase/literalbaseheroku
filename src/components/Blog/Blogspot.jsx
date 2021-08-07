import { Avatar, Button, } from "@material-ui/core";
import "./blogspot.scss";

export default function Blogspot() {
    const data = [
           {
               id:1,
               img :"https://www.nicepng.com/png/detail/222-2224705_react-js-logo.png",
               title :"Learn React.js",
               desc: "React.js is a javascript framework......."

           }
           ,
           {
            id:2,
            img :"https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
            title :"Web design",
            desc: "How Web design can boost your sales..."

        }
        ,  {
            id:3,
            img :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3i1EgaXh946H-bAy5g6jgbOsMAbKgNzohA&usqp=CAU",
            title :"Landing Pages",
            desc: "Usefulness  of Landing Pages and its effect on your business...."

        }
        ,  {
            id:4,
            img :"https://newphase.com/wp-content/uploads/2020/12/SEO.jpg",
            title :"SEO",
            desc: "Make your website rank on google...."

        }

    ]
    return (
        <div className = "blogspot" id = "blogspot">
           <h1>Read blog post</h1>
           <div className = "Buttons">
           <Button color = "primary" >React</Button>
           <Button color = "primary" >Web Design</Button>
           <Button color = "primary" >SEO</Button>
           <Button color = "primary" >LANDING PAGES</Button>
           </div>
           <hr/>
           <Avatar  className = "avatar" >
           <img src = "assets/me.jpg" alt = ""/>
           </Avatar>
           <Button><a href = "https://www.instagram.com/literalreact/">FOLLOW</a></Button>
           
           {data.map((d) =>( 

           <div className = "card">
                  <img src = {d.img} alt = "" />  
                  <h2>{d.title}</h2> 
                  <p>{d.desc}</p>
                  <Button> <a href = "#a">Read more</a></Button>
           </div>
           ))}

        </div>
    )
}
