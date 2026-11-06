import "../Styling/Projects.css";

function Projects() {
    return (
        <section id="projects">
            <div className="projects-content">

                <p className="section-subtitle">MY RECENT WORK</p>

                <h2>My <span>Projects</span></h2>

                <p className="projects-description">
                    Here are some projects I have worked on.
                </p>

                <div className="projects-container">

                    <div className="project-card">
                        <h3>MediDerma</h3>
                        <p>
                            An AI-based mobile application for skin disease
                            prediction with user profiles and health reports.
                        </p>
                        <span>Python · FastAPI · Vision Transformer</span>
                    </div>

                    <div className="project-card">
                        <h3>Employee Recognition System</h3>
                        <p>
                            A web application for uploading employee records,
                            viewing employees and managing employee selection.
                        </p>
                        <span>ASP.NET Core · React.js · SQL Server</span>
                    </div>

                    <div className="project-card">
                        <h3>LinkedIn Job Scraper</h3>
                        <p>
                            A web application to collect and filter job
                            listings based on different search criteria.
                        </p>
                        <span>ASP.NET Core · Web Development</span>
                    </div>
                    <div className="project-card">
                        <h3>Food Delivery System</h3>
                        <p>
                            A food ordering web application that allows users
                            to explore restaurants and place food orders through
                            a connected frontend and backend system.
                        </p>
                        <span>React.js · ASP.NET Core Web API · Microservices</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;