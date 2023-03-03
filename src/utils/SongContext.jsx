import {useState, createContext} from "react";
import { songlist } from "./songlist";
export const SongContext = createContext(null)


export function SongProvider({children}) {
    const [song, setSong] = useState({
        title: "Bond",
        audio: Object.values(songlist[0].audio)[0],
        image: Object.values(songlist[0].image)[0],
    });

    const value = {song, setSong};

    return <SongContext.Provider value={value}>{children}</SongContext.Provider>

}