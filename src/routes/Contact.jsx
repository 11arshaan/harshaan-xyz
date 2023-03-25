import "./Contact.scss";
import "./Home.scss"
import resume from "../assets/Harshaan Singh Resume.pdf";

import { useRef } from "react";
import { ReactComponent as IGIcon } from "../assets/svg/ig_icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter_icon.svg";
import { ReactComponent as DribbbleIcon } from "../assets/svg/dribbble_icon.svg";
import { ReactComponent as LinkedInIcon } from "../assets/svg/linkedin_icon.svg";
import { ReactComponent as EmailIcon } from "../assets/svg/email_icon.svg";
import { ReactComponent as PhoneIcon } from "../assets/svg/phone_icon.svg";

import anime from "animejs";


function copyClipboard(e) {
    navigator.clipboard.writeText(e.target.innerText);
    const tl = anime.timeline();
    tl.add({
        targets: '.contact span',
        opacity: 1,
        translateY: -7,
        duration: 600,
        endDelay: 600,
        easing: "easeInOutQuad"
    })
    .add({
        targets: '.contact span',
        opacity: 0,
        translateY: -11,
        duration: 600,
        easing: "easeInOutQuad"
    })
    .add({
        targets: '.contact span',
        translateY:0
    });

}

export default function Contact() {
    const copyRef = useRef();
 
    

    

   

  return (
    <div className="contact">
        
        <div className="contact__links">
        <div className="contact__link"><IGIcon /> <a href="https://www.instagram.com/11arshaan/" rel="noreferrer" target="_blank">@11arshaan</a></div>
        <div className="contact__link"><TwitterIcon /> <a href="https://twitter.com/11arshaan" rel="noreferrer" target="_blank">@11arshaan</a></div>
        <div className="contact__link"><DribbbleIcon /> <a href="https://dribbble.com/11arshaan" rel="noreferrer" target="_blank">@11arshaan</a></div>
        <div className="contact__link"><LinkedInIcon className="linkedin" /> <a id="linkedin" href="https://www.linkedin.com/in/harshaan/" rel="noreferrer" target="_blank">/ 11arshaan</a></div>
        <div className="contact__link"><EmailIcon /> <p onClick={copyClipboard} id="email">harshaan.work@gmail.com</p> <span id="copied" ref={copyRef}>Copied!</span></div>
        <div className="contact__link"><PhoneIcon /> <p >770 769 5348</p></div>
        <div className="resumebtn">
            <a href={resume} download="Harshaan Singh Resume.pdf">
            <button className="home__resume">
              Resume
            </button>
          </a>
        </div>
        </div>

        
      
    </div>
  );
}
