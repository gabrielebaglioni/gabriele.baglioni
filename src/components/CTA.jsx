import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className='max-container cta'>
            <p className='cta-text'>
                Do you like my profile? <br className='sm:block hidden' />
                Let’s build something together!
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>
        </section>
    );
};

export default CTA;
