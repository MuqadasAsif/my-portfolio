import "../Styling/Home.css";

function Home() {
    return (
        <section id="home">

            <div className="home-content">

                <p className="intro">WELCOME TO MY PORTFOLIO</p>

                <h1>
                    Hi, I'm <span>Muqadas Asif</span>
                </h1>

                <h2>Software Developer</h2>

                <p className="description">
                    I create modern web applications and turn ideas
                    into practical digital solutions.
                </p>

                <div className="home-buttons">
                    <a href="#projects" className="work-btn">
                        View My Work
                    </a>
                    <a href="#contact" className="contact-btn">
                        Contact Me
                    </a>
                </div>

            </div>

            <div className="home-decoration">
                <div className="circle">
                    <span>MA</span>
                </div>
            </div>

        </section>
    );
}

export default Home;