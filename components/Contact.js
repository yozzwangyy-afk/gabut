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
    alert('Terima kasih! Pesan Anda telah dikirim. Saya akan membalas secepatnya!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Hubungi Saya</h2>
          <p>Mari berkolaborasi membuat konten anime yang amazing!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>riyosenpai0@gmail.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Anda"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Pesan Anda"
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
          max-width: 600px;
          margin: 0 auto;
          display: grid;
          gap: 3rem;
        }
        
        .contact-info {
          text-align: center;
        }
        
        .contact-item {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 2rem;
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
        
        .contact-form {
          background: var(--card);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
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
          .contact-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
