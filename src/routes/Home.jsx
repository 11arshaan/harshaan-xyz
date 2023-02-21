import "./Home.scss";
import HomeCircleSVG from "../assets/svg/HomeCircle";
import wavfile from "../assets/audio/Abyss Pulse 1.wav";

import anime from "animejs";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timeline = anime.timeline();
    timeline.add({
      targets: ".home__circleSVG #circlepath",
      rotate: 360,
      duration: 120000,
      easing: "linear",
      loop: true,
    });
  }, []);

  return (
    <div className="home-container">
      <div className="home">
        <div className="home__titlebox">
          <HomeCircleSVG />
          <h1 className="home__title">Harshaan Singh</h1>

          <h2 className="home__subtitle">I bring ideas to life.</h2>
          <a href={wavfile} download="Abyss Pulse 1.wav">
            <button className="home__resume">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
