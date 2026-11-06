import "../Styling/About.css";

function About() {
    return (
        <section id="about">

            <div className="about-content">

                <p className="section-subtitle">GET TO KNOW ME</p>

                <h2>About <span>Me</span></h2>

                <p className="about-description">
                    I am a Computer Science graduate from the University
                    of Lahore. I have experience working with web
                    development technologies and enjoy building
                    practical applications. I am passionate about
                    improving my technical skills and exploring
                    new technologies.
                </p>

                <div className="about-details">
                    <p><strong>Degree:</strong> BS Computer Science</p>
                    <p><strong>University:</strong> University of Lahore</p>
                    <p><strong>CGPA:</strong> 3.74 / 4.00</p>
                </div>

            </div>

        </section>
    );
}

export default About;