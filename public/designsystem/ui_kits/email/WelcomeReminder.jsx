// Velkomstserie — e-post 1
// Brand-pattern hero: cut-outs at corners, text + underline CTA centered.

function WelcomeReminder() {
  return (
    <EmailShell>
      <Preheader text="Tre middager i uken. Råvarer med navn. Ingen binding." />
      <LogoRow />

      <Hero
        bg={KL.pink}
        cutouts="welcome"
        minH={620}
        sticker={<Sticker bg={KL.yellow}>Spre<br/>matglede</Sticker>}
        stickerPos={{ top: 28, right: 28 }}
      >
        <Eyebrow>Velkommen</Eyebrow>
        <Title size={44}>Endelig, tid for <em>matkasse igjen!</em></Title>
        <Body size={17} max={380} align="center">
          Ferien nærmer seg slutt for de fleste, og vi gleder oss til å sende ut våre nydelige middager til dere.
        </Body>
        <div style={{ marginTop: 24 }}>
          <CTA href="#">Sjekk ditt abonnement</CTA>
        </div>
      </Hero>

      <Section pad="44px 48px 8px">
        <H2>Tre ting å vite</H2>
      </Section>
      <Section pad="0 48px 16px">
        <RuleRow n={1}>Råvarene kommer fra navngitte produsenter — Strøm-Larsen (slakter, Oslo, siden 1933), Galåvolden Gård (ost, Trøndelag), Stølsvidda (viltkjøtt, Valdres).</RuleRow>
        <RuleRow n={2}>Oppskriftene er utviklet av kjøkkensjef Tore — ikke av en algoritme.</RuleRow>
        <RuleRow n={3}>Ingen binding. Pause, endre eller stopp når du vil, fra min&nbsp;side.</RuleRow>
      </Section>

      <Section pad="28px 48px 40px" align="center">
        <CTA href="#">Bekreft første levering</CTA>
      </Section>

      <Signoff line="God matlyst — Tore" />
      <SocialRow />
      <Footer />
    </EmailShell>
  );
}
window.WelcomeReminder = WelcomeReminder;
