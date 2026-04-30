// Kokkeløren — Email kit primitives
// REBUILT v3 — plain divs (no tables) for pixel-accurate preview.
// Every email is exactly 600px wide, flush to its frame. No hidden cell spacing.
// Design system:
//   • CTA = underlined GT Flexa Medium (NEVER a pill)
//   • Titles = Valizas 400
//   • Body = GT Flexa Light 16–18 px
//   • Overline = GT Flexa Medium 12px 0.16em uppercase
//   • Background = #F1EDE2 eggshell; pure white ONLY as photo bleed
//   • Text on every color surface = #31261D black
//   • Stickers = price-tag shape from Figma master

const KL = {
  black: '#31261D',
  white: '#F1EDE2',
  pure: '#FFFFFF',
  green: '#6CC24A', yellow: '#FFC72C', dOrange: '#DB864E',
  orange: '#FF9E1B', pink: '#F8C1B8', blue: '#A7D8E7',
  brown: '#B79B68', curry: '#DCE261', red: '#FF6720',
  surface: '#EAE4D4',
  hair: 'rgba(49,38,29,0.14)',
  muted: 'rgba(49,38,29,0.66)',
  serif: '"Valizas", "Cormorant Garamond", serif',
  sans: '"GT Flexa", system-ui, -apple-system, Arial, sans-serif',
  mono: '"GT Flexa Mono", ui-monospace, Menlo, monospace',
};

// ---------------------------------------------------------------------------
// Shell — exactly 600px, flush to its parent. No tables, no border-spacing.
// ---------------------------------------------------------------------------
const EmailShell = ({ children, bg = KL.white }) => (
  <div style={{
    width: 600, maxWidth: 600,
    margin: 0, padding: 0,
    background: bg,
    fontFamily: KL.sans,
    color: KL.black,
    boxSizing: 'border-box',
  }}>{children}</div>
);

const Preheader = ({ text }) => (
  <div style={{ display: 'none', maxHeight: 0, overflow: 'hidden' }}>{text}</div>
);

// ---------------------------------------------------------------------------
// Logo — centered, generous air above and below.
// ---------------------------------------------------------------------------
const LogoRow = ({ bg = KL.white }) => (
  <div style={{ background: bg, padding: '40px 0 28px', textAlign: 'center' }}>
    <img src="../../assets/logos/logo-black.png" alt="Kokkeløren"
         style={{ height: 44, width: 'auto', display: 'inline-block' }} />
  </div>
);

