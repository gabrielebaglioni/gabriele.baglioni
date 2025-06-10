import { CTA } from "../../components/index.js";
import { ColorfulGeometry } from "../geometrySection/index.js";
import HeroAboutMe from "./heroAboutMe.jsx";
import GridLayout from "./GridLayout.jsx";


const AboutMeWrapper = () => {
  return (
    <section className='container mx-auto max-w-7xl'>
        <HeroAboutMe />
        <GridLayout/>
        
        <ColorfulGeometry />
      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default AboutMeWrapper;
