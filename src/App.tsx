import { useState, useEffect } from 'react'

const Y = '#f5e400'
const GD = '#0d2818'
const GM = '#1a5c3a'
const GC = '#163322'
const GB = 'rgba(245,228,0,0.15)'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ background: GD, color: '#fff', fontFamily: "'Inter', system-ui, sans-serif", overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(13,40,24,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? `1px solid ${GB}` : '1px solid transparent',
        transition: 'all 0.3s',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Logo />
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ display: 'flex', gap: 24 }}>
              {[['#about', 'Mission'], ['#socials', 'Community'], ['#coaching', 'Coaching']].map(([h, l]) => (
                <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>{l}</a>
              ))}
            </div>
            <a href="https://coaching.healthletics.de" style={{ background: Y, color: GD, padding: '9px 20px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              Coaching starten
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '140px 24px 80px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 50% at 50% 40%, ${GM}70 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,228,0,0.1)', border: `1px solid rgba(245,228,0,0.3)`, color: Y, fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 20, marginBottom: 40, letterSpacing: 1.2, textTransform: 'uppercase' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: Y, display: 'inline-block' }} />
          Gesundheit · Sport · Mentale Stärke
        </div>

        <div style={{ position: 'relative' }}>
          <HLXSvg />
        </div>

        <p style={{ position: 'relative', fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 540, margin: '36px auto 48px' }}>
          Hier dreht sich alles um Gesundheit, Sport und mentale Stärke — für dich, für euch, für alle. Ehrlicher Content. Echtes Coaching.
        </p>

        <div style={{ position: 'relative', display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://coaching.healthletics.de" style={{ background: Y, color: GD, padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Coaching starten →
          </a>
          <a href="#socials" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 500, fontSize: 15, textDecoration: 'none' }}>
            Community joinen
          </a>
        </div>

        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.25)', fontSize: 11, letterSpacing: 1 }}>
          <span>SCROLL</span>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)' }} />
        </div>
      </section>

      {/* PILLARS */}
      <section id="about" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <Tag>Was dich erwartet</Tag>
        <h2 style={{ fontSize: 34, fontWeight: 700, textAlign: 'center', marginBottom: 48, letterSpacing: -0.5 }}>Alles, was du brauchst — an einem Ort.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
          {PILLARS.map(p => (
            <div key={p.title} style={{ background: GC, border: `1px solid ${GB}`, borderRadius: 16, padding: '28px 22px' }}>
              <div style={{ fontSize: 34, marginBottom: 14 }}>{p.emoji}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: Y }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <Tag>Unsere Mission</Tag>
            <h2 style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 20 }}>Gesundheit für alle — nicht nur für die Elite.</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
              Healthletics entstand aus der Überzeugung, dass ein gesundes Leben kein Luxus ist. Kein teures Fitnessstudio, keine komplizierten Diäten — nur ehrlicher, alltagstauglicher Content.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, fontSize: 15 }}>
              Wir verbinden Sport, Ernährung und mentale Gesundheit — weil wir wissen, dass alles zusammenhängt.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {STATS.map(s => (
              <div key={s.label} style={{ background: GC, border: `1px solid ${GB}`, borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: Y, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section id="socials" style={{ padding: '80px 24px', maxWidth: 520, margin: '0 auto' }}>
        <Tag>Community</Tag>
        <h2 style={{ fontSize: 34, fontWeight: 700, textAlign: 'center', marginBottom: 10, letterSpacing: -0.5 }}>Folge uns überall.</h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: 36, fontSize: 15 }}>Täglich neuer Content über Gesundheit, Training & Mindset.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {SOCIALS.map(s => (
            <SocialLink key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* COACHING CTA */}
      <section id="coaching" style={{ padding: '0 24px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ background: GM, border: `1px solid rgba(245,228,0,0.22)`, borderRadius: 24, padding: '60px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: 'rgba(245,228,0,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, background: 'rgba(245,228,0,0.04)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ display: 'inline-block', background: 'rgba(245,228,0,0.12)', border: `1px solid rgba(245,228,0,0.3)`, color: Y, fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, marginBottom: 20, letterSpacing: 1.2, textTransform: 'uppercase' }}>
            1:1 Coaching
          </div>
          <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: -0.5, marginBottom: 14 }}>Bereit für deine Transformation?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.75 }}>
            Personalisiertes Coaching in Training, Ernährung & Mindset — auf dich zugeschnitten, Schritt für Schritt.
          </p>
          <a href="https://coaching.healthletics.de" style={{ display: 'inline-block', background: Y, color: GD, padding: '15px 36px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Jetzt Coaching starten →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${GB}`, padding: '28px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <Logo />
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="mailto:healthleticx@web.de" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none' }}>healthleticx@web.de</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none' }}>Impressum</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none' }}>Datenschutz</a>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>© 2025 Healthletics</span>
        </div>
      </footer>
    </div>
  )
}

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
      <div style={{ background: GM, border: `1px solid rgba(245,228,0,0.4)`, borderRadius: 7, padding: '3px 8px', fontWeight: 900, fontSize: 14, color: Y, letterSpacing: 1.5 }}>HLX</div>
      <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>Healthletics</span>
    </div>
  )
}

