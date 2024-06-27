import "./Projects.scss";
import cloudcastle from "../assets/images/cloudcastle.png";
import welcomeLogo from "../assets/images/WELCOME_Logo.png";
import ProjectCard from "../components/ProjectCard";
import AAWedding from "../assets/images/aa-wedding.png";
import WebAudioSynth  from "../assets/images/Web-Audio-Synth.png";
import LSLogo from "../assets/images/LS Logo.png";

export default function Projects() {
  return (
    <div className="projects">
      <ProjectCard
        img={LSLogo}
        title="Loopscope"
        subtitle="a huge upgrade to Loopscope: a music sample store built on Shopify"
        description="I built a custom music player, revamped the UI, and helped implement a subscription service to Loopscope's website, hosted on Shopify. Using Liquid as well as a custom backend, me and the team were able to bypass international restrictions to ensure Loopscope could provide the experience they wished for."
        link="https://loopscope.io/"
      />
      <ProjectCard
        img={welcomeLogo}
        title="Eden AI"
        subtitle="mobile sketchpad app for AI image generation via ControlNet"
        description="This is a mobile app that allows the user to sketch on a touch canvas. The sketch is then sent to a server that is running a custom configuration of the control net AI model. This model can generate high fidelity images after reading the text prompt and scanning the sketched image. The app also includes regular stable diffusion generation via text and image to image. The canvas function was coded from scratch using react-native-skia."
        link="https://welcomejpeg.com/"
      />
      <ProjectCard
        img={cloudcastle}
        title="Web Design Lab"
        subtitle="custom components and web graphic experiments"
        description="This is an interactive demo that contains custom components and
            designs. It is also an exhibition of my web graphics experiments."
        link="https://iridescent-quokka-65e71d.netlify.app/"
      />
      <ProjectCard
        img={AAWedding}
        title="Amarit and Arsheen"
        subtitle="a wedding RSVP website for Arsheen and Amarit"
        description="This is an RSVP website featuring a custom firebase backend to handle the guestlist. It features a custom image gallery and RSVP form, as well as decorative animations (video)."
        link="https://amaritandarsheen.com"
      />
      {/* <ProjectCard
      img={WebAudioSynth}
      title="Web Audio Synthesizer [wip]"
      subtitle="a node-based audio synthesizer" 
      description="Built with React Flow and the Web Audio API, this synthesizer provides a node-based interface for creating audio graphs. Current features include combining oscillators with a gain and an analyser node. TO DO: Add more nodes and effects, implement a sequencer and MIDI input, add microphone input, record audio feature, and tone.js"
      link="https://11arshaan.github.io/web-audio-synthesizer/"/> */}
    </div>
  );
}