// ---------------------------------------------------------------------------
// Sticker — price-tag silhouette. 165×68 inline SVG, flat fill, no rotation.
// ---------------------------------------------------------------------------
const Sticker = ({ children, bg = KL.yellow, w = 150, h = 62 }) => (
  <div style={{
    position: 'relative', display: 'inline-block',
    width: w, height: h,
    fontFamily: KL.sans, fontWeight: 300, fontSize: 15, lineHeight: 1.05,
    letterSpacing: '.01em', textTransform: 'uppercase', color: KL.black,
  }}>
    <svg viewBox="0 0 396 164" preserveAspectRatio="none"
         style={{ display: 'block', width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <path fill={bg} d="M385.944 81.8622C385.944 58.3533 368.657 38.6085 345.04 32.3967C344.191 32.1792 343.604 31.4285 343.604 30.5582V1.93641C343.604 0.870295 342.733 0 341.667 0L57.5376 0C56.4715 0 55.6012 0.870295 55.6012 1.93641V29.7097C55.6012 30.6235 54.9485 31.3959 54.0455 31.5808C28.7199 36.7265 9.79102 57.2546 9.79102 81.8622C9.79102 106.437 28.7199 126.987 54.0455 132.143C54.9485 132.328 55.5903 133.09 55.5903 134.015V161.788C55.5903 162.854 56.4606 163.724 57.5267 163.724H341.656C342.723 163.724 343.593 162.854 343.593 161.788V133.166C343.593 132.296 344.191 131.545 345.029 131.328C368.646 125.105 385.944 105.349 385.944 81.8622Z"/>
    </svg>
    <div style={{
      position: 'absolute', inset: '10px 32px',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 2,
    }}>{children}</div>
  </div>
);

// ---------------------------------------------------------------------------
// CTA — underlined GT Flexa Medium, optional arrow. Never a pill.
// ---------------------------------------------------------------------------
const CTA = ({ children, href = '#', ink = KL.black }) => (
  <a href={href} style={{
    font: '500 16px/1 ' + KL.sans,
    color: ink,
    textDecoration: 'underline',
    textUnderlineOffset: '5px',
    textDecorationThickness: '1.5px',
    display: 'inline-block',
  }}>
    {children} <span style={{ marginLeft: 6 }}>→</span>
  </a>
);

// ---------------------------------------------------------------------------
// Typography helpers
// ---------------------------------------------------------------------------
const Eyebrow = ({ children, ink = KL.black }) => (
  <div style={{
    font: '500 12px/1.2 ' + KL.sans,
    letterSpacing: '.18em', textTransform: 'uppercase',
    color: ink, marginBottom: 14,
  }}>{children}</div>
);

const Title = ({ children, size = 44, ink = KL.black, max = 460 }) => (
  <h1 style={{
    fontFamily: KL.serif, fontWeight: 400,
    fontSize: size, lineHeight: 1.04, letterSpacing: '-0.01em',
    margin: '0 auto', maxWidth: max, color: ink,
  }}>{children}</h1>
);

const Body = ({ children, size = 16, ink = KL.black, max = 440, align = 'left' }) => (
  <p style={{
    font: `300 ${size}px/1.55 ` + KL.sans,
    color: ink, margin: '14px auto 0', maxWidth: max, textAlign: align,
  }}>{children}</p>
);

// ---------------------------------------------------------------------------
// HERO — the brand pattern. A coloured or eggshell surface where cut-out
// produce sits at the EDGES (top-left, top-right, bottom-left, bottom-right)
// and the text block lives centered in the calm middle.
//
// Built as a 600×620 stage with absolutely positioned cut-outs. Each
// cut-out is its own transparent PNG (we only have hero-produce.png so we
// crop it via background-position for different corners).
// ---------------------------------------------------------------------------
const CutoutCorner = ({ pos, img, w, h, style = {} }) => (
  <img src={img} alt="" style={{
    position: 'absolute',
    width: w, height: h, objectFit: 'contain',
    pointerEvents: 'none',
    ...pos, ...style,
  }} />
);

const Hero = ({ bg = KL.pink, sticker, stickerPos = {top:20, right:20}, children, minH = 560, cutouts = 'welcome' }) => (
  <div style={{ position: 'relative', background: bg, overflow: 'hidden', minHeight: minH }}>
    {/* Cut-out clusters at the corners. Our single hero-produce.png already
        has produce clustered in corners with transparent middle. We crop it
        via overflow & positioning. */}
    {cutouts === 'welcome' && <>
      {/* Top-left: pepper shakers + garlic */}
      <div style={{
        position: 'absolute', top: -30, left: -40, width: 300, height: 280,
        backgroundImage: 'url(../../assets/images/hero-produce.png)',
        backgroundSize: '640px auto',
        backgroundPosition: '-10px 0',
        backgroundRepeat: 'no-repeat',
      }}/>
      {/* Top-right: kokke løren box */}
      <div style={{
        position: 'absolute', top: -20, right: -30, width: 260, height: 240,
        backgroundImage: 'url(../../assets/images/hero-produce.png)',
        backgroundSize: '640px auto',
        backgroundPosition: '-420px -10px',
        backgroundRepeat: 'no-repeat',
      }}/>
      {/* Bottom-left: pesto + olive oil */}
      <div style={{
        position: 'absolute', bottom: -20, left: -30, width: 280, height: 280,
        backgroundImage: 'url(../../assets/images/hero-produce.png)',
        backgroundSize: '640px auto',
        backgroundPosition: '-20px -340px',
        backgroundRepeat: 'no-repeat',
      }}/>
      {/* Bottom-right: copper pan with tomatoes */}
      <div style={{
        position: 'absolute', bottom: -20, right: -20, width: 260, height: 220,
        backgroundImage: 'url(../../assets/images/hero-produce.png)',
        backgroundSize: '640px auto',
        backgroundPosition: '-420px -400px',
        backgroundRepeat: 'no-repeat',
      }}/>
    </>}
    {cutouts === 'autumn' && <>
      <div style={{
        position: 'absolute', top: -30, left: -40, width: 320, height: 300,
        backgroundImage: 'url(../../assets/images/hero-produce.png)',
        backgroundSize: '720px auto',
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
      }}/>
      <div style={{
        position: 'absolute', bottom: -30, right: -40, width: 320, height: 260,
        backgroundImage: 'url(../../assets/images/hero-produce.png)',
        backgroundSize: '720px auto',
        backgroundPosition: '-440px -420px',
        backgroundRepeat: 'no-repeat',
      }}/>
    </>}
    {cutouts === 'gift' && null}

    {sticker && (
      <div style={{ position: 'absolute', zIndex: 2, ...stickerPos }}>{sticker}</div>
    )}

    {/* Content — centered vertically + horizontally in the clear middle */}
    <div style={{
      position: 'relative', zIndex: 1,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 72px',
      minHeight: minH,
      boxSizing: 'border-box',
    }}>
      {children}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Section — plain content block on eggshell.
// ---------------------------------------------------------------------------
const Section = ({ bg = KL.white, pad = '32px 48px', align = 'left', children }) => (
  <div style={{ background: bg, padding: pad, textAlign: align }}>{children}</div>
);

const H2 = ({ children, align = 'left', ink = KL.black }) => (
  <h2 style={{
    fontFamily: KL.serif, fontWeight: 400,
    fontSize: 30, lineHeight: 1.12, letterSpacing: '-0.005em',
    margin: 0, color: ink, textAlign: align,
  }}>{children}</h2>
);

// ---------------------------------------------------------------------------
// Rule row with small number — visual rhythm for lists of benefits.
// ---------------------------------------------------------------------------
const RuleRow = ({ n, children }) => (
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: 20,
    padding: '20px 0',
    borderBottom: `1px solid ${KL.hair}`,
  }}>
    <div style={{
      fontFamily: KL.mono, fontWeight: 300, fontSize: 13,
      color: KL.muted, width: 28, flexShrink: 0, paddingTop: 3,
    }}>{String(n).padStart(2, '0')}</div>
    <div style={{
      font: '300 16px/1.55 ' + KL.sans, color: KL.black, flex: 1,
    }}>{children}</div>
  </div>
);

// ---------------------------------------------------------------------------
// MenuCourse — for the autumn 3-course release
// ---------------------------------------------------------------------------
const MenuCourse = ({ n, course, title, note, img, crop, divider = true }) => (
  <div style={{
    padding: '24px 48px',
    borderTop: divider ? `1px solid ${KL.hair}` : 'none',
    display: 'flex', alignItems: 'center', gap: 24,
  }}>
    {(img || crop) && (
      <div style={{
        flexShrink: 0,
        width: 112, height: 112, borderRadius: 12,
        overflow: 'hidden', background: 'rgba(49,38,29,0.06)',
        ...(crop ? {
          backgroundImage: `url(${img || '../../assets/images/hero-produce.png'})`,
          backgroundSize: crop.size || '300% auto',
          backgroundPosition: crop.pos || 'center',
          backgroundRepeat: 'no-repeat',
        } : {}),
      }}>
        {img && !crop && (
          <img src={img} alt="" style={{
            display: 'block', width: '100%', height: '100%', objectFit: 'cover',
          }}/>
        )}
      </div>
    )}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontFamily: KL.mono, fontWeight: 300, fontSize: 12, color: KL.muted, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>
        {String(n).padStart(2, '0')} · {course}
      </div>
      <div style={{ fontFamily: KL.serif, fontWeight: 400, fontSize: 22, lineHeight: 1.18, color: KL.black, letterSpacing: '-0.005em' }}>
        {title}
      </div>
      {note && <div style={{ font: '300 14px/1.5 ' + KL.sans, color: KL.muted, marginTop: 4 }}>{note}</div>}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// GiftCardVoucher — styled voucher block for the giftcard email
// ---------------------------------------------------------------------------
const GiftCardVoucher = ({ from, to, portions, code }) => (
  <div style={{
    margin: '0 48px', padding: '36px 32px 32px',
    background: KL.white, border: `1.5px solid ${KL.black}`,
    borderRadius: 16, textAlign: 'center',
  }}>
    <div style={{ fontFamily: KL.mono, fontWeight: 300, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: KL.muted, marginBottom: 8 }}>
      Velkommen
    </div>
    <div style={{ fontFamily: KL.serif, fontWeight: 400, fontSize: 38, lineHeight: 1.05, color: KL.black, letterSpacing: '-0.01em' }}>
      Gavekort
    </div>
    <div style={{ font: '300 14px/1.5 ' + KL.sans, color: KL.muted, marginTop: 6, marginBottom: 24 }}>
      {portions}
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: `1px solid ${KL.hair}`, borderBottom: `1px solid ${KL.hair}` }}>
      <div style={{ padding: '16px 12px', textAlign: 'left', borderRight: `1px solid ${KL.hair}` }}>
        <div style={{ fontFamily: KL.mono, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: KL.muted, marginBottom: 4 }}>Fra</div>
        <div style={{ font: '300 16px/1.3 ' + KL.sans, color: KL.black }}>{from}</div>
      </div>
      <div style={{ padding: '16px 12px', textAlign: 'left' }}>
        <div style={{ fontFamily: KL.mono, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: KL.muted, marginBottom: 4 }}>Til</div>
        <div style={{ font: '300 16px/1.3 ' + KL.sans, color: KL.black }}>{to}</div>
      </div>
    </div>

    <div style={{
      marginTop: 20, padding: '14px 18px',
      background: KL.curry, borderRadius: 10,
      fontFamily: KL.mono, fontWeight: 300, fontSize: 15, letterSpacing: '.12em',
      color: KL.black, display: 'inline-block',
    }}>
      <span style={{ opacity: .6, marginRight: 10 }}>Kode</span>{code}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Signoff — mascot + handwritten-feel serif line
// ---------------------------------------------------------------------------
const Signoff = ({ src = '../../assets/mascots/mascot-signoff.png', line = 'God matlyst!', bg = KL.white }) => (
  <div style={{ background: bg, padding: '40px 32px 20px', textAlign: 'center' }}>
    <img src={src} alt="" style={{ display: 'inline-block', width: 200, height: 'auto' }} />
    <div style={{
      fontFamily: KL.serif, fontWeight: 400, fontStyle: 'italic',
      fontSize: 28, lineHeight: 1.1, color: KL.black, marginTop: 12,
    }}>{line}</div>
  </div>
);

// ---------------------------------------------------------------------------
// Social + footer
// ---------------------------------------------------------------------------
const SocialRow = ({ bg = KL.white }) => (
  <div style={{ background: bg, padding: '16px 16px 8px', textAlign: 'center' }}>
    <a href="#" style={{ display: 'inline-block', margin: '0 10px' }}>
      <img src="../../assets/icons/instagram.svg" alt="Instagram" width="22" height="22" />
    </a>
    <a href="#" style={{ display: 'inline-block', margin: '0 10px' }}>
      <img src="../../assets/icons/facebook.svg" alt="Facebook" width="22" height="22" />
    </a>
  </div>
);

const Footer = ({ bg = KL.white }) => (
  <div style={{
    background: bg, padding: '16px 48px 36px',
    textAlign: 'center',
    font: '300 12px/1.6 ' + KL.sans, color: KL.muted,
  }}>
    Kokkeløren AS · Tollbugata 24, 0157 Oslo · <a href="#" style={{ color: KL.muted, textDecoration: 'underline' }}>post@kokkeloren.no</a><br/>
    Du mottar denne e-posten fordi du er abonnent. <a href="#" style={{ color: KL.muted, textDecoration: 'underline' }}>Avmeld</a> · <a href="#" style={{ color: KL.muted, textDecoration: 'underline' }}>Preferanser</a>
  </div>
);

Object.assign(window, {
  KL, EmailShell, Preheader, LogoRow, Sticker, CTA, Eyebrow, Title, Body,
  Hero, Section, H2, RuleRow, MenuCourse, GiftCardVoucher,
  Signoff, SocialRow, Footer,
});
