import "./MobileNavbar.scss";
import { ReactComponent as Logo } from "../assets/svg/sunlogo.svg";
import { Link } from "react-router-dom";
import useRainbow from "../utils/useRainbow";
import { useRef } from "react";

export default function MobileNavbar() {
  const transitionDelay = 8000;
  const colors = useRainbow(transitionDelay);
  const colorKeys = Object.keys(colors);
  const ref = useRef();

  const rainbowStyle = {
    // Spread the colors to define them as custom properties
    // on this element
    ...colors,
    // Use the keys to set the same transition on all props.
    transition: `
    ${colorKeys[0]} ${transitionDelay}ms linear,
    ${colorKeys[1]} ${transitionDelay}ms linear,
    ${colorKeys[2]} ${transitionDelay}ms linear
  `,
    // Use those property values in our gradient.
    // Values go from 2 to 0 so that colors radiate
    // outwards from the top-left circle, not inwards.
    borderImage: `
    radial-gradient(
      circle at top left,
      var(${colorKeys[2]}),
      var(${colorKeys[1]}),
      var(${colorKeys[0]})
    ) 1
  `,
  };

  function handleMenu() {
    ref.current.classList.toggle("active");
  }

  function handleLink() {
    ref.current.classList.toggle("active");
  }

  return (
    <>
      <div className="mobile-navbar">
        <div className="mobile-navbar__container" style={rainbowStyle}>
          <div className="navbar__title">
            <Logo />
            <Link to="/">Harshaan</Link>
          </div>

          <div onClick={handleMenu} className="mobile-navbar__menu">
            <svg viewBox="0 0 100 80" width="40" height="40" fill="white">
              <rect width="100" height="8" rx="8"></rect>
              <rect y="25" width="100" height="8" rx="8"></rect>
              <rect y="50" width="100" height="8" rx="8"></rect>
            </svg>
          </div>
          <div onClick={handleLink} ref={ref} className="mobile-navbar__links">
            <Link to="/projects">Projects</Link>
            <Link to="/art">Art</Link>
            <Link to="/music">Music</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

  
      </div>
    </>
  );
}
