import './loginForm.scss';
import googleLogoSvg from './GoogleIconSVG.svg';
import { FaFreeCodeCamp } from "react-icons/fa6";

const LoginForm: React.FC = () => {
    return (
        <div className="login-form">
            <header>
                <FaFreeCodeCamp/>
                <h1>Sign up for freeCodeCamp</h1>
            </header>
            <div className='login-form__google-login'>
                <span><img src={googleLogoSvg} height={40} width={'auto'}/></span>
                <span>Sign in with Google</span>
            </div>
            <div style={{margin: '1rem 0'}}>
                <span className='separator-or'>OR</span>
            </div>
            <div className='login-form__form'>
                <form>
                    <input type="email" placeholder="Email Address" required/>
                    <input type="text" placeholder="User Name" required/>
                    <input type="password" placeholder='Password' required/>
                    <button type="submit" className='btn btn--cta btn--cta--big'>Sign Up</button>
                </form>
            </div>
            <p>Already have an account? <a>Log in</a></p>
        </div>
    );
};

export default LoginForm;
