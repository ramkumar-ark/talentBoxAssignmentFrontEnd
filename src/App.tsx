import './App.scss';
import LandingPage from './pages/LandingPage';

function App(): JSX.Element {
  return (
    <>
      <div className="page-wrapper">
        <div className='default-layout'>
          <LandingPage/>
        </div>
      </div>
    </>
  )
}

export default App
