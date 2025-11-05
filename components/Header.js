'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <i className="fas fa-star"></i>
            <span>Riyo</span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>Tentang</Link></li>
            <li><Link href="#projects" onClick={() => setIsMenuOpen(false)}>Project</Link></li>
            <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Kontak</Link></li>
          </ul>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .header.scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 20px rgba(255, 133, 162, 0.2);
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-color);
          display: flex;
          align-items: center;
        }
        
        .logo i {
          margin-right: 10px;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }
        
        .nav-links a {
          text-decoration: none;
          color: var(--text-color);
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: var(--accent-color);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--accent-color);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .hamburger {
          display: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: var(--text-color);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: var(--shadow);
            gap: 15px;
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .nav-links li {
            margin: 0;
          }
          
          .nav-links a {
            display: block;
            padding: 10px 0;
          }
          
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}
