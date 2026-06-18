// function Projects() {
//   return (
//     <section id="projects">

//       <h2 className="section-title">
//         Featured Projects
//       </h2>

//       <div className="project-card featured">

//         <h3>ViewTube</h3>

//         <p>
//           A full-stack social media platform inspired by
//           YouTube and Twitter.

//           Features video uploads,
//           authentication,
//           subscriptions,
//           comments,
//           likes,
//           profiles,
//           Cloudinary media storage
//           and responsive design.
//         </p>

//         <div className="project-links">

//           <a
//             href="https://viewtube-six.vercel.app/"
//             target="_blank"
//           >
//             Live Demo
//           </a>

//           <a
//             href="https://github.com/Jharwal77/frontendrepoforyt"
//             target="_blank"
//           >
//             Frontend Repo
//           </a>

//           <a
//             href="https://github.com/Jharwal77/mainbackend"
//             target="_blank"
//           >
//             Backend Repo
//           </a>

//         </div>

//       </div>

//       <div className="project-card">

//         <h3>
//           Prowider Mini Lead Distribution System
//         </h3>

//         <p>
//           Full-stack lead allocation platform built
//           with Next.js, PostgreSQL and Prisma.

//           Features round-robin lead distribution,
//           duplicate prevention,
//           real-time dashboard updates,
//           concurrency-safe operations
//           and provider allocation logic.
//         </p>

//         <div className="project-links">

//           <a
//             href="https://prowider-mini-lead-system-black.vercel.app/"
//             target="_blank"
//           >
//             Live Demo
//           </a>

//           <a
//             href="https://github.com/Jharwal77/prowider-mini-lead-system"
//             target="_blank"
//           >
//             GitHub Repo
//           </a>

//         </div>

//       </div>

//       <div className="project-card">

//         <h3>
//           AI Private Chat Room
//         </h3>

//         <p>
//           AI-powered private chat application
//           built using React.js,
//           Node.js,
//           Express.js and Gemini AI.

//           Features intelligent AI responses,
//           session-based conversations,
//           REST API integration
//           and responsive UI.
//         </p>

//         <div className="project-links">

//           <a
//             href="https://github.com/Jharwal77/ai-private-chat-room"
//             target="_blank"
//           >
//             GitHub Repo
//           </a>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Projects;

function Projects() {
  return (
    <section id="projects">

      <h2 className="section-title">
        Featured Projects
      </h2>

      {/* ViewTube */}

      <div className="project-card featured">

        <h3>
          ViewTube
        </h3>

        <p>
          Production-style social media platform inspired by
          YouTube and Twitter, featuring video uploads,
          subscriptions, comments, likes, authentication,
          profile management and Cloudinary media storage.

          Built using React.js, Node.js, Express.js,
          MongoDB and JWT authentication with 15+
          REST API endpoints.
        </p>

        <div className="project-links">

          <a
            href="https://viewtube-six.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

          <a
            href="https://drive.google.com/file/d/1KIpAQqVYEl5fYZcUo-Ha5HE-3OLTFZXK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Demo Video
          </a>

          <a
            href="https://github.com/Jharwal77/frontendrepoforyt"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Repo
          </a>

          <a
            href="https://github.com/Jharwal77/mainbackend"
            target="_blank"
            rel="noreferrer"
          >
            Backend Repo
          </a>

        </div>

      </div>

      {/* Prowider */}

      <div className="project-card">

        <h3>
          Prowider Mini Lead Distribution System
        </h3>

        <p>
          Lead distribution platform built with
          Next.js, PostgreSQL and Prisma ORM.

          Implements fair round-robin lead allocation,
          duplicate prevention, concurrency-safe
          operations and real-time dashboard updates.

          Designed to efficiently manage provider
          assignment workflows at scale.
        </p>

        <div className="project-links">

          <a
            href="https://prowider-mini-lead-system-black.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

          <a
            href="https://drive.google.com/file/d/1VGrRRM7XVDPox8Aqe4uKRCcD89nEzTxH/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Demo Video
          </a>

          <a
            href="https://github.com/Jharwal77/prowider-mini-lead-system"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>

        </div>

      </div>

  
<div className="project-card">

  <h3>
    AI Resume Bullet Generator
  </h3>

  <p>
    AI-powered full-stack web application built using
    React.js, Node.js, Express.js and Google Gemini AI.

    Generates ATS-friendly resume bullet points from
    project details instantly using AI, helping students
    and developers create professional resumes with
    impactful and optimized descriptions.

    Deployed on Vercel and Render with a responsive
    modern user interface.
  </p>

  <div className="project-links">

    <a
      href="https://github.com/Jharwal77/ai-resume-bullet-generator"
      target="_blank"
      rel="noreferrer"
    >
      GitHub Repo
    </a>

    <a
      href="https://ai-resume-bullet-generator.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
    </a>

  </div>

</div>

    </section>
  );
}

export default Projects;
