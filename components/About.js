'use client'

export default function About() {
  const hobbies = [
    { icon: 'fas fa-tv', label: 'Menonton Anime' },
    { icon: 'fas fa-video', label: 'Membuat Konten Kreatif' },
    { icon: 'fas fa-code', label: 'Pemrograman' }
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="section-title">
            <h2>Tentang Saya</h2>
          </div>
          <p className="description">
            Saya adalah seorang content creator yang berfokus pada dunia anime. 
            Senang membuat konten visual kreatif untuk berbagi kecintaan terhadap 
            anime dengan komunitas yang lebih luas.
          </p>
          <div className="hobbies">
            <h4>Hobi & Minat</h4>
            <div className="hobbies-list">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby">
                  <i className={hobby.icon}></i> 
                  <span>{hobby.label}</span>
                </div>
              ))}
            </div>
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
        
        .hobbies h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--text);
        }
        
        .hobbies-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
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
        
        @media (max-width: 768px) {
          .hobbies-list {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  )
}
