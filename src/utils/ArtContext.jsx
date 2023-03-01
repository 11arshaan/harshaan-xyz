import {useState, createContext} from "react";

export const ArtContext = createContext(null)


export function ArtProvider({children}) {
    const [images, setImages] = useState([]);
    const value = {images, setImages};

    return <ArtContext.Provider value={value}>{children}</ArtContext.Provider>

}