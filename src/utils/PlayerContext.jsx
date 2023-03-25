import {useState, createContext} from "react";
export const PlayerContext = createContext(null)


export function PlayerProvider({children}) {
    const [player, setPlayer] = useState({
        playing: false,
        volume: 1,
        seek: 0,
        howler: null,
    });

    const value = {player, setPlayer};

    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>

}