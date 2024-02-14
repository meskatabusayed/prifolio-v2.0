import ContactForm from './ContactForm/ContactForm';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import './contactMe.css'

const ContactMe = () => {
    return (
        <section className='contact-container'>
            <h5>Contact Me</h5>

            <div className='contact-content'>
                <div style={{flex: 1}}>
                    <ContactInfoCard
                    iconUrl='/src/assets/images/icons8-email-50.png'
                    text="meskatabusayed@gmail.com"
                    >
                        
                    </ContactInfoCard>
                    <ContactInfoCard
                    iconUrl='/src/assets/images/icons8-github-50.png'
                    text="https://github.com/meskatabusayed"
                    >

                    </ContactInfoCard>
                </div>
                <div style={{flex: 1}}>
                    <ContactForm/>
                </div>

            </div>
        </section>
    );
};

export default ContactMe;