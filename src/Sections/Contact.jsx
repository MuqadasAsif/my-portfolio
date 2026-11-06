import "../Styling/Contact.css";

function Contact() {
    return (
        <section id="contact">
            <div className="contact-content">

                <p className="section-subtitle">GET IN TOUCH</p>

                <h2>Contact <span>Me</span></h2>

                <p className="contact-description">
                    Have a project in mind or want to work together?
                    Feel free to get in touch.
                </p>

                <div className="contact-details">

                    <div className="contact-card">
                        <h3>Email</h3>
                        <a href="mailto:muqadasjunaid1@gmail.com">
                            muqadasjunaid1@gmail.com
                        </a>
                    </div>

                    <div className="contact-card">
                        <h3>LinkedIn</h3>
                        <a
                            href="https://www.linkedin.com/in/muqadas-junaid-4b2959362/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View My LinkedIn Profile
                        </a>
                    </div>

                    <div className="contact-card">
                        <h3>Location</h3>
                        <p>Lahore, Pakistan</p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;