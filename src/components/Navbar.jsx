import { NavLink, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { logo } from "../assets/images";
import { soundoff, soundon } from "../assets/icons";
import musicaDiSottofondo from "../assets/Big-City-Life.mp3";

const Navbar = () => {
    const audioRef = useRef(new Audio(musicaDiSottofondo));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlayingMusic]);

    return (
        <header className='header'>
            <div className="flex items-center gap-4">
            <NavLink to='/'>
                <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
            </NavLink>

                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt='jukebox'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className='w-8 h-8 cursor-pointer object-contain'
                />
            </div>

            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white-100" }>
                    About my work
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white-100"}>
                    About me
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
