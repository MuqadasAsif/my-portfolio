import "../Styling/Skills.css";

function Skills() {
    return (
        <section id="skills">
            <div className="skills-content">
                <p className="section-subtitle">WHAT I WORK WITH</p>

                <h2>My <span>Skills</span></h2>

                <p className="skills-description">
                    Technologies, tools and professional skills I use in my work.
                </p>

                <div className="skills-container">
                    <div className="skill-card">
                        <h3>Frontend Development</h3>
                        <p>HTML, CSS, JavaScript, React.js</p>
                    </div>

                    <div className="skill-card">
                        <h3>Backend Development</h3>
                        <p>ASP.NET Core, ASP.NET MVC</p>
                    </div>

                    <div className="skill-card">
                        <h3>Programming Languages</h3>
                        <p>Python, C++, C#</p>
                    </div>

                    <div className="skill-card">
                        <h3>Database</h3>
                        <p>MS SQL Server, Entity Framework Core</p>
                    </div>

                    <div className="skill-card">
                        <h3>Tools</h3>
                        <p>Visual Studio</p>
                    </div>

                    <div className="skill-card">
                        <h3>Soft Skills</h3>
                        <p>Problem Solving, Teamwork, Communication, Time Management, Adaptability</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;