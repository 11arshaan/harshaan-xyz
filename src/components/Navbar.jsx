import "./Navbar.scss";
import { ReactComponent as Logo } from "../assets/svg/sunlogo.svg";
import { Link } from "react-router-dom";
import useRainbow from "../utils/useRainbow";

export default function Navbar() {
  const transitionDelay = 8000;
  const colors = useRainbow(transitionDelay);
  const colorKeys = Object.keys(colors);

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

  return (
    <>
      <div className="navbar">
        <div className="navbar__container" style={rainbowStyle}>
          <div className="navbar__title">
            <Logo />
            <Link to="/">Harshaan</Link>
          </div>

          <div className="navbar__links">
            <Link to="/projects">Projects</Link>
            <Link to="/art">Art</Link>
            <Link to="/music">Music</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="navbar__container--block" style={rainbowStyle}>
          <div className="navbar__title">
            <Logo />
            <Link to="/">Harshaan</Link>
          </div>

          <div className="navbar__links">
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
