
import { useEffect, useState } from "react";

function Hero() {

  const photos = [
    "/profile/photo1.jpg",
    "/profile/photo2.jpg",
    "/profile/photo3.jpg",
    "/profile/photo4.jpg"
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentPhoto((prev) =>
        prev === photos.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          Open For Internship Opportunities
        </span>

        <h1>
          Rahul Meena
        </h1>
        <p className="hero-tagline">
  Building scalable web applications and
  AI-powered products.
</p>

                <h2>
          Full Stack Developer
        </h2>

        <p className="hero-role">
          MERN Stack • Backend Development • AI Integration
        </p>

        <p>
          ECE undergraduate at IIIT Manipur with hands-on
          experience in React.js, Node.js, Express.js,
          MongoDB and REST API development.

          Built multiple production-style applications
          including a social media platform, AI-powered
          chat systems and backend-focused solutions.

          Currently seeking Software Development and
          Full Stack Engineering internship opportunities.
        </p>
  

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Jharwal77"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rahuljharwal2468/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/JHARWAL/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LeetCode
          </a>

          <a
            href="/RAHUL_MEENA_RESUME_.pdf"
            target="_blank"
            className="btn-outline"
          >
            Resume
          </a>

        </div>

      </div>

      <div className="hero-image-container">

        <img
          src={photos[currentPhoto]}
          alt="Rahul Meena"
          className="hero-image"
        />

      </div>

    </section>
  );
}

export default Hero;
