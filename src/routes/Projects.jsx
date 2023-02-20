import "./Projects.scss";
import cloudcastle from "../assets/images/cloudcastle.png";
import { useEffect } from "react";
import anime from "animejs";

function readMore(e) {
  const readMore = document.querySelector(".projectcard__readmore");

  readMore.classList.toggle("checked");

}

export default function Projects() {
  

  return (
    <div className="projects">
      <div className="projectcard">
        <img src={cloudcastle}></img>
        <h3 className="projectcard__title">Web Design Lab</h3>
        <h2 className="projectcard__subtitle">
          custom components and web graphic experiments
        </h2>

        <div className="projectcard__readmore">
          <input id="collapsible" type="checkbox" />
          <hr></hr>
          <p>
            This is an interactive demo that contains custom components and
            designs. It is hosted on GitHub pages; the source code is written
            for easy re-use via copy/paste. The components are written with
            React.
          </p>
        </div>

        <div className="projectcard__buttons">
          <label onClick={readMore} htmlFor="collapsible">Read More</label>
          <button>Visit Site</button>
        </div>
      </div>
    </div>
  );
}
