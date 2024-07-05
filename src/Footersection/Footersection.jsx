import "./Footersection.css"
import { FaTwitter,FaLinkedin,FaYoutube,FaFacebookF } from "react-icons/fa";

function footersection(){


    return(<div><div className="footer">
            
<div className="contactsec">
            <div className="contactsection">

              <div className="contactsection1">
                <h1>Have Question In Mind? <br></br>
                Let Us Help You</h1>
            
                </div>

                <div className="contactsection2">
                <input placeholder="yourmail@gmail.com"></input><br></br>
                <button>Submit</button>
                </div>
                </div>

        
                

            </div>

            <div className="footer2">
                
              <div className="footer2con1">

                <h3>FOODIE</h3>
                
                <div className="icon">
                <a><FaTwitter /></a>
                <a> <FaLinkedin /></a>
                <a> <FaYoutube /></a>
                <a> <FaFacebookF /></a></div>

                


              </div>
              <div className="footer2con2">
               <div>
                <ul>
                    <li>Quality</li>
                    <li>Help</li>
                    <li>Carrer</li>
                    <li>Share</li>
                    <li>Work</li>
                    <li>Testimonals</li>
                </ul>
                </div>

                <div>
                <ul>
                    <li>88 0703 2601</li>
                    <li>prabulapxx@gmail.com</li>
                    <li>prabu@food.com</li>
                    <li>contact@food.com</li>
                
                </ul>
                </div>

                <div>
                <ul>
                    <li>Terms & Conditon</li>
                    <li>Privacy Condition</li>
                   
                </ul>
                </div>


              </div>

            </div>
           
    </div></div>)

}

export default footersection