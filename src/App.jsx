import "./App.scss";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { artRef } from "./utils/firebase.utils";
import {getStorage, ref, list, getDownloadURL} from 'firebase/storage';

async function getArtImages () {
    const artList = await list(artRef, {maxResults: 4});
    artList.items.forEach(item => {
        getDownloadURL(item).then(data => console.log(data));
    })
 
}

export default function App() {
    
    // getArtImages();


    return (
    <div className="app">
    <Navbar />
    <Outlet />
    </div>

    )
}