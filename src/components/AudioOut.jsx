import ReactHowler from "react-howler/lib/ReactHowler";
import { PlayerContext } from "../utils/PlayerContext";
import { useContext, useEffect, useRef } from "react";
import { HowlerContext } from "../utils/HowlerContext";

export default function AudioOut({ song, playing, volume, seek }) {
  const { player, setPlayer } = useContext(PlayerContext);
  const { howler, setHowler} = useContext(HowlerContext);
  const ref = useRef(null);

    function startSeek() {
        console.log(howler);
        setInterval(()=>setPlayer(...player.seek = howler.seek()), 50);
    }
  
  useEffect(() => {
    setHowler(ref.current);

    
  }, []);

  return (
    <ReactHowler
      ref={ref}
      src={song.audio}
      volume={volume}
      playing={playing}
      onPlay={startSeek}
    />
  );
}
