import React from "react";
import './Mentorsprofile.css'


function Mentorsprofile() {
    return (
        <div className="container fluid">
       <nav className= "navbar navbar-expand-md navbar-light bg-light sticky-top">
           <h2 className="greeting">Meet your Mentor</h2>
       </nav>
       <div className="container fluid">
       <div className="fb-profile">
           <img align="left" className="fb-image-lg" src="https://www.solidbackgrounds.com/images/4096x2304/4096x2304-light-steel-blue-solid-color-background.jpg" alt="Profile image example"/>
           <img align="left" className="fb-image-profile thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2PNJRuzk7SnUuq7OuOq77LQXU28j1YmyHS7FmgdYRfMg85rK&usqp=CAU" alt="Profile image example"/>
           <div className="fb-profile-text">
               <h3>MENTOR ONE</h3>
               <p>Software engineer</p>
           </div>
       </div>
   </div>
   </div>
    );
  }
  
  export default Mentorsprofile;