import "./App.scss";
import {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import { Outlet } from "react-router-dom";


export default function App() {
  const [windowSize, setWindowSize] = useState();



  useEffect(() => {
    setWindowSize(window.innerWidth);
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
 }, [windowSize]);


  return (
      <div className="app">
      {windowSize > 900 ? <Navbar /> : <MobileNavbar />}
        
        <Outlet />
      </div>
  );
}
