import "./Testimonalsection.css"
import Myimage from "../assets/mypic2.png"
import { MdOutlineStar } from "react-icons/md";

function testimonalsection(){


    return(
    
    <div className="Testimonalsec">
    <div className="testimonalsection">
                   
              <div className="testimonalsectioncontainer1">

             <h3>Testimonal</h3>
             <h1>What They are Saying</h1>
             <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui <br></br> magnis facilisis at fringilla quam.</p>

              </div>

              <div className="testimonalsectioncontainer2">

                <img src={Myimage}></img>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                <br></br>magna    non et elit. Dolor  turpis molestie dui Lorem, ipsum dolor.
magnis facilisis at fringilla quam.</p>

                <icon><MdOutlineStar /></icon>
                <icon><MdOutlineStar /></icon>
                <icon><MdOutlineStar /></icon>
                <icon><MdOutlineStar /></icon>
                <icon><MdOutlineStar /></icon>

                <h3>Prabu G</h3>


               

              </div>
             



    </div>

    </div>
    


)

}

export default testimonalsection;