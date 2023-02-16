import "./Home.scss";
import HomeCircleSVG from "../assets/svg/HomeCircle";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__titlebox">
          <HomeCircleSVG />
          <h1 className="home__title">creative developer</h1>
          <h2 className="home__subtitle">I bring ideas to life.</h2>
          <button className="home__resume">Resume</button>
        </div>
      </div>
    </div>
  );
}
