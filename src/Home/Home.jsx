import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skills/Skills";
import './App.css'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <Hero></Hero>
                <Skills></Skills>
            </div>
        </div>
    );
};

export default Home;