import "./Art.scss";
import { useEffect } from "react";

export default function Art() {

    useEffect(()=>{
        
    }, []);

    return (
    <div className="art">
        <div className="art__category--container"> 
            <button className="art__category">All</button>
            <button className="art__category">3D</button>
            <button className="art__category">Design</button>
            <button className="art__category">VFX</button>
            <button className="art__category">Code</button>
        </div>
    </div>);
}