import ContactMe from "../components/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skills/Skills";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import './App.css'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <Hero></Hero>
                <Skills></Skills>
                <WorkExperience/>
                <ContactMe></ContactMe>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;