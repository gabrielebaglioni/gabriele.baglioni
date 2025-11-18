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
        <div className='relative'>
          <StarsCanvas />
          <GridLayout/>
          <ColorfulGeometry />
          <MySideProject />
          <CTA />
        </div>
    </section>
  );
};

export default AboutMeWrapper;
