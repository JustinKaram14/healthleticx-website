import { useState, useEffect } from 'react'

const Y = '#d4b84a'
const GD = '#0e1c13'
const GM = '#1c3525'
const COACHING_URL = 'https://justinkaram14.github.io/coaching-app/'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [page, setPage] = useState<'home' | 'impressum' | 'datenschutz'>('home')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  if (page === 'impressum') return <LegalPage title="Impressum" onBack={() => setPage('home')}><ImpressumContent /></LegalPage>
  if (page === 'datenschutz') return <LegalPage title="Datenschutzerklärung" onBack={() => setPage('home')}><DatenschutzContent /></LegalPage>

  return (
    <div style={{ background: GD, color: '#fff', fontFamily: "'Inter', system-ui, sans-serif", overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(10,31,16,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,228,0,0.1)' : '1px solid transparent',
        transition: 'all 0.25s',
        padding: '0 32px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <HLXLogo size={34} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', gap: 24 }}>
              {[['#about', 'Story'], ['#links', 'Links']].map(([h, l]) => (
                <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>{l}</a>
              ))}
            </div>
            <a href={COACHING_URL} target="_blank" rel="noopener noreferrer" style={{ background: Y, color: GD, padding: '8px 18px', borderRadius: 7, fontWeight: 800, fontSize: 13, textDecoration: 'none' }}>
              Coaching
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 32px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ width: '100%', paddingTop: 60 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', background: Y, color: GD, fontSize: 10, fontWeight: 800, padding: '4px 10px', borderRadius: 4, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>
                @healthleticx
              </div>
              <h1 style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.0, letterSpacing: -2, marginBottom: 24, textTransform: 'uppercase' }}>
                Gesund.<br />
                <span style={{ color: Y }}>Stark.</span><br />
                Echt.
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 36, maxWidth: 400 }}>
                Keine Ausreden. Kein Bullshit. Ehrliche Inhalte zu Training, Ernährung und mentalem Wachstum. Für alle, die es wirklich wollen.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href={COACHING_URL} target="_blank" rel="noopener noreferrer" style={{ background: Y, color: GD, padding: '13px 28px', borderRadius: 8, fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>
                  Coaching buchen
                </a>
                <a href="#links" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', padding: '13px 28px', borderRadius: 8, fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>
                  Community
                </a>
              </div>
            </div>
            {/* Big Logo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: 400 }}>
                <HLXLogoFull />
              </div>
            </div>
          </div>

          {/* Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', marginTop: 64, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 28, gap: 0 }}>
            {[
              { val: 'Training', sub: 'Für jeden Level' },
              { val: 'Ernährung', sub: 'Alltagstauglich' },
              { val: 'Mindset', sub: 'Mental stark' },
              { val: 'Community', sub: 'Für alle' },
            ].map((s, i) => (
              <div key={s.val} style={{ padding: '0 24px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: Y, marginBottom: 3 }}>{s.val}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ABOUT */}
      <section id="about" style={{ padding: '72px 32px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SLabel>Die Story</SLabel>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.5 }}>Warum Healthletics?</h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 18 }}>
              Healthletics steht für ein gesundes Leben ohne Kompromisse. Sport, Ernährung, mentale Gesundheit: Das gehört für uns zusammen.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}>
              Auf Instagram, TikTok und YouTube teilen wir täglich ehrlichen Content. Keine gefilterte Traumwelt. Nur das, was wirklich funktioniert.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* SOCIAL LINKS */}
      <section id="links" style={{ padding: '72px 32px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <SLabel>Community</SLabel>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 10 }}>Überall dabei sein.</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.7 }}>Täglich neuer Content zu Training, Ernährung & Mindset.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SOCIALS.map(s => <SocialBtn key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      <Divider />

      {/* COACHING CTA */}
      <section style={{ padding: '72px 32px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ background: GM, border: '1px solid rgba(245,228,0,0.2)', borderRadius: 20, padding: '52px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
          <div>
            <SLabel>1:1 Coaching</SLabel>
            <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12 }}>Deine Transformation. Jetzt.</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, maxWidth: 480, lineHeight: 1.75 }}>
              Training, Ernährung, Mindset: alles auf dich zugeschnitten. Kein Copy-Paste-Plan. Echte Betreuung, echte Ergebnisse.
            </p>
          </div>
          <a href={COACHING_URL} target="_blank" rel="noopener noreferrer" style={{ background: Y, color: GD, padding: '15px 32px', borderRadius: 10, fontWeight: 800, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Jetzt starten →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <HLXLogo size={28} />
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="mailto:healthleticx@web.de" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none' }}>healthleticx@web.de</a>
            <button onClick={() => setPage('impressum')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', fontSize: 12, cursor: 'pointer', padding: 0 }}>Impressum</button>
            <button onClick={() => setPage('datenschutz')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', fontSize: 12, cursor: 'pointer', padding: 0 }}>Datenschutz</button>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>© 2025 Healthletics</span>
        </div>
      </footer>
    </div>
  )
}

/* ── Logo components ── */

function HLXLogo({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 530 130" height={size} style={{ display: 'block' }} aria-label="Healthletics">
      <rect width="530" height="130" rx="8" fill={GM} />
      <LogoInner />
    </svg>
  )
}

function HLXLogoFull() {
  return (
    <svg viewBox="0 0 530 130" width="100%" style={{ display: 'block', borderRadius: 14 }} aria-label="Healthletics HLX">
      <rect width="530" height="130" rx="14" fill={GM} />
      <LogoInner />
    </svg>
  )
}

function LogoInner() {
  const y = '#f5e400'
  /* ── Left long bar ── */
  /* ── Left outer plate ── */
  /* ── Left inner plate ── */
  /* ── H ── */
  /* ── L ── */
  /* ── X ── */
  /* ── Right inner plate ── */
  /* ── Right outer plate ── */
  /* ── Right long bar ── */
  return (
    <g fill={y}>
      {/* Left long shaft */}
      <rect x="6" y="58" width="48" height="14" />

      {/* Left OUTER plate (outline frame) */}
      <rect x="54" y="18" width="8" height="94" />   {/* left bar */}
      <rect x="54" y="18" width="28" height="8" />   {/* top */}
      <rect x="54" y="104" width="28" height="8" />  {/* bottom */}
      <rect x="74" y="18" width="8" height="94" />   {/* right bar */}

      {/* Left short connector */}
      <rect x="82" y="58" width="14" height="14" />

      {/* Left INNER plate (outline frame) */}
      <rect x="96" y="18" width="8" height="94" />
      <rect x="96" y="18" width="28" height="8" />
      <rect x="96" y="104" width="28" height="8" />
      <rect x="116" y="18" width="8" height="94" />

      {/* Connector to H */}
      <rect x="124" y="58" width="14" height="14" />

      {/* H */}
      <rect x="138" y="18" width="20" height="94" />
      <rect x="138" y="58" width="88" height="14" />
      <rect x="206" y="18" width="20" height="94" />

      {/* L */}
      <rect x="242" y="18" width="20" height="94" />
      <rect x="242" y="94" width="60" height="18" />

      {/* X — two diagonal strokes */}
      <polygon points="320,18 342,18 416,112 394,112" />
      <polygon points="394,18 416,18 342,112 320,112" />

      {/* Connector from X */}
      <rect x="416" y="58" width="14" height="14" />

      {/* Right INNER plate */}
      <rect x="430" y="18" width="8" height="94" />
      <rect x="430" y="18" width="28" height="8" />
      <rect x="430" y="104" width="28" height="8" />
      <rect x="450" y="18" width="8" height="94" />

      {/* Right short connector */}
      <rect x="458" y="58" width="14" height="14" />

      {/* Right OUTER plate */}
      <rect x="472" y="18" width="8" height="94" />
      <rect x="472" y="18" width="28" height="8" />
      <rect x="472" y="104" width="28" height="8" />
      <rect x="492" y="18" width="8" height="94" />

      {/* Right long shaft */}
      <rect x="500" y="58" width="24" height="14" />
    </g>
  )
}

/* ── UI helpers ── */

function Divider() {
  return <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(245,228,0,0.15), transparent)', margin: '0 32px' }} />
}

function SLabel({ children }: { children: string }) {
  return <div style={{ fontSize: 10, fontWeight: 700, color: Y, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>{children}</div>
}

function SocialBtn({ label, handle, icon, color, url }: { label: string; handle: string; icon: string; color: string; url: string }) {
  const [hov, setHov] = useState(false)
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 14, background: hov ? 'rgba(245,228,0,0.05)' : 'rgba(255,255,255,0.03)', border: `1px solid ${hov ? 'rgba(245,228,0,0.25)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 11, padding: '12px 16px', textDecoration: 'none', color: '#fff', transition: 'all 0.15s' }}>
      <div style={{ width: 38, height: 38, borderRadius: 8, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 13 }}>{label}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{handle}</div>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </a>
  )
}

/* ── Legal pages ── */

function LegalPage({ title, onBack, children }: { title: string; onBack: () => void; children: React.ReactNode }) {
  return (
    <div style={{ background: GD, color: '#fff', fontFamily: "'Inter', system-ui, sans-serif", minHeight: '100vh', padding: '80px 32px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <button onClick={onBack} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)', padding: '8px 16px', borderRadius: 7, cursor: 'pointer', fontSize: 13, marginBottom: 40, display: 'flex', alignItems: 'center', gap: 8 }}>
          ← Zurück
        </button>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 40, letterSpacing: -0.5 }}>{title}</h1>
        <div style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontSize: 15 }}>
          {children}
        </div>
      </div>
    </div>
  )
}

function ImpressumContent() {
  return (
    <>
      <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 28 }}>Angaben gemäß § 5 TMG</h2>
      <p>[Vorname Nachname]<br />[Straße Hausnummer]<br />[PLZ Ort]</p>

      <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 28 }}>Kontakt</h2>
      <p>E-Mail: healthleticx@web.de</p>

      <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 28 }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>[Vorname Nachname]<br />[Adresse wie oben]</p>

      <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 28 }}>Haftungsausschluss</h2>
      <p>Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information sowie der Unterhaltung. Sie stellen keine medizinische, ernährungsmedizinische oder therapeutische Beratung dar. Bitte konsultiere bei gesundheitlichen Fragen immer eine Fachkraft.</p>
    </>
  )
}

function DatenschutzContent() {
  return (
    <>
      <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 28 }}>1. Datenschutz auf einen Blick</h2>
      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst.</p>

      <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 28 }}>2. Datenerfassung auf dieser Website</h2>
      <p>Diese Website wird statisch über GitHub Pages gehostet. Es werden keine eigenen Cookies gesetzt und keine personenbezogenen Daten aktiv erfasst oder gespeichert.</p>
      <p style={{ marginTop: 12 }}>GitHub Pages kann technische Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs) protokollieren. Informationen dazu findest du in der <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection" target="_blank" rel="noopener noreferrer" style={{ color: Y }}>Datenschutzerklärung von GitHub</a>.</p>

      <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 28 }}>3. Externe Links</h2>
      <p>Diese Website enthält Links zu externen Plattformen (Instagram, TikTok, YouTube, WhatsApp, Telegram). Für die Inhalte und Datenschutzpraktiken dieser Dienste sind deren Betreiber verantwortlich.</p>

      <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 28 }}>4. Kontakt</h2>
      <p>Bei Fragen zum Datenschutz: healthleticx@web.de</p>
    </>
  )
}

/* ── Data ── */

const SOCIALS = [
  { label: 'Instagram', handle: '@healthleticx', icon: '📸', color: '#833ab4', url: 'https://www.instagram.com/healthleticx' },
  { label: 'TikTok', handle: '@healthleticx', icon: '🎵', color: '#010101', url: 'https://www.tiktok.com/@healthleticx' },
  { label: 'YouTube', handle: '@healthleticx', icon: '▶', color: '#ff0000', url: 'https://www.youtube.com/@healthleticx' },
  { label: 'WhatsApp Community', handle: 'Kostenlos beitreten', icon: '💬', color: '#25d366', url: 'https://whatsapp.com/channel/0029VbCZ3Jx0VycHkB8WfZ1o' },
  { label: 'Telegram', handle: 't.me/healthleticx', icon: '✈', color: '#0088cc', url: 'https://t.me/healthleticx' },
  { label: 'E-Mail', handle: 'healthleticx@web.de', icon: '✉', color: GM, url: 'mailto:healthleticx@web.de' },
]
