import "./Projects.scss";
import cloudcastle from "../assets/images/cloudcastle.png";
import welcomeLogo from "../assets/images/WELCOME_Logo.png";
import ProjectCard from "../components/ProjectCard";
import AAWedding from "../assets/images/aa-wedding.png";

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
      <ProjectCard
        img={AAWedding}
        title="Amarit and Arsheen"
        subtitle="a wedding RSVP website for Arsheen and Amarit"
        description="This is an RSVP website featuring a custom firebase backend to handle the guestlist. It features a custom image gallery and RSVP form, as well as decorative animations (video)."
        link="https://amaritandarsheen.com"
      />
    </div>
  );
}
