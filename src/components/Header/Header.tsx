import './Header.scss';
import logo from '../../assets/images/freeCodeCampLogo.svg';
import { BiGlobe } from "react-icons/bi";

const Header: React.FC = () => {
    return (
        <header className="header-main">
            <nav aria-label="primary" className="header-main__nav">
                <div className='header-main__nav-search-bar'>
                    <div className='header-main__input-search-box' tabIndex={0}>
                        <input type='search'placeholder='Search 9,000+ tutorials'/>
                    </div>
                </div>
                <div className='header-main__logo-holder'>
                     <img src={logo} alt='logo' height={24} width={210} style={{margin:'4px'}}/>
                </div>
                <div className="header-main__nav-options">
                    <BiGlobe className='header-main__globeIcon'/>
                    <button className='header-main__button header-main__button--normal'>Menu</button>
                    <button className='header-main__button header-main__button--gold'>Sign in</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
