import Header from "../../components/Header";
import LandingSection from "../../components/LandingSection";

const LandingPage: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="container" style={{paddingBlock: '4vw'}}>
                    <LandingSection/>
                </div>
            </main>
        </>
    );
};

export default LandingPage;
