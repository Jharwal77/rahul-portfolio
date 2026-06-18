function Explore() {

  const items = [
    {
      title: "Resume",
      desc: "Download Resume",
      link: "/RAHUL_MEENA_RESUME_.pdf"

    },

    {
      title: "GitHub",
      desc: "View Repositories",
      link: "https://github.com/Jharwal77"
    },

    {
      title: "LinkedIn",
      desc: "Professional Profile",
      link: "https://www.linkedin.com/in/rahuljharwal2468/"
    },

    {
      title: "LeetCode",
      desc: "Problem Solving",
      link: "https://leetcode.com/u/JHARWAL/"
    },

    {
      title: "ViewTube",
      desc: "Live Demo",
      link: "https://viewtube-six.vercel.app/"
    },

    {
      title: "Prowider",
      desc: "Live Demo",
      link: "https://prowider-mini-lead-system-black.vercel.app/"
    },

    {
      title: "AI Chat Room",
      desc: "GitHub Repository",
      link: "https://github.com/Jharwal77/ai-private-chat-room"
    }
  ];

  return (
    <section id="explore">

      <h2 className="section-title">
        Explore My Work
      </h2>

      <div className="explore-grid">

        {items.map((item,index)=>(
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="explore-card"
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </a>
        ))}

      </div>

    </section>
  );
}

export default Explore;
