import "./Projects.scss";
import cloudcastle from "../assets/images/cloudcastle.png";
import welcomeLogo from "../assets/images/WELCOME_Logo.png";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="projects">
      <ProjectCard
        img={welcomeLogo}
        title="Eden AI"
        subtitle="react-native sketchpad app for AI sketch-to-image generation"
        description="This is a mobile app that allows the user to sketch on a touch canvas. The sketch is then sent to a server that is running a custom configuration of the control net AI model. This model can generate high fidelity images after reading the text prompt and scanning the sketched image. The app also includes regular stable diffusion generation via text and image to image. The canvas function was coded from scratch using react-native-skia."
        link="https://www.welcomejpeg.com/"
      />
      <ProjectCard
        img={cloudcastle}
        title="Web Design Lab"
        subtitle="custom components and web graphic experiments"
        description="This is an interactive demo that contains custom components and
            designs. It is also an exhibition of my web graphics experiments."
        link="https://iridescent-quokka-65e71d.netlify.app/"
      />
    </div>
  );
}
