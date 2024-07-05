import "./Worksection.css"
import image1 from "../assets/image3.png"
import image2 from "../assets/image1.png"
import image3 from "../assets/image2.png"

function worksection(){


    return(<><div className="worksection">


        <div className="worksectioncon">

    <div className="worksectioncontainer1">

        <h3>Work</h3>
        <h1>How it Works</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt  magna non et elit. Dolor  turpis molestie dui magnis<br></br> facilisis at fringilla quam.</p>

    </div>

    <div className="worksectioncontainer2">

    <div className="containerbox1">

        <img src={image1}></img>
        <h2>Pick Meals</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci</p>
        

</div>

<div className="containerbox2">

<img src={image3}></img>
<h2>Fast Delivery</h2>
<p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>


</div>

<div className="containerbox3">
<img src={image2}></img>
<h2>Choose How</h2>
<p>Lorem ipsum dolor sit it<br></br> amet consectetur it. Maecenas orci </p>


</div>

    </div>

    



    </div>

    
    </div>

   
    </>

    
    



)

    


}

export default worksection;