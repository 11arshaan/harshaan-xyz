import {useState, createContext} from "react";
export const HowlerContext = createContext(null)


export function HowlerProvider({children}) {
    const [howler, setHowler] = useState(null);

    const value = {howler, setHowler};

    return <HowlerContext.Provider value={value}>{children}</HowlerContext.Provider>

}