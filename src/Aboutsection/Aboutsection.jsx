import Sideimage from "../assets/about-background.png"
import "./Aboutsection.css"
import Sideimage2 from "../assets/foodbowlimage2.png"
import { FaPlay } from "react-icons/fa";

function aboutsection(){


    return(<div>


            <div className="sideimage">

           <img src={Sideimage} ></img>
           
            </div>

           <div className="foodimage2">
            
            <img src={Sideimage2}></img>
            
            </div>

            <div className="aboutsectioncontainer">

                <h3>About</h3>
                <h1>Food Is An Important Part Of A Balanced Diet</h1>
                <p className="p1">Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
                <p className="p2">Non tincidunt magna non et elit. Dolor turpis molestie 
                dui magnis facilisis at fringilla quam.</p>
                    
                    <div className="aboutsectioncontainerCTA">
                    <button className="aboutsectioncontainerCTA1">Learn more</button>
                    <button className="aboutsectioncontainerCTA2"><FaPlay className="play"/></button>
                    </div>
                    <h4 className="watchvideo">Watch Video</h4>

                
            </div>
           
           
    </div>)

}

export default aboutsection;