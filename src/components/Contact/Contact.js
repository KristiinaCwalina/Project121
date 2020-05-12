import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="container-fluid padding">
            <div className="row text-center padding">
                <div className="col-12">
                    <h2 className="display-4">Want to become a mentor?</h2>
                    <Link to="/contact"><button type="button" className="btn btn-light btn-lg">CONTACT US</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;