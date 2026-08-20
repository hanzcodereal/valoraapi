'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import settings from '../../src/config/setting.js'

export default function TqtoPage() {
  const [rotate, setRotate] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)')

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    setRotate(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    setRotate('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  const dev = settings.tqto?.[0]

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="container" style={{ marginTop: '2.5rem', marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
            Credits
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Pengembang & dukungan resmi {settings.name}.
          </p>
        </div>

        {dev && (
          <div style={{ maxWidth: '450px', margin: '0 auto' }}>
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '2.25rem 1.75rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                transform: rotate,
                transition: 'transform 0.1s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '110px', height: '110px', margin: '0 auto 1.25rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary)', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)' }}>
                <img
                  src={dev.image}
                  alt={dev.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                {dev.name}
              </h2>

              <div style={{
                display: 'inline-block',
                background: '#eff6ff',
                color: '#2563eb',
                fontWeight: 700,
                fontSize: '0.75rem',
                padding: '4px 12px',
                borderRadius: '20px',
                marginBottom: '1rem',
                border: '1px solid #bfdbfe'
              }}>
                {dev.role}
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {dev.desc}
              </p>

              <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                <a href={dev.support} target="_blank" rel="noopener noreferrer" style={{ padding: '8px 16px', borderRadius: '8px', background: '#fef3c7', color: '#b45309', border: '1px solid #fde68a', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  Support via Saweria
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
      }
