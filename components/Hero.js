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
              <Image 
                src="https://files.catbox.moe/uzee63.jpg" 
                alt="Riyo" 
                width={200}
                height={200}
                className={`profile-img ${isHovered ? 'hovered' : ''}`}
                priority
              />
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
          padding: 180px 0 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 133, 162, 0.1) 0%, transparent 50%);
          pointer-events: none;
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
        
        .profile-container {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
        }
        
        .profile-frame {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          padding: 8px;
          background: linear-gradient(135deg, var(--accent), #ff6b95, #ffd6e7);
          animation: rotateGradient 8s linear infinite;
          transition: all 0.5s ease;
        }
        
        .profile-frame.hovered {
          transform: scale(1.05);
          animation-duration: 4s;
        }
        
        @keyframes rotateGradient {
          0% {
            background: linear-gradient(135deg, var(--accent), #ff6b95, #ffd6e7);
          }
          25% {
            background: linear-gradient(135deg, #ff6b95, #ffd6e7, var(--accent));
          }
          50% {
            background: linear-gradient(135deg, #ffd6e7, var(--accent), #ff6b95);
          }
          75% {
            background: linear-gradient(135deg, var(--accent), #ffd6e7, #ff6b95);
          }
          100% {
            background: linear-gradient(135deg, var(--accent), #ff6b95, #ffd6e7);
          }
        }
        
        .profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid white;
          transition: all 0.5s ease;
          filter: grayscale(0.1);
        }
        
        .profile-img.hovered {
          transform: scale(1.02);
          filter: grayscale(0) brightness(1.05);
          box-shadow: 0 0 30px rgba(255, 133, 162, 0.4);
        }
        
        .profile-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 133, 162, 0.2) 0%, transparent 70%);
          opacity: 0;
          transition: all 0.5s ease;
          z-index: -1;
        }
        
        .profile-container:hover .profile-glow {
          opacity: 1;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
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
          font-size: 1.2rem;
          animation: float 3s ease-in-out infinite;
          opacity: 0.7;
        }
        
        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .element-2 {
          top: 15%;
          right: 10%;
          animation-delay: 0.5s;
        }
        
        .element-3 {
          bottom: 25%;
          left: 5%;
          animation-delay: 1s;
        }
        
        .element-4 {
          bottom: 20%;
          right: 15%;
          animation-delay: 1.5s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(5px) rotate(-5deg);
          }
        }
        
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--accent), #ff6b95);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textShine 3s ease-in-out infinite;
        }
        
        @keyframes textShine {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .subtitle {
          font-size: 1.3rem;
          color: var(--accent);
          margin-bottom: 1.5rem;
          font-weight: 600;
          animation: subtitleFade 2s ease-in-out;
        }
        
        @keyframes subtitleFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .description {
          font-size: 1.1rem;
          color: var(--light-text);
          margin-bottom: 2.5rem;
          line-height: 1.8;
          animation: descriptionSlide 1s ease 0.5s both;
        }
        
        @keyframes descriptionSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .btn-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          animation: buttonsPop 1s ease 0.8s both;
        }
        
        @keyframes buttonsPop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .btn {
          padding: 12px 30px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn:hover::before {
          left: 100%;
        }
        
        .btn-primary {
          background: var(--accent);
          color: white;
          box-shadow: var(--shadow);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(255, 133, 162, 0.4);
        }
        
        .btn-outline {
          border: 2px solid var(--accent);
          color: var(--accent);
          background: transparent;
        }
        
        .btn-outline:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-2px);
        }
        
        .stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 2rem;
          animation: statsFade 1s ease 1s both;
        }
        
        @keyframes statsFade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stat-item {
          text-align: center;
          position: relative;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          display: block;
          transition: all 0.3s ease;
        }
        
        .stat-item:hover .stat-number {
          transform: scale(1.1);
          text-shadow: 0 0 10px rgba(255, 133, 162, 0.3);
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--light-text);
          transition: color 0.3s ease;
        }
        
        .stat-item:hover .stat-label {
          color: var(--text);
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 150px 0 80px;
          }
          
          h1 {
            font-size: 2.2rem;
          }
          
          .profile-frame {
            width: 180px;
            height: 180px;
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
          
          .floating-element {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
