import ContactMe from "../components/ContactMe/ContactMe";
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
        </div>
    );
};

export default Home;