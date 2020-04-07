import React from "react";
import './Carousel.css'


function Carousel() {
    return (
        <div className="container-fluid padding">
        <div id="slides" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#slides" data-slide-to="0" className="active"></li>
                <li data-target="#slides" data-slide-to="1"></li>
                <li data-target="#slides" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="item active">
                    <img src="https://www.solidbackgrounds.com/images/4096x2304/4096x2304-light-steel-blue-solid-color-background.jpg" className="d-block w-100" alt="carousel background"/>
                <div className="carousel-caption">
                    <h1 className="text-dark">Welcome to Migracode 1-2-1</h1>
                    <h6 className="font-italic text-dark">Migracode 1-2-1 is an easy web application to manage the lessons given by our team of mentors and classes taken by our students</h6> 
               <button type="button" className="btn btn-outline-light btn-lg">Read more</button>
                </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.solidbackgrounds.com/images/4096x2304/4096x2304-italian-sky-blue-solid-color-background.jpg" className="d-block w-100" alt="solid blue background"/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.solidbackgrounds.com/images/4096x2304/4096x2304-salmon-pink-solid-color-background.jpg" className="d-block w-100" alt="salmon pink solid background"/>
                </div>
            </div>
            <a className="left carousel-control" href="#slides" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a className="right carousel-control" href="#slides" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
              </a>
        </div>
        </div>
    );
  }
  
  export default Carousel;