// JavaScript source code
import "../Styling/Navbar.css";
function Navbar() {
    return (
        <nav>
            <h2>Muqadas Asif</h2>

            <div>
                <a href="#home">Home</a> {/* Yahan href="#home" browser ko batata hai ke jab user Home par click kare toh page ke us element par jao jiski id="home" hai. */}
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
