import React from "react";



function Nav() {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#"></button>
              <span className="navbar-toggler-icon"></span>  
             
             
      <ul className="nav-item">
        <a className="nav-link" href="/login">LOG IN </a>
        <a className="nav-link" href="/sign-up">SIGN UP </a>
      </ul>
           </div>
  
    </nav>
    );
  }
  
  export default Nav;