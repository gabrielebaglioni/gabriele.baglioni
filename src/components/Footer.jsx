import { Link } from "react-router-dom";

import { socialLinks } from "../constans/index.js";

const Footer = () => {
    return (
        <footer className='footer font-poppins'>

            <div className='footer-container'>
                <p>
                    © 2025 <strong>Gabriele Baglioni</strong>.
                </p>

                <div className='flex gap-3 justify-center items-center'>
                    {socialLinks.map((link) => (
                        <Link key={link.name} to={link.link} target='_blank'>
                            <img
                                src={link.iconUrl}
                                alt={link.name}
                                className='w-6 h-6 object-contain'
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
