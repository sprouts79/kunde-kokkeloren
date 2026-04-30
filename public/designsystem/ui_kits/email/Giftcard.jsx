// Digitalt gavekort
// Layout variant C: type-led hero on a flat colour block, NO cut-outs.
// The voucher card below is the real visual anchor.

function Giftcard() {
  return (
    <EmailShell>
      <Preheader text="Gavekortet ditt er klart. Spre matglede når du vil." />
      <LogoRow />

      {/* Simple type-led hero — flat blue, centered sticker-over-title, no imagery */}
      <div style={{
        background: KL.blue,
        padding: '56px 48px 52px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ marginBottom: 22 }}>
          <Sticker bg={KL.yellow}>Spre<br/>matglede</Sticker>
        </div>
        <Eyebrow>Gavekort · digitalt</Eyebrow>
        <Title size={48} max={400}>Kokkelørens <em>Gavekort</em></Title>
        <Body size={17} max={400} align="center">
          Hei Jonas — her er gavekortet ditt. Gi det videre, eller løs det inn selv. Det gjelder alle våre matkasser og utløper aldri.
        </Body>
      </div>

      {/* Voucher — the hero of this email lives here */}
      <Section pad="40px 0 16px">
        <GiftCardVoucher
          from="Kjære Ida"
          to="Jonas"
          portions="3 serier gode middager hver uke · 2 voksne · 4 uker"
          code="KL-MATGLEDE-7H3K"
        />
      </Section>

      <Section pad="16px 48px 20px" align="center">
        <Body size={15} max={420} align="center" ink={KL.muted}>
          Koden aktiverer 4 uker med matkasser. Du kan velge 2- eller 4-porsjon, og bytte meny når du vil.
        </Body>
        <div style={{ marginTop: 22 }}>
          <CTA href="#">Løs inn gavekort</CTA>
        </div>
      </Section>

      <Section pad="8px 48px 28px" align="center">
        <CTA href="#">Se hvordan du løser inn</CTA>
      </Section>

      <Signoff line="Nyt matgleden. — Kokkeløren" />
      <SocialRow />
      <Footer />
    </EmailShell>
  );
}
window.Giftcard = Giftcard;
