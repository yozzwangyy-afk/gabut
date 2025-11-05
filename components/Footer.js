export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Project', href: '#projects' },
    { name: 'Kontak', href: '#contact' }
  ]

  const socialLinks = [
    { icon: 'fab fa-instagram', href: '#', name: 'Instagram' },
    { icon: 'fab fa-youtube', href: '#', name: 'YouTube' },
    { icon: 'fab fa-tiktok', href: '#', name: 'TikTok' },
    { icon: 'fab fa-twitter', href: '#', name: 'Twitter' },
    { icon: 'fab fa-discord', href: '#', name: 'Discord' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <i className="fas fa-star"></i>
                <span>Riyo</span>
              </div>
              <p className="brand-description">
                Anime Content Creator yang passionate dalam menciptakan konten 
                berkualitas untuk komunitas anime Indonesia.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="social-link"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Navigasi</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4>Layanan</h4>
                <ul>
                  <li><a href="#">Content Creation</a></li>
                  <li><a href="#">Video Editing</a></li>
                  <li><a href="#">Community Management</a></li>
                  <li><a href="#">Collaboration</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Contact Support</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <div className="newsletter-content">
              <h4>Stay Updated! ✨</h4>
              <p>Dapatkan update terbaru tentang konten anime dan project terbaru saya.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Riyo - Anime Content Creator. All rights reserved.</p>
            <p>Made with <i className="fas fa-heart" style={{color: '#ff85a2'}}></i> for the Anime Community</p>
          </div>
          
          <div className="footer-meta">
            <div className="meta-item">
              <i className="fas fa-code"></i>
              <span>Built with Next.js</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-paint-brush"></i>
              <span>Designed with Love</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--text-color) 0%, #3a2a35 100%);
          color: white;
          padding: 60px 0 20px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          margin-bottom: 40px;
        }
        
        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
        }
        
        .footer-brand .logo {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .footer-brand .logo i {
          margin-right: 10px;
        }
        
        .brand-description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 25px;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .social-link:hover {
          background: var(--accent-color);
          transform: translateY(-3px);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        
        .link-group h4 {
          color: var(--accent-color);
          margin-bottom: 20px;
          font-size: 1.1rem;
        }
        
        .link-group ul {
          list-style: none;
        }
        
        .link-group li {
          margin-bottom: 12px;
        }
        
        .link-group a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .link-group a:hover {
          color: var(--accent-color);
        }
        
        .link-group a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: var(--accent-color);
          transition: width 0.3s ease;
        }
        
        .link-group a:hover::after {
          width: 100%;
        }
        
        .footer-newsletter {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        
        .newsletter-content h4 {
          color: var(--accent-color);
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        
        .newsletter-content p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          font-size: 0.9rem;
        }
        
        .newsletter-form {
          display: flex;
          gap: 10px;
        }
        
        .newsletter-input {
          flex: 1;
          padding: 12px 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 0.9rem;
        }
        
        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .newsletter-input:focus {
          outline: none;
          border-color: var(--accent-color);
        }
        
        .newsletter-btn {
          padding: 12px 20px;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .newsletter-btn:hover {
          background: #ff6b95;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-copyright p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 5px;
          font-size: 0.9rem;
        }
        
        .footer-meta {
          display: flex;
          gap: 20px;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }
        
        .meta-item i {
          color: var(--accent-color);
        }
        
        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .footer-links {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .footer-meta {
            flex-direction: column;
            gap: 10px;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  )
}