function Tag({ children }: { children: string }) {
  return (
    <div style={{ textAlign: 'center', color: Y, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>{children}</div>
  )
}

function HLXSvg() {
  return (
    <svg viewBox="0 0 500 130" width="420" style={{ maxWidth: '85vw' }} aria-label="Healthletics HLX Logo">
      <rect width="500" height="130" rx="14" fill="#1a5c3a" />
      {/* left weight */}
      <rect x="12" y="22" width="18" height="86" rx="5" fill="#f5e400" />
      <rect x="6" y="38" width="30" height="18" rx="4" fill="#f5e400" />
      <rect x="6" y="74" width="30" height="18" rx="4" fill="#f5e400" />
      {/* left bar */}
      <rect x="30" y="57" width="44" height="16" rx="3" fill="#f5e400" />
      {/* H */}
      <rect x="80" y="22" width="16" height="86" rx="4" fill="#f5e400" />
      <rect x="80" y="57" width="54" height="16" rx="4" fill="#f5e400" />
      <rect x="118" y="22" width="16" height="86" rx="4" fill="#f5e400" />
      {/* L */}
      <rect x="152" y="22" width="16" height="86" rx="4" fill="#f5e400" />
      <rect x="152" y="92" width="56" height="16" rx="4" fill="#f5e400" />
      {/* X */}
      <rect x="228" y="18" width="16" height="94" rx="4" fill="#f5e400" transform="rotate(32 236 65)" />
      <rect x="278" y="18" width="16" height="94" rx="4" fill="#f5e400" transform="rotate(-32 286 65)" />
      {/* right bar */}
      <rect x="426" y="57" width="44" height="16" rx="3" fill="#f5e400" />
      {/* right weight */}
      <rect x="470" y="22" width="18" height="86" rx="5" fill="#f5e400" />
      <rect x="464" y="38" width="30" height="18" rx="4" fill="#f5e400" />
      <rect x="464" y="74" width="30" height="18" rx="4" fill="#f5e400" />
    </svg>
  )
}

function SocialLink({ label, handle, icon, color, url }: { label: string; handle: string; icon: string; color: string; url: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 16, background: hovered ? '#1e3d2a' : GC, border: `1px solid ${hovered ? 'rgba(245,228,0,0.35)' : GB}`, borderRadius: 14, padding: '14px 20px', textDecoration: 'none', color: '#fff', transition: 'all 0.18s' }}>
      <div style={{ width: 42, height: 42, borderRadius: 10, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', marginTop: 2 }}>{handle}</div>
      </div>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </a>
  )
}

const PILLARS = [
  { emoji: '💪', title: 'Training', desc: 'Effektive Workouts für jeden Level — egal ob Anfänger oder Fortgeschrittener.' },
  { emoji: '🥗', title: 'Ernährung', desc: 'Alltagstaugliche Ernährungstipps ohne Diäten oder teure Supplements.' },
  { emoji: '🧠', title: 'Mentale Gesundheit', desc: 'Stressmanagement, Mindset und mentale Stärke — weil der Kopf entscheidet.' },
  { emoji: '✨', title: 'Lifestyle', desc: 'Schlaf, Erholung und Gewohnheiten, die langfristig Wirkung zeigen.' },
]

const SOCIALS = [
  { label: 'Instagram', handle: '@healthleticx', icon: '📸', color: '#833ab4', url: 'https://www.instagram.com/healthleticx' },
  { label: 'TikTok', handle: '@healthleticx', icon: '🎵', color: '#010101', url: 'https://www.tiktok.com/@healthleticx' },
  { label: 'YouTube', handle: '@healthleticx', icon: '▶', color: '#ff0000', url: 'https://www.youtube.com/@healthleticx' },
  { label: 'WhatsApp Community', handle: 'Kostenlos beitreten', icon: '💬', color: '#25d366', url: 'https://whatsapp.com/channel/0029VbCZ3Jx0VycHkB8WfZ1o' },
  { label: 'Telegram', handle: 't.me/healthleticx', icon: '✈', color: '#0088cc', url: 'https://t.me/healthleticx' },
  { label: 'E-Mail', handle: 'healthleticx@web.de', icon: '✉', color: GM, url: 'mailto:healthleticx@web.de' },
]

const STATS = [
  { value: '1:1', label: 'Persönliches Coaching' },
  { value: '4+', label: 'Themen abgedeckt' },
  { value: '100%', label: 'Kostenloser Content' },
  { value: '∞', label: 'Community-Support' },
]
