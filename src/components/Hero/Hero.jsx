import './hero.css'

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>Building Digital Experiences that inspire</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src='/src/assets/images/reactjs-icon.svg' alt=''/>
                    </div>
                    <img src="/src/assets/images/meskat.jpg" alt="" />
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src="/src/assets/images/w3_html5-icon.svg" alt="" />

                    </div>
                    <div className='tech-icon'>
                        <img src="/src/assets/images/w3_css-icon.svg" alt="" />

                    </div>
                    <div className='tech-icon'>
                        <img src="/src/assets/images/javascript-icon.svg" alt="" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;