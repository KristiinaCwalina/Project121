import React from "react";



function Counter() {
    return (
       <div className="container-fluid padding">
           <div className="container counter-section">
               <div className="row text-center">
                   <div className="col-md-3 counter-box">
                       <div className="icon-box"></div>
                       <p className="counter">0</p>
                       <p>MENTORS</p>
                   </div>
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
    );
  }
  
  export default Counter;