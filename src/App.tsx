import { useState, useEffect } from 'react'

const Y = '#f5e400'
const GD = '#0a1f10'
const GM = '#1a5c3a'
const GB = 'rgba(245,228,0,0.12)'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ background: GD, color: '#fff', fontFamily: "'Inter', system-ui, sans-serif", overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(10,31,16,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${GB}` : '1px solid transparent',
        transition: 'all 0.25s',
        padding: '0 32px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <img src="/healthleticx-website/logo.png" alt="Healthletics" style={{ height: 36, objectFit: 'contain' }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', gap: 24 }}>
              {[['#about', 'Story'], ['#links', 'Links'], ['#coaching', 'Coaching']].map(([h, l]) => (
                <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none', fontWeight: 500, letterSpacing: 0.2 }}>{l}</a>
              ))}
            </div>
            <a href="https://coaching.healthletics.de" style={{ background: Y, color: GD, padding: '8px 18px', borderRadius: 7, fontWeight: 700, fontSize: 13, textDecoration: 'none', letterSpacing: 0.3 }}>
              Coaching
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '0 32px', maxWidth: 1100, margin: '0 auto', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ paddingTop: 80, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            {/* Left */}
            <div>
              <div style={{ display: 'inline-block', background: Y, color: GD, fontSize: 10, fontWeight: 800, padding: '4px 10px', borderRadius: 4, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>
                @healthleticx
              </div>
              <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.0, letterSpacing: -2, marginBottom: 24, textTransform: 'uppercase' }}>
                Gesund.<br />
                <span style={{ color: Y }}>Stark.</span><br />
                Echt.
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 36, maxWidth: 420 }}>
                Keine Ausreden. Kein Bullshit. Nur ehrliche Inhalte zu Training, Ernährung und mentalem Wachstum — für alle, die es wirklich wollen.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href="https://coaching.healthletics.de" style={{ background: Y, color: GD, padding: '13px 28px', borderRadius: 8, fontWeight: 800, fontSize: 14, textDecoration: 'none', letterSpacing: 0.3 }}>
                  Coaching buchen
                </a>
                <a href="#links" style={{ border: `1px solid rgba(255,255,255,0.15)`, color: 'rgba(255,255,255,0.7)', padding: '13px 28px', borderRadius: 8, fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>
                  Community
                </a>
              </div>
            </div>
            {/* Right — logo large */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: GM, border: `2px solid rgba(245,228,0,0.2)`, borderRadius: 20, padding: 40, width: '100%', maxWidth: 380, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/healthleticx-website/logo.png" alt="HLX" style={{ width: '100%', objectFit: 'contain' }}
                  onError={e => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                    el.parentElement!.innerHTML = '<div style="font-size:52px;font-weight:900;color:#f5e400;letter-spacing:-1px;text-align:center">HLX</div>'
                  }} />
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div style={{ display: 'flex', gap: 0, marginTop: 72, borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: 32 }}>
            {[
              { val: 'Training', sub: 'Workouts für jeden Level' },
              { val: 'Ernährung', sub: 'Alltagstauglich & ehrlich' },
              { val: 'Mindset', sub: 'Mental stark werden' },
              { val: 'Community', sub: 'Für dich, für alle' },
            ].map((s, i) => (
              <div key={s.val} style={{ flex: 1, padding: '0 24px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: Y, marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 32px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: Y, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Die Story</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.5 }}>Warum Healthletics?</h2>
          </div>
          <div>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 20 }}>
              Healthletics steht für ein gesundes Leben ohne Kompromisse — und ohne dass es kompliziert sein muss. Sport, Ernährung, mentale Gesundheit: Das gehört für uns zusammen.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85 }}>
              Auf Instagram, TikTok und YouTube teilen wir täglich ehrlichen Content. Keine gefilterte Traumwelt — sondern das, was wirklich funktioniert.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(245,228,0,0.2), transparent)', margin: '0 32px' }} />

      {/* SOCIAL LINKS */}
      <section id="links" style={{ padding: '80px 32px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: Y, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Community</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 8 }}>Überall dabei sein.</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.7 }}>Täglich neuer Content. Folge uns auf allen Plattformen.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SOCIALS.map(s => <SocialBtn key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(245,228,0,0.2), transparent)', margin: '0 32px' }} />

      {/* COACHING */}
      <section id="coaching" style={{ padding: '80px 32px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ background: GM, border: `1px solid rgba(245,228,0,0.2)`, borderRadius: 20, padding: '52px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: Y, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>1:1 Coaching</div>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12 }}>Deine Transformation. Jetzt.</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, maxWidth: 480, lineHeight: 1.75 }}>
              Training, Ernährung, Mindset — alles auf dich zugeschnitten. Kein Copy-Paste-Plan. Echte Betreuung, echte Ergebnisse.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <a href="https://coaching.healthletics.de" style={{ display: 'block', background: Y, color: GD, padding: '15px 32px', borderRadius: 10, fontWeight: 800, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: 0.3 }}>
              Jetzt starten →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, padding: '24px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <img src="/healthleticx-website/logo.png" alt="Healthletics" style={{ height: 28, objectFit: 'contain' }}
            onError={e => { (e.target as HTMLImageElement).replaceWith(Object.assign(document.createElement('span'), { textContent: 'HLX', style: 'color:#f5e400;font-weight:900;font-size:16px' })) }} />
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="mailto:healthleticx@web.de" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none' }}>healthleticx@web.de</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none' }}>Impressum</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none' }}>Datenschutz</a>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>© 2025 Healthletics</span>
        </div>
      </footer>
    </div>
  )
}

function SocialBtn({ label, handle, icon, color, url }: { label: string; handle: string; icon: string; color: string; url: string }) {
  const [hov, setHov] = useState(false)
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 14, background: hov ? 'rgba(245,228,0,0.06)' : 'rgba(255,255,255,0.03)', border: `1px solid ${hov ? 'rgba(245,228,0,0.25)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 11, padding: '12px 16px', textDecoration: 'none', color: '#fff', transition: 'all 0.15s' }}>
      <div style={{ width: 38, height: 38, borderRadius: 8, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 13 }}>{label}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{handle}</div>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </a>
  )
}

const SOCIALS = [
  { label: 'Instagram', handle: '@healthleticx', icon: '📸', color: '#833ab4', url: 'https://www.instagram.com/healthleticx' },
  { label: 'TikTok', handle: '@healthleticx', icon: '🎵', color: '#010101', url: 'https://www.tiktok.com/@healthleticx' },
  { label: 'YouTube', handle: '@healthleticx', icon: '▶', color: '#ff0000', url: 'https://www.youtube.com/@healthleticx' },
  { label: 'WhatsApp Community', handle: 'Kostenlos beitreten', icon: '💬', color: '#25d366', url: 'https://whatsapp.com/channel/0029VbCZ3Jx0VycHkB8WfZ1o' },
  { label: 'Telegram', handle: 't.me/healthleticx', icon: '✈', color: '#0088cc', url: 'https://t.me/healthleticx' },
  { label: 'E-Mail', handle: 'healthleticx@web.de', icon: '✉', color: '#1a5c3a', url: 'mailto:healthleticx@web.de' },
]
