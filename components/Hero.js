'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
            <h1>Halo, Saya <span className="highlight">Riyo</span></h1>
            <p className="subtitle">Anime Content Creator & Creative Developer</p>
            <p>Passion untuk menciptakan konten anime yang menarik dan menghibur. Saya suka berbagi kecintaan pada anime melalui berbagai platform media dan teknologi kreatif.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">
                <i className="fas fa-rocket"></i> Lihat Project
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-paper-plane"></i> Hubungi Saya
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Video Konten</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Tahun Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Followers</div>
              </div>
            </div>
          </div>
          <div className={`hero-image ${isVisible ? 'float' : ''}`}>
            <div className="image-container">
              <Image 
                src="https://files.catbox.moe/uzee63.jpg" 
                alt="Riyo - Anime Content Creator" 
                width={400}
                height={400}
                className="profile-img"
                priority
              />
              <div className="floating-elements">
                <div className="floating-element element-1">✨</div>
                <div className="floating-element element-2">🎮</div>
                <div className="floating-element element-3">📺</div>
                <div className="floating-element element-4">🎨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 150px 0 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--gradient);
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .hero-text {
          opacity: 0;
          animation-delay: 0.2s;
        }
        
        h1 {
          font-size: 3.5rem;
          margin-bottom: 10px;
          color: var(--text-color);
          line-height: 1.2;
        }
        
        .highlight {
          color: var(--accent-color);
          background: linear-gradient(45deg, var(--accent-color), #ff6b95);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .subtitle {
          font-size: 1.4rem;
          color: var(--accent-color);
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        .hero-text p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: var(--light-text);
          line-height: 1.8;
        }
        
        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .hero-buttons .btn i {
          margin-right: 8px;
        }
        
        .hero-stats {
          display: flex;
          gap: 30px;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--light-text);
        }
        
        .hero-image {
          text-align: center;
          position: relative;
        }
        
        .image-container {
          position: relative;
          display: inline-block;
        }
        
        .profile-img {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          object-fit: cover;
          border: 8px solid var(--secondary-color);
          box-shadow: var(--shadow);
          position: relative;
          z-index: 2;
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .floating-element {
          position: absolute;
          font-size: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .element-2 {
          top: 20%;
          right: 10%;
          animation-delay: 0.5s;
        }
        
        .element-3 {
          bottom: 30%;
          left: 5%;
          animation-delay: 1s;
        }
        
        .element-4 {
          bottom: 20%;
          right: 15%;
          animation-delay: 1.5s;
        }
        
        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          
          h1 {
            font-size: 2.8rem;
          }
          
          .profile-img {
            width: 300px;
            height: 300px;
          }
          
          .hero-stats {
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 80px;
          }
          
          h1 {
            font-size: 2.2rem;
          }
          
          .subtitle {
            font-size: 1.2rem;
          }
          
          .profile-img {
            width: 250px;
            height: 250px;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-stats {
            gap: 20px;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
