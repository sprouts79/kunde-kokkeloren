// node: web — signup flow & menu detail (click-thru prototype views)

function SignupView({ onBack, onSubmit }) {
  const [people, setPeople] = React.useState(2);
  const [weeks, setWeeks] = React.useState('hver');
  const [email, setEmail] = React.useState('');
  return (
    <Section bg={KLW.white} pad="80px 24px">
      <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 72, alignItems:'start' }}>
        <div>
          <a href="#" onClick={e=>{e.preventDefault();onBack?.();}} style={{ font:'300 14px/1 '+KLW.sans, color: KLW.muted, textDecoration:'none' }}>← tilbake</a>
          <div style={{ height: 20 }}/>
          <Eyebrow>Bestill matkasse</Eyebrow>
          <div style={{ height: 12 }}/>
          <H2 size={56}>La oss sette opp uke&nbsp;1.</H2>
          <div style={{ height: 18 }}/>
          <Body size={18} max={44}>Ingen binding, ingen registreringsavgift. Du betaler bare for den kassen du mottar.</Body>

          <div style={{ height: 40 }}/>
          <Label>Antall personer</Label>
          <Choices value={people} onChange={setPeople} options={[{v:2,l:'2 voksne'},{v:4,l:'2 voksne + 2 barn'}]} />

          <div style={{ height: 28 }}/>
          <Label>Frekvens</Label>
          <Choices value={weeks} onChange={setWeeks} options={[{v:'hver',l:'Hver uke'},{v:'annenhver',l:'Annenhver uke'}]} />

          <div style={{ height: 28 }}/>
          <Label>E-post</Label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="navn@domene.no"
            style={{ width:'100%', padding:'14px 16px', background:KLW.pure, border:`1px solid ${KLW.hair}`, borderRadius: 16, font:'300 17px/1.2 '+KLW.sans, color: KLW.black, outline:'none', boxSizing:'border-box' }}/>

          <div style={{ height: 32 }}/>
          <CTALink onClick={e=>{e.preventDefault();onSubmit?.({people,weeks,email});}}>Gå til betaling</CTALink>
        </div>

        <aside style={{ background: KLW.curry, borderRadius: 16, padding: 28, position:'sticky', top: 96 }}>
          <Eyebrow>Ditt abonnement</Eyebrow>
          <div style={{ height: 12 }}/>
          <h3 style={{ fontFamily:KLW.serif, fontWeight:400, fontSize:30, lineHeight:1.1, margin:0 }}>Uke 17 · {people} voksne</h3>
          <div style={{ height: 20 }}/>
          <Row k="Tre middager" v={people===2 ? '6 porsjoner' : '12 porsjoner'} />
          <Row k="Frekvens" v={weeks==='hver'?'Hver uke':'Annenhver uke'} />
          <Row k="Levering" v="Lørdag kl. 08–14" />
          <div style={{ margin:'20px 0', borderTop:`1px solid ${KLW.black}` }}/>
          <Row k="Denne uken" v={people===2 ? '1 149 kr' : '1 989 kr'} bold />
          <Row k="Leveringsgebyr" v="0 kr" />
          <div style={{ height: 14 }}/>
          <div style={{ font:'300 13px/1.55 '+KLW.sans, color: KLW.black, opacity:.75 }}>
            Pause, endre eller stopp når som helst. Du betaler bare for kassen du mottar.
          </div>
        </aside>
      </div>
    </Section>
  );
}
function Row({ k, v, bold }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', font: `${bold?500:300} 16px/1.4 ${KLW.sans}`, color: KLW.black }}>
      <span>{k}</span><span>{v}</span>
    </div>
  );
}
function Label({ children }) {
  return <div style={{ font:'500 12px/1 '+KLW.sans, letterSpacing:'.16em', textTransform:'uppercase', color: KLW.black, marginBottom:10 }}>{children}</div>;
}
function Choices({ value, onChange, options }) {
  return (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
      {options.map(o=>(
        <button key={o.v} onClick={()=>onChange(o.v)} style={{
          appearance:'none', border:`1.5px solid ${value===o.v?KLW.black:KLW.hair}`, background: value===o.v?KLW.black:'transparent',
          color: value===o.v?KLW.white:KLW.black, borderRadius: 999, padding:'12px 20px', cursor:'pointer',
          font:'300 16px/1 '+KLW.sans,
        }}>{o.l}</button>
      ))}
    </div>
  );
}

function ThankYouView({ onHome }) {
  return (
    <Section bg={KLW.blue} pad="120px 24px" center>
      <img src="../../assets/mascots/mascot-signoff.png" alt="" style={{ width: 240, display:'inline-block' }}/>
      <div style={{ height: 10 }}/>
      <H2 size={72}>Takk — vi sees på lørdag.</H2>
      <div style={{ height: 18 }}/>
      <Body size={18} max={54}>
        Vi har sendt en bekreftelse til e-posten din. Første kasse pakkes fredag og leveres lørdag mellom 08 og 14. Du kan alltid pause eller endre på min&nbsp;side.
      </Body>
      <div style={{ height: 28 }}/>
      <CTALink onClick={e=>{e.preventDefault();onHome?.();}}>Tilbake til forsiden</CTALink>
    </Section>
  );
}

Object.assign(window, { SignupView, ThankYouView });
