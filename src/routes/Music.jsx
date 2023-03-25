import "./Music.scss";
import { useState, useContext } from "react";
import MusicPlayer from "../components/MusicPlayer";
import Song from "../components/Song";
import { songlist } from "../utils/songlist";
import { SongContext } from "../utils/SongContext";
import { PlayerContext } from "../utils/PlayerContext";

export default function Music() {

  const tempStyle = {
    color: "white",
    fontFamily: "IBMPlexMono",
  }

  const tempDiv ={

    justifySelf: "center",
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }

  return (<div style={tempDiv}><h2 style={tempStyle}>Music Player under construction!</h2>
  <br></br><p style={tempStyle}>( I make many kinds of music )</p></div>)

  // const { song, setSong } = useContext(SongContext);
  // const {player, setPlayer} = useContext(PlayerContext);
  // const [playing, setPlaying] = useState(false);

  // const howler = player.howler;

  // function playSong(e) {
  //   let songTitle = "";
  //   if (e.target.nodeName === "H3") {
  //     songTitle = e.target.innerText;
  //   } else {
  //     songTitle = e.target.firstElementChild.innerText;
  //   }

  //   const findSong = songlist.filter((el) => (el.title = songTitle));
  //   const selectSong = {
  //     title: songTitle,
  //     audio: Object.values(findSong[0].audio)[0],
  //     image: Object.values(findSong[0].image)[0],
  //   };
  //   setSong(selectSong);
    
  //   setPlayer({
  //       ...player,
  //       playing: true
  //   });
  // }

  // return (
  //   <div className="music">
  //     {/* <iframe className="player" src="https://player.beatstars.com/?storeId=135931" width="100%" height="800" title="beatstore" style={{maxWwidth:"1024px"}}> -- none -- </iframe> */}
  //     <Song
  //       playSong={playSong}
  //       title={songlist[0].title}
  //       image={songlist[0].image}
  //       audio={songlist[0].audio}
  //     />
  //     <MusicPlayer currentSong={song} playing={playing} />
  //   </div>
  // );
}
