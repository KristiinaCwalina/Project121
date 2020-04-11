import React from "react";


function ContactPage() {
    return (
        <div className="ContactFrom">
            <div class="contact-title">
                <h1>Contacts us</h1>
                <h2>we are always ready to contact you!</h2>
            </div>
            <div class="contact-from">
                <form id="contact-from" method="post" action="">
                    <input name="name" type="text" class="from-control" placeholder="Your name..." required /><br />

                    <input name="email" type="text" class="from-control" placeholder="Your email..." required /><br />
                    <textarea name="massage" class="from-control" placeholder="Message.." rows="4" required></textarea><br />

                    <input type="submit" class="from-control-submit" value="SEND MESSAGE" />
                </form>
            </div>
        </div>);

}
export default ContactPage;