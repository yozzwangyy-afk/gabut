export default function Projects() {
  const projects = [
    {
      icon: 'fas fa-film',
      title: 'Anime Moment Edits',
      description: 'Video editing momen-momen terbaik dari anime populer dengan transisi kreatif dan efek visual yang menarik.'
    },
    {
      icon: 'fas fa-video',
      title: 'Short Content Anime',
      description: 'Konten pendek untuk platform media sosial yang fokus pada scene-scene ikonik dari berbagai anime.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'AMV Creative',
      description: 'Anime Music Video dengan konsep unik yang menggabungkan visual anime dengan musik yang sesuai.'
    }
  ]

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Project Saya</h2>
          <p>Karya terbaik dalam dunia konten anime</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .project-card {
          background: var(--card);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
          text-align: center;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
        }
        
        .project-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--accent);
        }
        
        .project-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text);
        }
        
        .project-card p {
          color: var(--light-text);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
