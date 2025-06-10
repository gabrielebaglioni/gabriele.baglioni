import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { logo } from "../assets/images";
import { soundoff, soundon } from "../assets/icons";
import musicaDiSottofondo from "../assets/Big-City-Life.mp3";

const Navbar = () => {
    const audioRef = useRef(new Audio(musicaDiSottofondo));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const location = useLocation();

    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlayingMusic]);

    const getInactiveLinkColor = (pathname) => {
        if (pathname === '/about' || pathname === '/projects' || pathname === '/contact') {
            return "text-white-100";
        }
        return "text-slate-800";
    };
    
    const inactiveColor = getInactiveLinkColor(location.pathname);

    return (
        <header className='header flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8 w-full'>
            <div className="flex items-center gap-3 sm:gap-4 mr-4">
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt='jukebox'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className='w-8 h-8 cursor-pointer object-contain'
                />
                <NavLink to='/'>
                    <img src={logo} alt='logo' className='w-12 h-12 sm:w-18 sm:h-18 object-contain' />
                </NavLink>
            </div>

            <nav className='flex text-sm sm:text-lg gap-3 sm:gap-7 font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : inactiveColor }>
                    About my work
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : inactiveColor}>
                    About me
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
