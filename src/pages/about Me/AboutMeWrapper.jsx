import { CTA } from "../../components/index.js";
import { ColorfulGeometry } from "../geometrySection/index.js";
import HeroAboutMe from "./heroAboutMe.jsx";
import GridLayout from "./GridLayout.jsx";
import MySideProject from "./MySideProject.jsx";
import ParallaxBackground from "../../components/parallaxBackground.jsx";
import { StarsCanvas } from "../../components/index2.js";


const AboutMeWrapper = () => {
  return (
    <section className='container mx-auto max-w-7xl relative'>
        <ParallaxBackground />
        <HeroAboutMe />
       
          <StarsCanvas />
          <GridLayout/>
          <ColorfulGeometry />
          <MySideProject />
          <CTA />

    </section>
  );
};

export default AboutMeWrapper;
