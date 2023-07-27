import './landingSection.scss';
import { FaApple } from "react-icons/fa6";
import GoogleIconSvg from './GoogleIconSvg';
import MicrosoftIconSvg from './MicrosoftIconSvg';
import SpotifyLogoSvg from './SpotifyLogoSvg';
import AmazonLogoSvg from './AmazonLogoSvg';

const LandingSection: React.FC = () => {
    return (
        <div className="landing-section">
            <h1 className="heading-primary">Learn to code — for free.</h1>
            <h1 className="heading-primary">Build projects.</h1>
            <h1 className="heading-primary">Earn certifications.</h1>
            <p>
                Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:
            </p>
            <div className='landing-section__logo-container'>
                <FaApple/>
                <GoogleIconSvg/>
                <MicrosoftIconSvg/>
                <SpotifyLogoSvg/>
                <AmazonLogoSvg/>
            </div>
            <a href="#" className="btn--cta--big btn--cta btn d-block">
                {"Get started (it's free)"}
            </a>
        </div>
    );
};

export default LandingSection;
