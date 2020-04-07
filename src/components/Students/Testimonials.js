import React from "react";
import './Students.css';


function Testimonials() {
    return (
        <div className="container-fluid padding">
        <div className="row text-center padding">
            <div className="col-12">
                <h2 className="display-4">What our students are saying</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque iste ad eius adipisci ipsum dolor, maiores maxime! Velit magnam consequatur fugiat rerum omnis ex ipsam accusantium non amet tempora?</p>
            </div>
        </div>
    
    
        <div className="row padding">
            <div className="col-md-4">
                    <div className="img-top" style={{display: "flex", justifyContent: "center"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2PNJRuzk7SnUuq7OuOq77LQXU28j1YmyHS7FmgdYRfMg85rK&usqp=CAU" alt="default profile placeholder" className="profile-pic"/>
                    </div>
                    <h5 className="card-title">Student One</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae minus quo suscipit, ab asperiores, dolores, autem consectetur dolorum cumque eius modi. Unde impedit magnam ratione incidunt laborum provident nemo!</p>
                </div>
                <div className="col-md-4">
                    <div className="img-top" style={{display: "flex", justifyContent: "center"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2PNJRuzk7SnUuq7OuOq77LQXU28j1YmyHS7FmgdYRfMg85rK&usqp=CAU" alt="default profile placeholder" className="profile-pic"/>
                    </div>
                    <h5 className="card-title">Student Two</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti velit adipisci. Exercitationem, quo similique. Asperiores harum illum expedita optio minima error quis officia nulla! Ipsum velit magni quas nemo?</p>
                </div>
                <div className="col-md-4">
                    <div className="img-top" style={{display: "flex", justifyContent: "center"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2PNJRuzk7SnUuq7OuOq77LQXU28j1YmyHS7FmgdYRfMg85rK&usqp=CAU" alt="default profile placeholder"className="profile-pic"/>
                    </div>
                    <h5 className="card-title">Student Three</h5>
                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur accusantium aliquid, quisquam perspiciatis quis omnis illo eveniet mollitia! Dolor quos nemo omnis sit quidem repudiandae eaque iusto dolorum officiis explicabo.</p>
                </div>
        </div>
    
        </div>
     
    );
  }
  
  export default Testimonials;