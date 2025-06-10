import { CTA } from "../../components/index.js";
import { ColorfulGeometry } from "../geometrySection/index.js";
import HeroAboutMe from "./heroAboutMe.jsx";
import GridLayout from "./GridLayout.jsx";
import MySideProject from "./MySideProject.jsx";


const AboutMeWrapper = () => {
  return (
    <section className='container mx-auto max-w-7xl'>
        <HeroAboutMe />
        <GridLayout/>
        <ColorfulGeometry />
        <MySideProject />
        <CTA />
    </section>
  );
};

export default AboutMeWrapper;
