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
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <Image 
            src="https://files.catbox.moe/uzee63.jpg" 
            alt="Riyo" 
            width={200}
            height={200}
            className="profile-img"
            priority
          />
          <h1>Halo, Saya Riyo</h1>
          <div className="subtitle">Anime Content Creator & Creative Developer</div>
          <p className="description">
            Passion untuk menciptakan konten anime yang menarik dan menghibur. 
            Saya suka berbagi kecintaan pada anime melalui berbagai platform 
            media dan teknologi kreatif.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i> Link Project
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-paper-plane"></i> Hubungi Saya
            </a>
          </div>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <div className="stat-label">Video Konten</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <div className="stat-label">Tahun Experience</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <div className="stat-label">Followers</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 180px 0 100px;
          text-align: center;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .profile-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--secondary);
          margin-bottom: 2rem;
          box-shadow: var(--shadow);
        }
        
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--accent), #ff6b95);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .subtitle {
          font-size: 1.3rem;
          color: var(--accent);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        
        .description {
          font-size: 1.1rem;
          color: var(--light-text);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }
        
        .btn-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 2rem;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          display: block;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--light-text);
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 150px 0 80px;
          }
          
          h1 {
            font-size: 2.2rem;
          }
          
          .stats {
            gap: 2rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .btn-group {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 200px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
