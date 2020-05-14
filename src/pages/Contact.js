import React from "react";
import '../pages/Contact.css';
function ContactPage() {
    return (
        <div className="ContactForm">
            <div className="contact-title">
                <h1>Contact us</h1>
            </div>
            <div className="contactForm">
                <form id="contactForm" method="post" action="">
                    <input name="name" type="text" className="formControl" placeholder="Your name" required /><br />

                    <input name="email" type="text" className="formControl" placeholder="Your email" required /><br />
                    <textarea name="massage" className="formControl" placeholder="Message" rows="4" required></textarea><br />

                    <input type="submit" className="formControlSubmit" value="SEND MESSAGE" />
                </form>
            </div>
        </div>);

}
export default ContactPage;