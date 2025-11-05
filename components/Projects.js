'use client'
import { useState } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Anime Review Series",
      description: "Seri video review anime musiman dengan analisis mendalam tentang plot, karakter, dan animasi. Setiap episode membahas anime terbaru dengan sudut pandang yang unik.",
      image: "🎬",
      tags: ["Video", "Review", "Analisis", "Entertainment"],
      category: "video",
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Podcast Anime Community",
      description: "Podcast mingguan membahas trending topic di dunia anime dengan tamu spesial dari industri. Diskusi santai tapi informatif untuk para penggemar anime.",
      image: "🎙️",
      tags: ["Audio", "Diskusi", "Komunitas", "Podcast"],
      category: "audio",
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Anime Blog & Articles",
      description: "Artikel mendalam tentang teori anime, karakter analysis, dan rekomendasi series terbaik. Konten tulisan yang informatif dan mudah dipahami.",
      image: "📝",
      tags: ["Tulisan", "Analisis", "Rekomendasi", "Blog"],
      category: "writing",
      link: "#"
    },
    {
      id: 4,
      title: "Anime Community Platform",
      description: "Membangun platform komunitas online untuk penggemar anime berdiskusi dan berbagi konten. Fitur forum, event, dan konten eksklusif.",
      image: "👥",
      tags: ["Komunitas", "Platform", "Social", "Development"],
      category: "development",
      link: "#"
    },
    {
      id: 5,
      title: "Anime Music Covers",
      description: "Kover musik anime dengan arrangement yang kreatif. Menghidupkan kembali OST anime favorit dengan sentuhan personal.",
      image: "🎵",
      tags: ["Music", "Cover", "Creative", "Entertainment"],
      category: "music",
      link: "#"
    },
    {
      id: 6,
      title: "Anime Art & Illustration",
      description: "Karya seni digital dan ilustrasi bertema anime. Fanart karakter favorit dengan style yang unik dan personal.",
      image: "🎨",
      tags: ["Art", "Illustration", "Digital", "Creative"],
      category: "art",
      link: "#"
    }
  ]

  const filters = [
    { key: 'all', label: 'Semua Project' },
    { key: 'video', label: 'Video Content' },
    { key: 'audio', label: 'Audio Podcast' },
    { key: 'writing', label: 'Writing' },
    { key: 'development', label: 'Development' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Project Konten Saya</h2>
          <p className="section-subtitle">Karya dan project terbaik yang telah saya buat</p>
        </div>

        <div className="projects-filter">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-header">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-badges">
                  {project.featured && (
                    <span className="featured-badge">
                      <i className="fas fa-star"></i> Featured
                    </span>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.link} className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                    Lihat Project
                  </a>
                  <button className="project-like">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Tertarik Berkolaborasi?</h3>
          <p>Mari buat project anime yang amazing bersama!</p>
          <a href="#contact" className="btn">
            <i className="fas fa-handshake"></i>
            Ayo Kolaborasi!
          </a>
        </div>
      </div>
      <style jsx>{`
        .projects {
          background: var(--gradient);
        }
        
        .projects-filter {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 10px 20px;
          border: 2px solid var(--secondary-color);
          background: transparent;
          color: var(--text-color);
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .filter-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }
        
        .filter-btn.active {
          background: var(--accent-color);
          border-color: var(--accent-color);
          color: white;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        .project-card {
          background: var(--card-bg);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          position: relative;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255, 133, 162, 0.2);
        }
        
        .project-card.featured {
          border: 2px solid var(--accent-color);
        }
        
        .project-header {
          position: relative;
          background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
          padding: 30px;
          text-align: center;
        }
        
        .project-image {
          font-size: 3rem;
        }
        
        .project-badges {
          position: absolute;
          top: 15px;
          right: 15px;
        }
        
        .featured-badge {
          background: white;
          color: var(--accent-color);
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .featured-badge i {
          margin-right: 5px;
        }
        
        .project-content {
          padding: 25px;
        }
        
        .project-content h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: var(--text-color);
        }
        
        .project-content p {
          color: var(--light-text);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .tag {
          background: var(--secondary-color);
          color: var(--text-color);
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .project-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .project-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        
        .project-link:hover {
          color: #ff6b95;
        }
        
        .project-like {
          background: none;
          border: none;
          color: var(--light-text);
          cursor: pointer;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }
        
        .project-like:hover {
          color: var(--accent-color);
        }
        
        .projects-cta {
          text-align: center;
          background: var(--card-bg);
          padding: 40px;
          border-radius: 20px;
          box-shadow: var(--shadow);
        }
        
        .projects-cta h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: var(--text-color);
        }
        
        .projects-cta p {
          color: var(--light-text);
          margin-bottom: 20px;
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .projects-filter {
            gap: 10px;
          }
          
          .filter-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}
