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
            <div className="floating-elements">
              <div className="floating-element element-1">✨</div>
              <div className="floating-element element-2">🎮</div>
              <div className="floating-element element-3">📺</div>
              <div className="floating-element element-4">🎨</div>
            </div>
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

        /* Pastikan elemen <img> dari Next.js melingkar */
        :global(img.profile-img) {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-img {
          transition: all 0.5s ease;
          filter: grayscale(0.1);
        }

        .profile-img.hovered {
          transform: scale(1.05);
          filter: grayscale(0) brightness(1.05);
        }

        /* ukuran lebih kecil di mobile */
        @media (max-width: 768px) {
          .image-wrapper {
            width: 160px;
            height: 160px;
          }
        }
      `}</style>
    </section>
  )
}
