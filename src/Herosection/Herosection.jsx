import "./Herosection.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import heroImage from '../../src/assets/sidedesign.png';
import foodimage from "../../src/assets/foodbowlimage.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'





function herosection(){


    return(<div className="heroSection">

        <div className="navbar">

            <div className="logo">
                
                 <h2>FOODIE</h2>
            </div>

        <nav className="navbarelement">

       

            
            <a>Home</a>
            <a>About</a>
            <a>Testimonal</a>
            <a>Contacts</a>
            <p> <MdOutlineShoppingCart /></p>
            <button className="navbarcta">Booking Now</button>
            
        </nav>



        </div>

       
       

        <div className="heroimage"><img  src={heroImage}></img></div>
        <div className="foodbowlimage"><img src={foodimage}></img></div>


<div className="herosectioncontainer">
    <h1 className="containerheading">Your Favourite Food Delivered Hot & <br />Fresh</h1>
    <p>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>
     <button className="containerCTA">Order Now <FaArrowRightLong /></button>
</div>


        


    </div>);


}

export default herosection;