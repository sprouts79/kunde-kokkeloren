// node: web — shared primitives for Kokkeløren marketing site
// Flat surfaces, rounded corners, underline CTAs, one strong CTA per surface.

const KLW = {
  black:'#31261D', white:'#F1EDE2', pure:'#FFFFFF',
  green:'#6CC24A', yellow:'#FFC72C', dOrange:'#DB864E',
  orange:'#FF9E1B', pink:'#F8C1B8', blue:'#A7D8E7',
  brown:'#B79B68', curry:'#DCE261', red:'#FF6720',
  hair:'rgba(49,38,29,0.14)', muted:'rgba(49,38,29,0.66)',
  surf:'#EAE4D4',
  serif:'"Valizas","Cormorant Garamond",serif',
  sans:'"GT Flexa",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif',
  mono:'"GT Flexa Mono",ui-monospace,Menlo,monospace',
};

/* -------- Top nav -------- */
function Nav({ onNav, route='home' }) {
  const item = (k, label) => (
    <a href="#" onClick={e=>{e.preventDefault();onNav?.(k);}} style={{
      font:'300 16px/1 '+KLW.sans, color: KLW.black, textDecoration: route===k?'underline':'none',
      textUnderlineOffset:6, textDecorationThickness: 1.5, padding:'6px 0',
    }}>{label}</a>
  );
  return (
    <header style={{ background: KLW.white, borderBottom:`1px solid ${KLW.hair}` }}>
      <div style={{ maxWidth:1120, margin:'0 auto', padding:'18px 24px', display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center' }}>
        <nav style={{ display:'flex', gap:28 }}>
          {item('menu','Ukens meny')}
          {item('how','Slik fungerer det')}
          {item('stories','Produsenter')}
        </nav>
        <a href="#" onClick={e=>{e.preventDefault();onNav?.('home');}} style={{ justifySelf:'center' }}>
          <img src="../../assets/logos/logo-black.png" alt="Kokkeløren" style={{ height: 28, display:'block' }} />
        </a>
        <div style={{ display:'flex', gap:24, justifyContent:'flex-end', alignItems:'center' }}>
          {item('account','Min side')}
          <a href="#" onClick={e=>{e.preventDefault();onNav?.('signup');}} style={{
            font:'500 15px/1 '+KLW.sans, color: KLW.black,
            textDecoration:'underline', textUnderlineOffset:5, textDecorationThickness: 1.5,
          }}>Bestill matkasse →</a>
        </div>
      </div>
    </header>
  );
}

/* -------- Buttons / CTAs -------- */
function CTALink({ children, href='#', ink=KLW.black, onClick }) {
  return (
    <a href={href} onClick={onClick} style={{
      font:'500 17px/1 '+KLW.sans, color: ink,
      textDecoration:'underline', textUnderlineOffset:5, textDecorationThickness: 1.5,
      display:'inline-flex', alignItems:'center', gap:8,
    }}>{children} <span style={{display:'inline-block'}}>→</span></a>
  );
}

/* -------- Sticker -------- */
function Sticker({ children, bg=KLW.yellow, rotate=-6, size=16, serif=true }) {
  return (
    <div style={{
      display:'inline-block', background: bg, color: KLW.black,
      border:`1.5px solid ${KLW.black}`, borderRadius: 16,
      padding:'10px 14px', textAlign:'center',
      fontFamily: serif ? KLW.serif : KLW.sans,
      fontWeight: serif ? 400 : 500,
      fontSize: size, lineHeight: 1.05, textTransform:'uppercase', letterSpacing:'.04em',
      transform:`rotate(${rotate}deg)`, filter:'drop-shadow(0 2px 0 #31261D)',
    }}>{children}</div>
  );
}

/* -------- Eyebrow / heads -------- */
const Eyebrow = ({children,color=KLW.black}) => (
  <div style={{ font:'500 12px/1.2 '+KLW.sans, letterSpacing:'.16em', textTransform:'uppercase', color }}>{children}</div>
);
const H1 = ({children, size=88, max=720}) => (
  <h1 style={{ fontFamily:KLW.serif, fontWeight:400, fontSize:size, lineHeight:1.02, letterSpacing:'-0.02em', margin:0, color: KLW.black, maxWidth:max }}>{children}</h1>
);
const H2 = ({children, size=48}) => (
  <h2 style={{ fontFamily:KLW.serif, fontWeight:400, fontSize:size, lineHeight:1.06, letterSpacing:'-0.01em', margin:0, color: KLW.black }}>{children}</h2>
);
const Body = ({children, size=18, max=60}) => (
  <p style={{ font:`300 ${size}px/1.55 ${KLW.sans}`, color: KLW.black, margin:0, maxWidth:`${max}ch` }}>{children}</p>
);

/* -------- Section container -------- */
function Section({ bg=KLW.white, pad='96px 24px', children, center=false }) {
  return (
    <section style={{ background: bg, padding: pad }}>
      <div style={{ maxWidth:1120, margin:'0 auto', textAlign: center?'center':'left' }}>{children}</div>
    </section>
  );
}

/* -------- Producer card -------- */
function ProducerCard({ bg=KLW.curry, place, name, body, img }) {
  return (
    <article style={{ background: bg, borderRadius: 16, padding: 28, display:'flex', flexDirection:'column', gap:16, minHeight: 420 }}>
      <div style={{ borderRadius: 16, overflow:'hidden', background: KLW.surf, aspectRatio:'4/3' }}>
        {img && <img src={img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>}
      </div>
      <Eyebrow>{place}</Eyebrow>
      <H2 size={30}>{name}</H2>
      <Body size={16} max={32}>{body}</Body>
    </article>
  );
}

/* -------- Meal card -------- */
function MealCard({ bg=KLW.pink, eyebrow, title, tagline, img, time='30 min', difficulty='enkelt' }) {
  return (
    <article style={{ background: bg, borderRadius: 16, padding: 20, display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ borderRadius: 16, overflow:'hidden', background: KLW.surf, aspectRatio:'4/3' }}>
        {img && <img src={img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>}
      </div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 style={{ fontFamily:KLW.serif, fontWeight:400, fontSize:26, lineHeight:1.1, margin:0, color: KLW.black }}>{title}</h3>
      <Body size={15} max={28}>{tagline}</Body>
      <div style={{ display:'flex', gap:18, font:'300 13px/1 '+KLW.sans, color: KLW.black, paddingTop: 8, borderTop:`1px solid ${KLW.hair}` }}>
        <span>{time}</span><span>·</span><span>{difficulty}</span>
      </div>
    </article>
  );
}

/* -------- Footer -------- */
function Footer() {
  return (
    <footer style={{ background: KLW.black, color: KLW.white, padding:'64px 24px 40px' }}>
      <div style={{ maxWidth:1120, margin:'0 auto', display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:32 }}>
        <div>
          <img src="../../assets/logos/logo-white.png" alt="Kokkeløren" style={{ height:30 }}/>
          <p style={{ font:'300 15px/1.6 '+KLW.sans, color: KLW.white, marginTop:18, maxWidth:'36ch', opacity:.88 }}>
            Tre middager i uken. Råvarer med opprinnelse. Utviklet av kjøkkensjef Tore.
          </p>
        </div>
        <FooterCol title="Meny" items={['Ukens meny','Tidligere uker','Drikketips','Gavekort']}/>
        <FooterCol title="Om oss" items={['Produsenter','Vår historie','Kontakt','Presse']}/>
        <FooterCol title="Hjelp" items={['Min side','Vanlige spørsmål','Pause abonnement','post@kokkeloren.no']}/>
      </div>
      <div style={{ maxWidth:1120, margin:'40px auto 0', padding:'24px 0 0', borderTop:'1px solid rgba(241,237,226,.2)', display:'flex', justifyContent:'space-between', font:'300 13px/1.4 '+KLW.sans, color:'rgba(241,237,226,.7)' }}>
        <div>Kokkeløren AS · Tollbugata 24, 0157 Oslo · org.nr. 918 273 645</div>
        <div style={{display:'flex',gap:14}}><a href="#" style={{color:'inherit'}}>Personvern</a><a href="#" style={{color:'inherit'}}>Vilkår</a></div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{ font:'500 12px/1.2 '+KLW.sans, letterSpacing:'.16em', textTransform:'uppercase', color: KLW.white, marginBottom:14 }}>{title}</div>
      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
        {items.map((t,i)=><li key={i}><a href="#" style={{ font:'300 15px/1.4 '+KLW.sans, color:'rgba(241,237,226,.88)', textDecoration:'none' }}>{t}</a></li>)}
      </ul>
    </div>
  );
}

Object.assign(window, { KLW, Nav, CTALink, Sticker, Eyebrow, H1, H2, Body, Section, ProducerCard, MealCard, Footer });
