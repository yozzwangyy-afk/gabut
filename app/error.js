'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh',
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h2 style={{ color: '#d32f2f' }}>Terjadi Kesalahan!</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Maaf, terjadi kesalahan dalam aplikasi. Silakan coba lagi.
      </p>
      <button
        onClick={reset}
        className="btn btn-primary"
      >
        Coba Lagi
      </button>
    </div>
  )
}
