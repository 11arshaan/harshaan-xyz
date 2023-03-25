import "./About.scss";

import {ReactComponent as D3SVG} from "../assets/svg/d3.svg";
import {ReactComponent as AWSSVG} from "../assets/svg/aws.svg";
import {ReactComponent as EthSVG} from "../assets/svg/Ethereum.svg";
import {ReactComponent as ThreeSVG} from "../assets/svg/Three.js_Icon.svg";
import {ReactComponent as ReactSVG} from "../assets/svg/React-icon.svg";
import {ReactComponent as NodeSVG} from "../assets/svg/NodeJS.svg";
import {ReactComponent as SolanaSVG} from "../assets/svg/SolanaSVG.svg";
import {ReactComponent as UESVG} from "../assets/svg/UE.svg";
import {ReactComponent as UnitySVG} from "../assets/svg/unity.svg";
import {ReactComponent as AbletonSVG} from "../assets/svg/ableton.svg";
import {ReactComponent as AESVG} from "../assets/svg/after-effects-1.svg";
import {ReactComponent as PPSVG} from "../assets/svg/Adobe_Premiere_Pro_CC_icon.svg";
import {ReactComponent as PSSVG} from "../assets/svg/adobe-photoshop-icon.svg";
import AISVG from "../assets/svg/adobe-illustrator-icon.svg";
import C4D from "../assets/images/C4D_Logo.png";
import Nuke from "../assets/svg/icons8-nuke.svg";
import Blender from "../assets/svg/Blender_logo_no_text.svg";

export default function About() {
  return (
    <div className="about">
      <div className="skills">
        <div className="skills__creative">
          <h3>Creative</h3>

          <div className="skills__list">
            <ul>
              <li>Music Production</li>
              <li>Sound Design</li>
              <li>Video Production</li>
              <li>Graphic Design</li>
              <li>Visual Effects & Compositing</li>
              <li>3D Design & Animation</li>
              <li>Game Design</li>
              <li>Copywriting</li>
              <li>Storytelling</li>
            </ul>

            <div className="skills__list--icons">
                <AbletonSVG title="Ableton Live" fill="white" />
                <AESVG title="Adobe After Effects" />
                <PPSVG title="Adobe Premiere Pro" />
                <PSSVG title="Adobe Photoshop" />
                <img title="Adobe Illustrator" src={AISVG} alt="Adobe Illustrator Icon"/>
                <img title="Cinema 4D" src={C4D} alt="Cinema4D Icon"/>
                <img title="Blender" src={Blender} alt="Blender Icon" />
                <img title="Foundry Nuke" src={Nuke} alt="Foundry Nuke Icon" />
            </div>
          </div>
        </div>

        <div className="skills__development">
          <h3>Development</h3>
          <div className="skills__list">
            <ul>
              <li>React</li>
              <li>Ethereum / Solana</li>
              <li>WebGL</li>
              <li>Three.js / Babylon.js</li>
              <li>Node.js / Express</li>
              <li>MongoDB</li>
              <li>Unreal Engine</li>
              <li>Unity</li>
              <li>AWS</li>
            </ul>

            <div className="skills__list--icons">
            <ReactSVG title="React.js" />
            <ThreeSVG title="Three.js" fill="white" />
            <EthSVG title="Ethereum" />
            <SolanaSVG title="Solana" />
            <NodeSVG title="Node.js" />
          
            <AWSSVG title="Amazon Web Services" />
            <UESVG title="Unreal Engine" fill="white"/>
            <UnitySVG title="Unity" fill="white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
