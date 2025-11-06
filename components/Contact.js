'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih atas pesan Anda! Saya akan membalas secepat mungkin.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialMedia = [
    {
      icon: 'fab fa-youtube',
      name: 'YouTube',
      url: 'https://youtube.com/@riyoo_xd1?si=tY3Zan5gQiIlMaTa',
      username: '@riyoo_xd1'
    },
    {
      icon: 'fab fa-tiktok',
      name: 'TikTok',
      url: 'https://tiktok.com/@riyo_xd',
      username: '@riyo_xd'
    },
    {
      icon: 'fab fa-discord',
      name: 'Discord',
      url: 'https://discord.gg/MepY4jpG',
      username: 'Server Discord'
    }
  ]

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Hubungi Saya</h2>
          <p>Silakan menghubungi saya untuk kolaborasi atau pertanyaan</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Alamat Email</h3>
                <p>riyosenpai0@gmail.com</p>
              </div>
            </div>

            <div className="social-media">
              <h3>Media Sosial</h3>
              <div className="social-links">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <div className="social-icon">
                      <i className={social.icon}></i>
                    </div>
                    <div className="social-info">
                      <div className="social-name">{social.name}</div>
                      <div className="social-username">{social.username}</div>
                    </div>
                    <i className="fas fa-arrow-right social-arrow"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap Anda"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Alamat Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan alamat email Anda"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda di sini"
                className="form-control"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Kirim Pesan
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .contact {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .contact-content {
          max-width: 800px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--card);
          border-radius: 15px;
          box-shadow: var(--shadow);
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          background: var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 1.2rem;
        }
        
        .contact-details h3 {
          margin-bottom: 0.5rem;
          color: var(--text);
          font-size: 1.1rem;
        }
        
        .contact-details p {
          color: var(--light-text);
        }
        
        .social-media h3 {
          margin-bottom: 1rem;
          color: var(--text);
          font-size: 1.1rem;
        }
        
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: var(--card);
          border-radius: 12px;
          text-decoration: none;
          color: var(--text);
          transition: all 0.3s ease;
          box-shadow: var(--shadow);
        }
        
        .social-link:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 25px rgba(255, 133, 162, 0.2);
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          background: var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 1.1rem;
        }
        
        .social-info {
          flex: 1;
        }
        
        .social-name {
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        
        .social-username {
          font-size: 0.8rem;
          color: var(--light-text);
        }
        
        .social-arrow {
          color: var(--accent);
          transition: transform 0.3s ease;
        }
        
        .social-link:hover .social-arrow {
          transform: translateX(3px);
        }
        
        .contact-form {
          background: var(--card);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text);
        }
        
        .form-control {
          width: 100%;
          padding: 1rem;
          border: 2px solid var(--secondary);
          border-radius: 10px;
          background: white;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-control:focus {
          outline: none;
          border-color: var(--accent);
        }
        
        textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .contact-item {
            flex-direction: column;
            text-align: center;
          }
          
          .social-link {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
