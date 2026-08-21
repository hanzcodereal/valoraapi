'use client'

import { useEffect, useState } from 'react'

export default function CodePreview() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    fetch('/api/stats?apikey=valora-api')
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="code-preview">
      <div className="container">
        <div className="code-box reveal">
          <div className="code-header">
            <div className="code-dots">
              <div className="code-dot red"></div>
              <div className="code-dot yellow"></div>
              <div className="code-dot green"></div>
            </div>
            <div className="code-title">GET /api/stats</div>
          </div>

          <div className="code-body" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', lineHeight: '1.6' }}>
            <div style={{ color: '#64748b', marginBottom: '4px' }}>// Quick request example</div>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>curl</span> -X GET <span style={{ color: '#e2e8f0' }}>"https://valora-api.vercel.app/api/stats?apikey=valora-api"</span>
            </div>

            <div style={{ color: '#64748b', marginBottom: '4px' }}>
              {error ? '// Request failed' : data ? '// Response 200 OK (live)' : '// Fetching live response...'}
            </div>
            <pre style={{ margin: 0, padding: '12px 14px', background: '#020617', borderRadius: '8px', border: '1px solid #1e293b', color: '#f8fafc', overflowX: 'auto', minHeight: '120px' }}>
              {error
                ? `// Failed to fetch: ${error}`
                : data
                  ? JSON.stringify(data, null, 4)
                  : 'Loading...'}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
            }
