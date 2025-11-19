import { useState, useEffect } from "react";

import { motion, useMotionValue, useSpring } from "motion/react";
import {myProjects} from "./constans/index.js";
import Project from "../../components/Project.jsx";

const MySideProject = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    };
    const [preview, setPreview] = useState(null);

    // Preload images function
    const preloadImages = () => {
        myProjects.forEach(project => {
            const img = new Image();
            img.src = project.image;
        });
    };

    // Preload images when component mounts and page is loaded
    useEffect(() => {
        if (document.readyState === 'complete') {
            preloadImages();
        } else {
            window.addEventListener('load', preloadImages);
            return () => window.removeEventListener('load', preloadImages);
        }
    }, []);

    // Intersection Observer for early preload when section is near viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Preload images when section is 200px before entering view
                        preloadImages();
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: '200px' } // Preload 200px before section enters view
        );
        
        const section = document.querySelector('[data-side-projects]');
        if (section) {
            observer.observe(section);
        }
        
        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section
            data-side-projects
            onMouseMove={handleMouseMove}
            className="relative c-space section-spacing"
        >
            <h2 className="text-heading">My Side Projects</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
            {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview} />
            ))}
            {preview && (
                <motion.img
                    className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                    src={preview}
                    style={{ x: springX, y: springY }}
                />
            )}
        </section>
    );
};

export default MySideProject;