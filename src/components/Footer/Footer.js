import React from "react";
import './Footer.css';


function Footer() {
    return (
        <div className="container-fluid padding">
        <div className="row text-center">
            <div className="col-md-4">
                <p>Migracode Barcelona</p>
                <p>barcelona@migracode.org</p>
                <p>+34 634268385</p>
                <a href="https://g.page/migracode-barcelona?share">Show on map</a>           
             </div>
         </div>
         <div className="container-fluid padding">
             <div className="col-12 social text-center"> 
                 <a href="https://gsuite.google.com/"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                 <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                 <a href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                 <a href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
             </div> 
             <div className="col-12">
                 <hr className="dark"/>
             </div>
                 <div className="row footer-bottom">
                     <p>About</p>
                     <p>Terms and conditions</p>
                     <p>&copy; 2020 by Migracode Barcelona</p>
 </div>   
    </div>
    </div>
    );
  }
  
  export default Footer;