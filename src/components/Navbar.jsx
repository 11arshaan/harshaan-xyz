import "./Navbar.scss";
import { ReactComponent as Logo } from "../assets/svg/sunlogo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__title">
            <Logo />
            <Link to="/">Harshaan Singh</Link>
          </div>

          <div className="navbar__links">
            <Link to="/about">About</Link>
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
