'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('🎉 Terima kasih! Pesan Anda telah dikirim. Saya akan membalasnya secepatnya!')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'riyo.creator@email.com',
      link: 'mailto:riyo.creator@email.com'
    },
    {
      icon: 'fab fa-instagram',
      title: 'Instagram',
      value: '@riyo.anime',
      link: 'https://instagram.com/riyo.anime'
    },
    {
      icon: 'fab fa-youtube',
      title: 'YouTube',
      value: 'Riyo Anime Channel',
      link: 'https://youtube.com/c/RiyoAnime'
    },
    {
      icon: 'fab fa-discord',
      title: 'Discord',
      value: 'Riyo#1234',
      link: '#'
    },
    {
      icon: 'fab fa-twitter',
      title: 'Twitter',
      value: '@riyo_anime',
      link: 'https://twitter.com/riyo_anime'
    },
    {
      icon: 'fab fa-tiktok',
      title: 'TikTok',
      value: '@riyo.anime',
      link: 'https://tiktok.com/@riyo.anime'
    }
  ]

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Hubungi Saya</h2>
          <p className="section-subtitle">Mari berkolaborasi dan buat sesuatu yang amazing!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-header">
              <h3>Mari Terhubung! 🌟</h3>
              <p>
                Tertarik berkolaborasi atau punya project menarik? 
                Jangan ragu untuk menghubungi saya melalui platform berikut:
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.link} 
                  className="contact-method"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="method-icon">
                    <i className={method.icon}></i>
                  </div>
                  <div className="method-info">
                    <div className="method-title">{method.title}</div>
                    <div className="method-value">{method.value}</div>
                  </div>
                  <div className="method-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-stats">
              <div className="stat">
                <div className="stat-number">24h</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Project Success</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h3>Kirim Pesan</h3>
                <p>Isi form below dan saya akan membalas secepatnya!</p>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i>
                    Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control" 
                    required 
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control" 
                    required 
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fas fa-tag"></i>
                  Subjek Pesan
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control" 
                  required 
                  placeholder="Apa yang ingin Anda diskusikan?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i>
                  Pesan Anda
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control" 
                  required
                  rows="6"
                  placeholder="Ceritakan tentang project atau kolaborasi yang Anda inginkan..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .contact-header h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: var(--text-color);
        }
        
        .contact-header p {
          color: var(--light-text);
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 40px;
        }
        
        .contact-method {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: var(--card-bg);
          border-radius: 15px;
          text-decoration: none;
          color: var(--text-color);
          transition: all 0.3s ease;
          box-shadow: var(--shadow);
        }
        
        .contact-method:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 25px rgba(255, 133, 162, 0.2);
        }
        
        .method-icon {
          width: 50px;
          height: 50px;
          background: var(--secondary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.2rem;
        }
        
        .method-info {
          flex: 1;
        }
        
        .method-title {
          font-weight: 600;
          margin-bottom: 5px;
        }
        
        .method-value {
          color: var(--light-text);
          font-size: 0.9rem;
        }
        
        .method-arrow {
          color: var(--accent-color);
          transition: transform 0.3s ease;
        }
        
        .contact-method:hover .method-arrow {
          transform: translateX(5px);
        }
        
        .contact-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .contact-stats .stat {
          text-align: center;
          background: var(--card-bg);
          padding: 20px;
          border-radius: 15px;
          box-shadow: var(--shadow);
        }
        
        .contact-stats .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 5px;
        }
        
        .contact-stats .stat-label {
          font-size: 0.8rem;
          color: var(--light-text);
        }
        
        .contact-form-wrapper {
          background: var(--card-bg);
          padding: 40px;
          border-radius: 20px;
          box-shadow: var(--shadow);
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .form-header h3 {
          font-size: 1.6rem;
          margin-bottom: 10px;
          color: var(--text-color);
        }
        
        .form-header p {
          color: var(--light-text);
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--text-color);
        }
        
        .form-group label i {
          color: var(--accent-color);
        }
        
        .form-control {
          width: 100%;
          padding: 15px;
          border: 2px solid var(--secondary-color);
          border-radius: 10px;
          background: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(255, 133, 162, 0.1);
        }
        
        textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          width: 100%;
          padding: 15px;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .submit-btn:hover:not(:disabled) {
          background: #ff6b95;
          transform: translateY(-2px);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .submit-btn.submitting {
          background: var(--light-text);
        }
        
        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .contact-form-wrapper {
            padding: 30px 20px;
          }
          
          .contact-stats {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  )
}
