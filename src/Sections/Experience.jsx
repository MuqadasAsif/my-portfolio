import "../Styling/Experience.css";

function Experience() {
    return (
        <section id="experience">
            <div className="experience-content">

                <p className="section-subtitle">MY JOURNEY</p>

                <h2>Work <span>Experience</span></h2>

                <div className="experience-card">
                    <h3>Web Development Intern</h3>

                    <h4>AutoSoft Dynamics (Pvt.) Limited</h4>

                    <p className="experience-duration">
                        July 2024 – September 2024
                    </p>

                    <p className="experience-description">
                        Worked with C#, ASP.NET MVC and Microsoft SQL Server
                        while contributing to web application development.
                    </p>
                </div>

                <div className="experience-card">
                    <h3>Web Development Intern</h3>

                    <h4>AutoSoft Dynamics (Pvt.) Limited</h4>

                    <p className="experience-duration">
                        July 2026 – December 2026
                    </p>

                    <p className="experience-description">
                        Working on web application development using
                        ASP.NET Core, React.js and related technologies.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Experience;