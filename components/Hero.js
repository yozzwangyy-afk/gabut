'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <div 
            className="profile-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`profile-frame ${isHovered ? 'hovered' : ''}`}>
              <div className="image-wrapper">
                <Image 
                  src="https://files.catbox.moe/uzee63.jpg" 
                  alt="Riyo - Anime Content Creator" 
                  width={200}
                  height={200}
                  className={`profile-img ${isHovered ? 'hovered' : ''}`}
                  priority
                />
              </div>
            </div>

            {/* Elemen melayang */}
            <div className="floating-elements">
              <div className="floating-element element-1">✨</div>
              <div className="floating-element element-2">🎮</div>
              <div className="floating-element element-3">📺</div>
              <div className="floating-element element-4">🎨</div>
            </div>

            {/* Efek glow */}
            <div className="profile-glow"></div>
          </div>

          <h1>Halo, Perkenalkan Saya Riyo</h1>
          <div className="subtitle">Anime Content Creator & Creative Developer</div>
          <p className="description">
            Saya memiliki passion dalam menciptakan konten anime yang menarik dan menghibur. 
            Senang berbagi kecintaan terhadap anime melalui berbagai platform media 
            dan teknologi kreatif.
          </p>

          <div className="btn-group">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i> Lihat Project Saya
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
              <div className="stat-label">Tahun Pengalaman</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <div className="stat-label">Pengikut</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 100vh;
          background: linear-gradient(135deg, var(--primary), #ffeef5);
          overflow: hidden;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .hero-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        h1 {
          font-size: 2.5rem;
          margin-top: 1.5rem;
          color: var(--text);
        }

        .subtitle {
          color: var(--light-text);
          font-size: 1.2rem;
          margin-top: 0.5rem;
        }

        .description {
          max-width: 600px;
          margin: 1.5rem auto;
          color: var(--light-text);
        }

        .btn-group {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .profile-container {
          position: relative;
          display: inline-block;
        }

        .profile-frame {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: var(--card);
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s ease;
          z-index: 2;
        }

        .profile-frame.hovered {
          transform: scale(1.05) rotate(2deg);
          box-shadow: 0 20px 40px rgba(255, 133, 162, 0.3);
        }

        .image-wrapper {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid white;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(img.profile-img) {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s ease;
          filter: grayscale(0.1);
        }

        :global(img.profile-img.hovered) {
          transform: scale(1.08);
          filter: grayscale(0) brightness(1.1);
        }

        /* Floating Elements */
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
          opacity: 0.8;
          animation: float 6s ease-in-out infinite;
        }

        .element-1 { top: -20px; left: 10%; animation-delay: 0s; }
        .element-2 { top: 20%; right: -20px; animation-delay: 1s; }
        .element-3 { bottom: 10%; left: -15px; animation-delay: 2s; }
        .element-4 { bottom: 0; right: 15%; animation-delay: 3s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        /* Glow efek */
        .profile-glow {
          position: absolute;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(255,133,162,0.4) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(40px);
          animation: pulse 3s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* Stats */
        .stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--light-text);
        }

        @media (max-width: 768px) {
          h1 { font-size: 2rem; }
          .image-wrapper { width: 160px; height: 160px; }
          .stats { flex-direction: column; gap: 1.2rem; }
        }
      `}</style>
    </section>
  )
}
