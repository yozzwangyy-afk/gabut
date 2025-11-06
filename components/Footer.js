export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: 'fab fa-youtube',
      url: 'https://youtube.com/@riyoo_xd1?si=tY3Zan5gQiIlMaTa',
      name: 'YouTube'
    },
    {
      icon: 'fab fa-tiktok',
      url: 'https://tiktok.com/@riyo_xd',
      name: 'TikTok'
    },
    {
      icon: 'fab fa-discord',
      url: 'https://discord.gg/MepY4jpG',
      name: 'Discord'
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo">
              <i className="fas fa-star"></i>
              <span>Riyo</span>
            </div>
            <p className="footer-description">
              Anime Content Creator yang berdedikasi menciptakan konten berkualitas 
              untuk komunitas anime.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Tautan Cepat</h4>
              <ul>
                <li><a href="#home">Beranda</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#about">Tentang</a></li>
                <li><a href="#contact">Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Riyo - Anime Content Creator. All rights reserved.</p>
          <p>Dibuat dengan <i className="fas fa-heart" style={{color: '#ff85a2'}}></i> untuk komunitas anime</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: var(--text);
          color: white;
          padding: 3rem 0 2rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer-info .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          max-width: 400px;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: var(--accent);
          transform: translateY(-3px);
        }
        
        .footer-links h4 {
          color: var(--accent);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .footer-links ul {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: var(--accent);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
        }
        
        .footer-bottom p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .footer-info {
            align-items: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}
