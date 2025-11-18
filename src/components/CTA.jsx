import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className='max-container cta'>
            <p className='cta-text'>
                Looking for a full-stack engineer with enterprise & Web3 experience? <br className='sm:block hidden' />
                Let's discuss how I can contribute to your team or project.
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>
        </section>
    );
};

export default CTA;
