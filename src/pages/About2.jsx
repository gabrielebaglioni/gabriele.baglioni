import { CTA } from "../components";

import "react-vertical-timeline-component/style.min.css";
import Hero from "../components/Hero.jsx";
import {Experience, Feedbacks, StarsCanvas} from "../components/index2.js";
import Tech from "../components/Tech.jsx";
import Works from "../components/Works.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

const About2 = () => {
  return (

            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Hero />
                </div>
                <div className='relative z-0'>
                    <About />
                    <Experience />
                    <Tech />
                        <Contact />
                        <StarsCanvas />

                    <div className="container mx-auto px-4 flex justify-center pb-4">
                        <CTA />
                    </div>
                </div>
            </div>


  );
};

export default About2;
