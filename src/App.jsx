import "./App.scss";
import { useContext} from "react";
import { SongContext } from "./utils/SongContext";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import AudioOut from "./components/AudioOut";
import { PlayerContext } from "./utils/PlayerContext";


export default function App() {
  const {song, setSong } = useContext(SongContext);
  const {player, setPlayer } = useContext(PlayerContext);

  return (
      <div className="app">
        <Navbar />
        <AudioOut song={song} playing={player.playing} seek={player.seek} volume={player.volume} />
        <Outlet />
      </div>
  );
}
