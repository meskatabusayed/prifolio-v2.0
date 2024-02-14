import './contactForm.css'

const ContactForm = () => {
    return (
        <div className='contact-form-content'>
            <form>
                <div className='name-container'>
                    <input type='text' name='firstName' placeholder='First Name' />
                    <input type='text' name='lastName' placeholder='Last Name' />
                </div>
                <input type='text' name='email' placeholder='Email'/>
                <textarea type='text' name='message' placeholder='Message' rows={3} ></textarea>

                <button>Send</button>
            </form>
            
        </div>
    );
};

export default ContactForm;