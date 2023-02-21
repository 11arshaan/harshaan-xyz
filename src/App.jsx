import "./App.scss";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
    

    return (
    <div className="app">
    <Navbar />
    <Outlet />
    </div>

    )
}