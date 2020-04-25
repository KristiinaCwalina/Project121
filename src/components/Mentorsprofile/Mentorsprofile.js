import React, { Component } from "react";



class Mentorsprofile extends Component {
    MentorDetails = {
        name: "Test Mentor",
        skills: "HTML/CSS",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    render(){
    return (
       <div>
       <nav className= "navbar navbar-expand-md navbar-light bg-light sticky-top">
       <a href="/" className="fa fa-home btn-lg"></a>
       </nav>
 <div className="profileContainer">
       <div className="container-fluid well span6">
	<div className="row-fluid">
        <div className="span2" >
		    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2PNJRuzk7SnUuq7OuOq77LQXU28j1YmyHS7FmgdYRfMg85rK&usqp=CAU" className="img-circle"/>
        </div>
        
        <div className="span8">
            <h3>{this.MentorDetails.name}</h3>
           
            <span><strong>Skills: </strong></span>
            <span className="label label-default">{this.MentorDetails.skills}</span>  
        </div>
</div>
</div>  
<div className="container-fluid padding">
           <div className="container counter-section">
               <div className="row text-center">
                   <div className="col-md-3 counter-box">
                       <div className="icon-box"></div>
                       <p className="counter">0</p>
                       <p>STUDENTS</p>
               </div>
               <div className="col-md-3 counter-box">
                       <div className="icon-box"></div>
                       <p className="counter">0</p>
                       <p>CLASSES</p>
           </div>
           <div className="col-md-3 counter-box">
                       <div className="icon-box"></div>
                       <p className="counter">0</p>
                       <p>HOURS</p>
       </div>
       </div>
       </div>
       </div> 
<center>
    <p className="text-left"><strong>Bio: </strong><br/>
    {this.MentorDetails.bio}</p>
      <br/>
      </center>   
   
</div>
</div>
         
 

);
  }
}
  
  export default Mentorsprofile;