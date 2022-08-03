import React from "react";
import "../styles/contacts.css";

function Contacts(){
    return(
        <div class="contact-section" id="contact">
        <h1 class="section-heading">Contact us</h1>
        <div class="contact-details-box">
        <div class="contact-address">
            <img src="./media/location.png" class="location-image" alt="location"></img>
            <h3 class="testimonial-heading address-title">Address</h3>
            <p class="contact-section-para">
                XYZ City, New Delhi<br></br>
                Pincode- Ax0012
            </p>
        </div>

        <div class="contact-emails">
            <img src="./media/email.png" class="location-image email-image" alt="email"></img>
            <h3 class="testimonial-heading address-title">Email Us</h3>
            <p class="contact-section-para">
                piyush@piyushuniversity.com<br></br>
                contact@piyushuniversity.com
            </p>
        </div>

        <div class="contact-emails contact-social">
            <img src="./media/social.png" class="location-image email-image" alt="Social Media Handles"></img>
            <h3 class="testimonial-heading address-title">Social Media</h3>
            <p class="contact-section-para">
               <a href="https://www.instagram.com"><img class="location-image social-img" alt="instagram" src="./media/ig.png"></img></a>
               <a href="https://www.twitter.com"><img class="location-image social-img" alt="twitter" src="./media/tw.png"></img></a>
               <a href="https://www.linkedin.com"><img class="location-image social-img" alt="linkedin" src="./media/li.png"></img></a>
            
            </p>
        </div>
    </div>
        </div>
    );
}

export default Contacts;