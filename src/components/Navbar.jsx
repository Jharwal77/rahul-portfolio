import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Rahul.
      </div>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#explore">Explore</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="social-icons">

        <a
          href="https://github.com/Jharwal77"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rahuljharwal2468/"
          target="_blank"
        >
          <FaLinkedin />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;