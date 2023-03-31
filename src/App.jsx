import "./App.scss";
import { useContext, useState, useEffect} from "react";
import { SongContext } from "./utils/SongContext";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import { Outlet } from "react-router-dom";
import AudioOut from "./components/AudioOut";
import { PlayerContext } from "./utils/PlayerContext";


export default function App() {
  const [windowSize, setWindowSize] = useState();
  const {song, setSong } = useContext(SongContext);
  const {player, setPlayer } = useContext(PlayerContext);


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
        <AudioOut song={song} playing={player.playing} seek={player.seek} volume={player.volume} />
        <Outlet />
      </div>
  );
}
