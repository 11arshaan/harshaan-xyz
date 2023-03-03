import "./MusicPlayer.scss";
import Shuffle from "../assets/svg/shuffle.svg";
import Play from "../assets/svg/Play.svg";
import Pause from "../assets/svg/Pause.svg";
import Next from "../assets/svg/Next.svg";
import Previous from "../assets/svg/previous.svg";
import Seeker from "../assets/svg/Seeker.svg";
import { useState, useContext, useEffect } from "react";
import { PlayerContext } from "../utils/PlayerContext";
import { SongContext } from "../utils/SongContext";
import { HowlerContext } from "../utils/HowlerContext";

export default function MusicPlayer({ currentSong, playing }) {
  const { player, setPlayer } = useContext(PlayerContext);
  const { song, setSong } = useContext(SongContext);
  const { howler, setHowler } = useContext(HowlerContext);

    

  useEffect(() => {
    
  }, []);

  function handleSeek(e) {
    setPlayer({ ...player, seek: e.target.value });
    player.howler.seek(e.target.value);

  }

  function handleVolume() {}

  return (
    <div className="musicplayer">
      <input
        type="range"
        min="0"
        max={player.howler ? player.howler.duration() : "100"}
        value={player.seek}
        className="musicplayer__seekslider"
        onChange={handleSeek}
      />
      <div className="musicplayer__titlebox">
        <img src={song.image} alt={`image for ${song.title}`} />
        <h3>{song.title}</h3>
      </div>
      <div className="musicplayer__controls">
        <img id="shuffleicon" src={Shuffle} alt="Shuffle Icon" />
        <img id="previousicon" src={Previous} alt="Previous Song" />
        <img
          onClick={() => setPlayer({ ...player, playing: !player.playing })}
          id="playpauseicon"
          src={player.playing ? Pause : Play}
          alt={player.playing ? "Pause Song" : "Play Song"}
        />
        <img id="nexticon" src={Next} alt="Next Song" />
      </div>

      <div className="musicplayer__volume">
        <input
          type="range"
          min="1"
          max="100"
          value={player.volume}
          class="volume_slider"
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}
