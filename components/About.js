export default function About() {
  const hobbies = [
    { icon: 'fas fa-tv', label: 'Nonton Anime' },
    { icon: 'fas fa-video', label: 'Buat Konten' },
    { icon: 'fas fa-code', label: 'Coding' }
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="section-title">
            <h2>Tentang Saya</h2>
          </div>
          <p className="description">
            Seorang content creator yang fokus pada dunia anime. Membuat konten visual 
            kreatif untuk berbagi kecintaan pada anime dengan komunitas.
          </p>
          <div className="hobbies">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby">
                <i className={hobby.icon}></i> {hobby.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        
        .description {
          font-size: 1.1rem;
          color: var(--light-text);
          margin-bottom: 2rem;
          line-height: 1.8;
        }
        
        .hobbies {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }
        
        .hobby {
          background: var(--secondary);
          padding: 0.8rem 1.5rem;
          border-radius: 20px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .hobby i {
          color: var(--accent);
        }
      `}</style>
    </section>
  )
}
