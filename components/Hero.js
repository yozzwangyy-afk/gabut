'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <div 
            className="profile-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
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
                  style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                  }}
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
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-content {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .hero-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .profile-container {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
        }

        .image-wrapper {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.8);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .profile-container:hover .image-wrapper {
          border-color: rgba(255, 255, 255, 1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          transform: scale(1.05);
        }

        /* Pastikan gambar melingkar sempurna */
        :global(.profile-img) {
          border-radius: 50% !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          transition: all 0.5s ease !important;
        }

        .profile-img.hovered {
          filter: grayscale(0) brightness(1.1) contrast(1.05);
        }

        .profile-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          opacity: 0;
          transition: all 0.5s ease;
          z-index: 1;
          filter: blur(20px);
        }

        .profile-container:hover .profile-glow {
          opacity: 0.6;
          width: 240px;
          height: 240px;
          animation: rotate 3s linear infinite;
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
          opacity: 0;
          transition: all 0.5s ease;
        }

        .profile-container:hover .floating-element {
          opacity: 1;
        }

        .element-1 {
          top: -20px;
          left: 50%;
          animation: float 3s ease-in-out infinite;
        }

        .element-2 {
          top: 50%;
          right: -20px;
          animation: float 3s ease-in-out infinite 0.5s;
        }

        .element-3 {
          bottom: -20px;
          left: 50%;
          animation: float 3s ease-in-out infinite 1s;
        }

        .element-4 {
          top: 50%;
          left: -20px;
          animation: float 3s ease-in-out infinite 1.5s;
        }

        h1 {
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .subtitle {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .btn-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: white;
          color: #667eea;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .btn-outline {
          border: 2px solid white;
          color: white;
          background: transparent;
        }

        .btn-outline:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }

        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .image-wrapper {
            width: 160px;
            height: 160px;
          }

          h1 {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .description {
            font-size: 1rem;
            padding: 0 1rem;
          }

          .btn-group {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 200px;
            justify-content: center;
          }

          .stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .profile-glow {
            width: 180px;
            height: 180px;
          }

          .profile-container:hover .profile-glow {
            width: 200px;
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .image-wrapper {
            width: 140px;
            height: 140px;
          }

          h1 {
            font-size: 1.8rem;
          }

          .profile-glow {
            width: 160px;
            height: 160px;
          }

          .profile-container:hover .profile-glow {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>
    </section>
  )
}
