// node: web — Kokkeløren landing page sections
// Composed from WebKit primitives. Mirrors kokkeloren.no's "premium uten arroganse" tone:
// big Valizas display, full-bleed hero on White with a produce cut-out and a sticker,
// one strong CTA, producer storytelling, mascot sign-off in the footer.

function Hero({ onOrder }) {
  return (
    <section style={{ background: KLW.white, position:'relative', overflow:'hidden' }}>
      <div style={{ maxWidth:1120, margin:'0 auto', padding:'72px 24px 24px', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48, alignItems:'center', minHeight: 620 }}>
        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', top:-24, left:-12, zIndex:2 }}>
            <Sticker bg={KLW.yellow} rotate={-8} size={15}>Spre<br/>matglede</Sticker>
          </div>
          <Eyebrow>Norsk premium matkasse · siden 2017</Eyebrow>
          <div style={{ height: 20 }}/>
          <H1 size={104} max={700}>Den beste middagen du kan lage <em>hjemme</em>.</H1>
          <div style={{ height: 22 }}/>
          <Body size={20} max={44}>
            Tre middager i uken. Råvarer fra Strøm-Larsen, Galåvolden Gård og Stølsvidda. Oppskrifter fra kjøkkensjef Tore. Ingen binding.
          </Body>
          <div style={{ marginTop: 32, display:'flex', gap:28, alignItems:'center' }}>
            <CTALink onClick={(e)=>{e.preventDefault();onOrder?.();}}>Prøv første kasse</CTALink>
            <div style={{ font:'300 14px/1.4 '+KLW.sans, color: KLW.muted, maxWidth:'20ch' }}>
              30 min fra pakke til bordet.
            </div>
          </div>
        </div>
        <div style={{ position:'relative', alignSelf:'stretch' }}>
          <div style={{ position:'absolute', inset:0, background:'url(../../assets/images/hero-produce.png) center/contain no-repeat' }}/>
          <div style={{ position:'absolute', top:'14%', right:'-4%' }}>
            <Sticker bg={KLW.pink} rotate={6} size={13} serif={false}>Terningkast 5 · godt.no</Sticker>
          </div>
        </div>
      </div>
      {/* Running marquee — producer names */}
      <div style={{ borderTop:`1px solid ${KLW.hair}`, padding:'16px 0', overflow:'hidden', whiteSpace:'nowrap' }}>
        <div style={{ font:'500 13px/1 '+KLW.sans, letterSpacing:'.16em', textTransform:'uppercase', color: KLW.black, display:'flex', gap:40, animation:'klmarquee 36s linear infinite' }}>
          {Array.from({length:2}).map((_,i)=>(
            <React.Fragment key={i}>
              <span>Strøm-Larsen · Oslo, siden 1933</span><span>·</span>
              <span>Galåvolden Gård · Trøndelag</span><span>·</span>
              <span>Stølsvidda · Valdres</span><span>·</span>
              <span>Stensaas Reinsdyrslakteri · Røros</span><span>·</span>
              <span>Hasle Gård · Tyristrand</span><span>·</span>
              <span>VAAG Sjømat · Haugesund</span><span>·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`@keyframes klmarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n:'01', title:'Velg antall og uker', body:'2 eller 4 personer. 3 middager i uken. Pause, endre eller stopp når som helst.' },
    { n:'02', title:'Vi pakker om fredagen', body:'Råvarene plukkes og porsjoneres dagen før levering. Aldri lenger enn 48 timer fra produsent.' },
    { n:'03', title:'30 minutter på kjøkkenet', body:'Kort oppskrift, klart og tydelig. Kokkelagde ingredienser som fond og olje følger med.' },
  ];
  return (
    <Section bg={KLW.curry} pad="112px 24px">
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:48, alignItems:'end', marginBottom:56 }}>
        <Eyebrow>Slik fungerer det</Eyebrow>
        <H2 size={56}>Fra pakke til bord på en halvtime.</H2>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:32 }}>
        {steps.map(s=>(
          <div key={s.n} style={{ paddingTop: 24, borderTop:`1px solid ${KLW.black}` }}>
            <div style={{ font:'500 13px/1 '+KLW.sans, letterSpacing:'.16em', color: KLW.black, marginBottom: 16 }}>{s.n}</div>
            <h3 style={{ fontFamily:KLW.serif, fontWeight:400, fontSize:30, lineHeight:1.1, margin:'0 0 10px' }}>{s.title}</h3>
            <Body size={16} max={32}>{s.body}</Body>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WeekMenu() {
  return (
    <Section bg={KLW.white} pad="112px 24px">
      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:24, alignItems:'end', marginBottom: 40 }}>
        <div>
          <Eyebrow>Uke 17 · 22.–28. april</Eyebrow>
          <div style={{ height: 12 }}/>
          <H2 size={56}>Ukens meny.</H2>
        </div>
        <CTALink>Se hele uken</CTALink>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
        <MealCard
          bg={KLW.pink} eyebrow="Tirsdag"
          title="Reinsdyr med beter og sopp"
          tagline="Mørbrad fra Stensaas, Røros. Rødvinssaus, syltet tyttebær."
        />
        <MealCard
          bg={KLW.curry} eyebrow="Onsdag"
          title="Pasta med kokkelørens pesto"
          tagline="Basilikum og pinjekjerner. Sitron, parmesan fra Galåvolden."
        />
        <MealCard
          bg={KLW.blue} eyebrow="Torsdag"
          title="Ovnsbakt torsk i smør"
          tagline="Skrei fra Lofoten. Nypoteter og purre, eggesmør."
        />
      </div>
    </Section>
  );
}

function Producers() {
  return (
    <Section bg={KLW.surf} pad="112px 24px">
      <div style={{ marginBottom: 48, maxWidth: 720 }}>
        <Eyebrow>Produsenter</Eyebrow>
        <div style={{ height: 12 }}/>
        <H2 size={56}>Vi kjenner bøndene. <em>På fornavn.</em></H2>
        <div style={{ height: 18 }}/>
        <Body size={18} max={60}>
          Hver råvare i kassen kommer fra noen vi har besøkt, smakt på, og kan stå inne for. Her er tre av dem.
        </Body>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
        <ProducerCard bg={KLW.curry} place="Oslo · siden 1933" name="Strøm-Larsen" body="Familieslakteri på Grünerløkka. Fjerde generasjon Larsen, med en lammekøtt-kunnskap du ikke finner i butikken." />
        <ProducerCard bg={KLW.pink} place="Trøndelag" name="Galåvolden Gård" body="Kine og Jonas lager ost av egen melk på gården i Haltdalen. Vår parmesan, brunost og kremost kommer herfra." />
        <ProducerCard bg={KLW.blue} place="Valdres" name="Stølsvidda" body="Viltkjøtt fra fjellet i Valdres — elg, hjort og rein. Forvaltet av lokale jegere, aldri oppdrettet." />
      </div>
    </Section>
  );
}

function QuoteBand() {
  return (
    <Section bg={KLW.white} pad="120px 24px" center>
      <div style={{ display:'flex', justifyContent:'center', marginBottom: 32 }}>
        <Sticker bg={KLW.yellow} rotate={-4} size={16}>Terningkast 5 · godt.no</Sticker>
      </div>
      <blockquote style={{ margin:0, fontFamily:KLW.serif, fontWeight:400, fontStyle:'italic', fontSize:48, lineHeight:1.12, color: KLW.black, maxWidth: 900, marginLeft:'auto', marginRight:'auto' }}>
        «Reinsdyr mørbrad, fra Stensaas på Røros, er et flott viltprodukt — og så mørt som smør.»
      </blockquote>
      <div style={{ marginTop: 24, font:'500 13px/1 '+KLW.sans, letterSpacing:'.16em', textTransform:'uppercase', color: KLW.muted }}>Tore Namstad · Kjøkkensjef</div>
    </Section>
  );
}

function SignupStrip({ onOrder }) {
  return (
    <Section bg={KLW.red} pad="96px 24px" center>
      <H2 size={64}>Prøv én uke. <em>Uten binding.</em></H2>
      <div style={{ height: 18 }}/>
      <Body size={18} max={60}>Første kasse pakkes på fredag, leveres lørdag. Sier du nei takk etter første uke er det greit — vi holder ingen fast.</Body>
      <div style={{ height: 28 }}/>
      <CTALink onClick={e=>{e.preventDefault();onOrder?.();}}>Bestill første kasse</CTALink>
    </Section>
  );
}

function MascotBand() {
  return (
    <section style={{ background: KLW.white, padding:'64px 24px 0', textAlign:'center' }}>
      <img src="../../assets/mascots/mascot-signoff.png" alt="" style={{ width: 260, height:'auto', display:'inline-block' }}/>
      <div style={{ fontFamily:KLW.serif, fontWeight:400, fontSize:42, lineHeight:1.1, color: KLW.black, marginTop: 10 }}>Vi sees på kjøkkenet.</div>
    </section>
  );
}

Object.assign(window, { Hero, HowItWorks, WeekMenu, Producers, QuoteBand, SignupStrip, MascotBand });
