'use client'
import { useEffect, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: 'Video Editing', level: 90, icon: 'fas fa-video' },
    { name: 'Content Creation', level: 95, icon: 'fas fa-film' },
    { name: 'Graphic Design', level: 85, icon: 'fas fa-paint-brush' },
    { name: 'Web Development', level: 80, icon: 'fas fa-code' },
    { name: 'Social Media', level: 90, icon: 'fas fa-hashtag' },
    { name: 'Community Management', level: 85, icon: 'fas fa-users' }
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Tentang Saya</h2>
          <p className="section-subtitle">Mengenal lebih dekat tentang passion dan perjalanan saya</p>
        </div>
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'fade-in-up' : ''}`}>
            <div className="about-intro">
              <h3>Halo! Saya Riyo 👋</h3>
              <p>
                Seorang <strong>Anime Content Creator</strong> yang telah aktif membuat konten selama 3 tahun. 
                Perjalanan saya dimulai dari kecintaan terhadap anime dan keinginan untuk berbagi pengalaman 
                dengan komunitas yang lebih luas.
              </p>
              <p>
                Dengan latar belakang dalam pembuatan konten digital, saya menggabungkan pengetahuan tentang 
                anime dengan keterampilan teknis untuk menghasilkan konten yang informatif dan menghibur 
                bagi para penggemar anime.
              </p>
            </div>

            <div className="hobbies-section">
              <h4>Hobi & Minat 🎯</h4>
              <div className="hobbies">
                <div className="hobby"><i className="fas fa-tv"></i> Nonton Anime</div>
                <div className="hobby"><i className="fas fa-video"></i> Membuat Konten</div>
                <div className="hobby"><i className="fas fa-code"></i> Ngoding & Development</div>
                <div className="hobby"><i className="fas fa-gamepad"></i> Gaming</div>
                <div className="hobby"><i className="fas fa-book"></i> Baca Manga & Light Novel</div>
                <div className="hobby"><i className="fas fa-music"></i> Dengar OST Anime</div>
                <div className="hobby"><i className="fas fa-palette"></i> Digital Art</div>
                <div className="hobby"><i className="fas fa-utensils"></i> Kuliner Jepang</div>
              </div>
            </div>

            <div className="skills-section">
              <h4>Keterampilan 🛠️</h4>
              <div className="skills">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <i className={skill.icon}></i>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`about-image ${isVisible ? 'fade-in-up' : ''}`}>
            <div className="image-wrapper">
              <img 
                src="https://i.pinimg.com/736x/9a/7c/8c/9a7c8c8e8e8e8e8e8e8e8e8e8e8e8e8e.jpg" 
                alt="Riyo bekerja sebagai content creator" 
                className="about-img"
              />
              <div className="experience-badge">
                <div className="badge-content">
                  <span className="years">3+</span>
                  <span className="text">Tahun Pengalaman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--light-text);
          margin-top: 10px;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: start;
        }
        
        .about-text {
          opacity: 0;
        }
        
        .about-intro h3 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: var(--text-color);
        }
        
        .about-intro p {
          margin-bottom: 20px;
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--light-text);
        }
        
        .hobbies-section, .skills-section {
          margin-top: 40px;
        }
        
        .hobbies-section h4, .skills-section h4 {
          font-size: 1.4rem;
          margin-bottom: 20px;
          color: var(--text-color);
        }
        
        .hobbies {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .hobby {
          background: var(--card-bg);
          padding: 15px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
        }
        
        .hobby:hover {
          transform: translateY(-3px);
        }
        
        .hobby i {
          color: var(--accent-color);
          font-size: 1.1rem;
        }
        
        .skills {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .skill-item {
          background: var(--card-bg);
          padding: 20px;
          border-radius: 12px;
          box-shadow: var(--shadow);
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .skill-info {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }
        
        .skill-info i {
          color: var(--accent-color);
          font-size: 1.1rem;
        }
        
        .skill-percentage {
          color: var(--accent-color);
          font-weight: 700;
        }
        
        .skill-bar {
          height: 8px;
          background: var(--secondary-color);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          background: linear-gradient(45deg, var(--accent-color), #ff6b95);
          border-radius: 10px;
          transition: width 1.5s ease-in-out;
        }
        
        .about-image {
          opacity: 0;
          animation-delay: 0.4s;
        }
        
        .image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }
        
        .about-img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }
        
        .image-wrapper:hover .about-img {
          transform: scale(1.05);
        }
        
        .experience-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--accent-color);
          color: white;
          padding: 15px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(255, 133, 162, 0.3);
        }
        
        .years {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
        }
        
        .text {
          font-size: 0.8rem;
          opacity: 0.9;
        }
        
        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .about-image {
            order: -1;
          }
          
          .hobbies {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .hobbies {
            grid-template-columns: 1fr 1fr;
          }
          
          .experience-badge {
            padding: 10px;
          }
          
          .years {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
