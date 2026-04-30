// Høstmeny — ny 3-retters release
// Layout variant B: BIG RECIPE IMAGE hero — full-bleed food photograph,
// no text on the image. Title + meta + CTA sit in a calm eggshell band below.

function AutumnMenu() {
  return (
    <EmailShell>
      <Preheader text="Uke 40 · reinsdyr fra Stensaas, pannacotta med norske aromaepler" />
      <LogoRow />

      {/* Big recipe photograph — full-bleed. A warm placeholder surface with
          a sample plated dish styled as a photo. When the real food shoot
          lands, swap in a JPG here. */}
      <div style={{
        background: KL.dOrange,
        padding: 0, margin: 0, fontSize: 0,
        position: 'relative', height: 380, overflow: 'hidden',
      }}>
        {/* Soft radial warmth to simulate studio light */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, rgba(255,199,44,0.35) 0%, rgba(219,134,78,0) 60%)',
        }}/>
        {/* The copper pan / produce cluster, positioned and sized to feel
            like a plated dish shot rather than scattered cut-outs */}
        <img
          src="../../assets/images/hero-produce.png"
          alt="Reinsdyrkarré med jordskokk og tyttebær"
          style={{
            position: 'absolute',
            left: '50%', bottom: -40,
            transform: 'translateX(-50%)',
            width: 560, height: 'auto',
            objectFit: 'contain',
            objectPosition: 'center bottom',
            display: 'block',
          }}
        />
        {/* Photo-caption chip in lower-right — visible signal that this IS a dish photo */}
        <div style={{
          position: 'absolute', bottom: 14, right: 18,
          font: '500 10px/1 ' + KL.sans, letterSpacing: '.16em', textTransform: 'uppercase',
          color: KL.white, background: 'rgba(49,38,29,0.72)',
          padding: '6px 10px', borderRadius: 4,
        }}>Foto · uke 40 · Tore</div>
      </div>

      {/* Release band — title, meta, CTA, all in the calm space below the photo */}
      <div style={{
        background: KL.white,
        padding: '36px 48px 40px',
        textAlign: 'left',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          font: '500 12px/1.2 ' + KL.sans,
          letterSpacing: '.18em', textTransform: 'uppercase', color: KL.black,
          marginBottom: 18,
        }}>
          <span>Uke 40</span>
          <span style={{ width: 20, height: 1, background: KL.black, opacity: .3 }}/>
          <span style={{ color: KL.muted }}>Tre retter</span>
          <span style={{ width: 20, height: 1, background: KL.black, opacity: .3 }}/>
          <span style={{ color: KL.muted }}>2–4 voksne</span>
        </div>

        <h1 style={{
          fontFamily: KL.serif, fontWeight: 400,
          fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.01em',
          margin: 0, color: KL.black,
        }}>
          En meny for <em>norsk høst</em>
        </h1>

        <p style={{
          font: '300 17px/1.55 ' + KL.sans, color: KL.black,
          margin: '16px 0 0', maxWidth: 480,
        }}>
          Reinsdyr fra Stensaas, jordskokk fra Hasle Gård, pannacotta med Rørosrømme — hentet inn denne uken og plukket sammen av kjøkkensjef Tore.
        </p>

        <div style={{ marginTop: 24 }}>
          <CTA href="#">Bestill uke 40</CTA>
        </div>
      </div>

      {/* Courses */}
      <div style={{ background: KL.surface, padding: '32px 48px 12px' }}>
        <H2>Menyen</H2>
      </div>
      <div style={{ background: KL.surface }}>
        <MenuCourse
          n={1} course="Forrett"
          title="Sellerisuppe med røkt and og hasselnøtt"
          note="Forbered 20 min · tid på komfyr 15 min"
          divider={false}
          crop={{ size: '420px auto', pos: '-20px -30px' }}
        />
        <MenuCourse
          n={2} course="Hovedrett"
          title="Reinsdyrkarré med jordskokk og tyttebær"
          note="Forbered 15 min · tid på komfyr 35 min"
          crop={{ size: '420px auto', pos: '-270px -300px' }}
        />
        <MenuCourse
          n={3} course="Dessert"
          title="Pannacotta med norsk aromaeple og ristet havre"
          note="Forbered 10 min · hviletid 2 timer"
          crop={{ size: '420px auto', pos: '-20px -260px' }}
        />
      </div>

      <Section pad="32px 48px 40px" align="center">
        <Body size={15} max={420} align="center" ink={KL.muted}>
          Utviklet av kjøkkensjef Tore. Porsjonspakket for 2 eller 4 voksne. Leveres hos deg tirsdag eller onsdag.
        </Body>
        <div style={{ marginTop: 20 }}>
          <CTA href="#">Bestill uke 40</CTA>
        </div>
      </Section>

      <Signoff line="Gleder oss til å matche deg med høsten. — Tore" />
      <SocialRow />
      <Footer />
    </EmailShell>
  );
}
window.AutumnMenu = AutumnMenu;
