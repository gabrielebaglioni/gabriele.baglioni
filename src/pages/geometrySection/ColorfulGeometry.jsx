import React, { useRef } from 'react';
import Scene from './Scene';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const slice = {
  primary: {
    first_name: "Gabriele",
    last_name: "Baglioni",
    tag_line: "Creative Developer",
  },
};

const ColorfulGeometry = () => {
    const component = useRef(null);
    const firstNameLetters = slice.primary.first_name.split("");
    const lastNameLetters = slice.primary.last_name.split("");

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
			gsap.set('.name-animation', { opacity: 1 });
			gsap.set('.job-title', { opacity: 1 });
			return;
		}
        
        const tl = gsap.timeline({delay: 0.5});

        tl.fromTo(
            ".name-animation",
            { x: -100, opacity: 0, rotate: -10 },
            {
                x: 0,
                rotate: 0,
                opacity: 1,
                ease: "elastic.out(1,0.3)",
                duration: 1,
                transformOrigin: "left top",
                stagger: {
                    each: 0.1,
                    from: "random"
                }
            }
        );

        tl.fromTo(
            ".job-title",
            { y: 20, opacity: 0, scale: 1.2 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scale: 1,
                ease: "elastic.out(1,0.3)"
            }
        );

    }, { scope: component });

    return (
        <section ref={component} className="px-4 md:px-6">
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
                    <div className="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0">
                        <Scene />
                    </div>
                    <div className="col-start-1 md:row-start-1">
                        <h1
                            className="mb-2 md:mb-8 text-[clamp(3rem,20vmin,13rem)] font-extrabold leading-none tracking-tighter text-nowrap"
                            aria-label={`${slice.primary.first_name} ${slice.primary.last_name}`}
                        >
                            <span className="block text-slate-300">
                                {firstNameLetters.map((letter, index) => (
                                    <span key={index} className="name-animation inline-block opacity-0">{letter}</span>
                                ))}
                            </span>
                            <span className="block text-slate-500 -mt-[.2em]">
                                {lastNameLetters.map((letter, index) => (
                                    <span key={index} className="name-animation inline-block opacity-0">{letter}</span>
                                ))}
                            </span>
                        </h1>
                        <span
                            className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent text-2xl font-bold uppercase tracking-[.2em] md:text-4xl opacity-0"
                        >
                            {slice.primary.tag_line}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorfulGeometry; 