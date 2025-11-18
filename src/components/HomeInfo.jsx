import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Welcome to my
                <span className='font-semibold mx-2 text-white'>3D Portfolio</span>
                 🚀
                <br />
                Full-Stack Engineer & Web3 Enthusiast🇮🇹
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Built enterprise solutions for Ferragamo & Leonardo Telespazio <br /> using .NET, Angular, Azure & microservices
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    View experience
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Exploring blockchain & AI through Crypt-payment & HouseBlock <br /> Building decentralized systems with Solidity & microservices
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    See projects
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Looking for a full-stack engineer who bridges enterprise & Web3?<br />
                    Let's discuss how I can contribute to your team.
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Get in touch
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>

        );
    }

    return null;
};

export default HomeInfo;
