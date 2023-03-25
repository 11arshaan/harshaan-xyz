import {useRef} from "react";

export default function ProjectCard({img, title, subtitle, description, link}) {
    const ref = useRef(null);
    
    function readMore() {
        
      
        ref.current.classList.toggle("checked");
      
      }
  return (
    <div className="projectcard">
      <img src={img} alt="a castle build with clouds"></img>
      <h3 className="projectcard__title">{title}</h3>
      <h2 className="projectcard__subtitle">
        {subtitle}
      </h2>

      <div ref={ref} className="projectcard__readmore">
        <input id="collapsible" type="checkbox" />
        <hr></hr>
        <p>
          {description}
        </p>
      </div>

      <div className="projectcard__buttons">
        <label onClick={readMore} htmlFor="collapsible">
          Read More
        </label>
        <a
          className="projectcard__visitsite"
          href={link}
          target="_blank"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}
