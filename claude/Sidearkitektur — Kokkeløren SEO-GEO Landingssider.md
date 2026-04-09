# Sidearkitektur — Kokkeløren SEO/GEO Landingssider
**Versjon:** 1.0
**Dato:** 2026-04-08
**Eier:** Simpleness
**Status:** Fase 3 — Content gap & cluster-arkitektur

---

## 1. Content Gap-matrise

### Kokkeløren — Eksisterende organisk fotavtrykk
- **Nåværende sider på Google:** Kun brand-relatert synlighet (kokkeloren.no homepage, muligens subpages)
- **Innholdsstrategi:** Ingen dedikerte landingssider for problem-aware eller solution-aware spørringer
- **Manglende dekking:** 100% av informasjons- og investigasjonsspørringer

### Godtlevert — Konkurrentfotavtrykk
- **25+ artikler**, aktiv publisering, tema-sider innenfor:
  - "beste matkasse", "matkasse test", "matkasse sammenligninger"
  - Geo-sider: matkasse Oslo, matkasse Bergen
  - Segment-sider: vegetar, glutenfri, lavkarbo
- **STYRKE:** Etablert innholdsautoritet, mange siterable påstander
- **SVAKHET:** Generiske sammenligninger uten sterk POV for Godtlevert selv

### HelloFresh — Konkurrentfotavtrykk
- **500+ oppskrifter** + 100+ tema-sider (oppskrift-database-strategi)
- **Fokus:** Recipe-led, ikke sammenligning-led
- **STYRKE:** Organisk trafikk fra spørringer som "lavkarbo oppskrifter", "vegetar middag"
- **SVAKHET:** Ikke eier "matkasse vs. handle selv" eller "beste matkasse"-samtalen

### Matkassetorget.no — Aggregator/Komparator
- **Dominerer 48% av topp 5** på generiske spørringer
- **Fokus:** Review-sammenligning, ikke innholdsleder
- **STYRKE:** Authority i kategori-nivå
- **SVAKHET:** Ikke eier "hvorfor velge matkasse"-samtalen eller use case-spesifikk innhold

---

## 2. Content Gap-Analyse: Hva mangler?

### **GAP A: Problem-Aware — "Hvorfor og når velge matkasse?"**
| Spørring | Søkevolum | Konkurranse | Nåværende SERP | Gap |
|----------|-----------|------------|----------------|-----|
| matkasse vs handle selv | — | Lav | 0 resultater | **KRITISK** — ingen dekker dette |
| kan jeg lage middag selv eller bestille | — | Lav | 0 resultater | **KRITISK** — ingen dekker dette |
| matkasse eller vanlig matvarer | — | Lav | 0 resultater | **KRITISK** — ingen dekker dette |
| lage middag hver dag | 50/mnd* | Høy | BlogNorad, Aftenposten | Mulighet for innholdsstyrke |

*Estimert basert på related spørringer; ej i keyword planner

### **GAP B: Solution-Aware — "Hvilken matkasse skal jeg velge?"**
| Spørring | Søkevolum | Konkurranse | Nåværende SERP | Gap |
|----------|-----------|------------|----------------|-----|
| beste matkasse | 210/mnd | Høy | Godtlevert, Matkassetorget | Konkurrentert — kan vinnes med Kokkeløren POV |
| matkasse test | 480/mnd | Høy | Godtlevert, Aftenposten | Konkurrentert — Kokkeløren kan etabler POV |
| matkasse sammenligning | 100/mnd est. | Medium | Godtlevert (svak), Matkassetorget | Mulighet for Kokkeløren-eiet sammenligning |
| matkasse vegetar | 30/mnd | Lav | 0–1 dedikerte sider | **GAP** — egnet for Kokkeløren |
| matkasse glutenfri | 140/mnd | Medium | Godtlevert (nevnt), HelloFresh | Mulighet for spesifikk side |
| matkasse lavkarbo | 40/mnd | Medium | HelloFresh, enkelte blogger | Mulighet for spesifikk side |
| matkasse tilbud | 90/mnd | Høy | Godtlevert, Matkassetorget | Transaksjonell — egnet som ad-destinasjon |

### **GAP C: Product-Aware & Geo — "Hvor kan jeg få X-matkasse?"**
| Spørring | Søkevolum | Konkurranse | Nåværende SERP | Gap |
|----------|-----------|------------|----------------|-----|
| matkasse stavanger | 880/mnd | Lav | 0–1 resultater | **GOLD MINE** — lav konkurranse, relevans |
| matkasse oslo | 50/mnd | Lav | 0 resultater | **GOLD MINE** — stigende +125% YoY |
| matkasse trondheim | 90/mnd | Medium | 0 resultater | Mulighet — geo-relevant |
| matkasse pris | 50/mnd | Medium | Godtlevert, Matkassetorget | Mulighet for Kokkeløren-spesifikk side |
| matkasse familie | 20/mnd | Medium | 0 resultater | Niche — egnet for targeting |
| matkasse student | 20/mnd | Lav | 0 resultater | Stigende +200% YoY — oppvokst potensial |
| matkasse barn | 20/mnd | Medium | 0 resultater | Niche — mulighet for Kokkeløren |

### **GAP D: Transaksjonelle — "Hvordan besteller jeg og hva koster det?"**
| Spørring | Søkevolum | Konkurranse | Nåværende SERP | Gap |
|----------|-----------|------------|----------------|-----|
| bestille middag hjem | 30/mnd | Høy | HelloFresh, Godtlevert | Konkurrentert — ad-destinasjon |
| middagslevering | 50/mnd | Høy | HelloFresh, Godtlevert | Konkurrentert — ad-destinasjon |
| matkasse gave | 30/mnd | Høy | Godtlevert, HelloFresh | Niche — egnet for Kokkeløren |

---

## 3. Prioritert sidearkitektur (Hub-and-Spoke + Geo-silo)

### **Arkitektur-logikk**
- **Pillar page:** "Matkasse — Komplett guide" (hub for alle other pages)
- **Cluster pages (solution-aware):** Matkasse-sammenligninger, test, segment-spesifikk
- **Geo-sider:** Stavanger, Oslo, Trondheim (separate silo per geo)
- **Niche-sider:** Vegetar, glutenfri, lavkarbo, gave, familie, student
- **Transaksjonelle:** Bruk som ad-destinasjoner (ikke egne sider, men optimér existing product pages)

### **Totalt antall sider: 13 (Fase 1)**
- 1 pillar page
- 5 cluster pages (komparator, test, pris, problem-aware)
- 3 geo-sider
- 4 niche-sider

---

## 4. Detaljert sidearkitektur

### **PILLAR PAGE**

#### 1. Matkasse — Komplett Guide & Sammenligning
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-guide` |
| **Primærkeyword** | matkasse (4400/mnd) |
| **Sekundærkeywords** | matkasse norge, matkasse beste, matkasse test |
| **Søkeintensjon** | Informational + Commercial |
| **Awareness** | Problem-aware → Solution-aware |
| **Innholdstype** | Pillar page (hub) |
| **Prioritet** | Tier 1 — BYGG FØRST |
| **Estimert søkevolum** | 4400 + secondary terms ≈ 6000+ potensial |
| **Konkurranse** | Medium |

**Innholdsstruktur:**
- H1: "Matkasse — Hva er det, og hvordan velger du riktig?"
- H2: "Hva er en matkasse?"
  - Definisjon, fordeler vs. handle selv, når er det for deg
  - Sitérbar påstand: "X% av nordmenn bruker matkasse-tjeneste (kilder: SSB, polling)"
- H2: "Kokkeløren vs. andre matkasser"
  - Sammenligning-tabell: Kokkeløren, Godtlevert, HelloFresh, Adams Matkasse
  - USP-fokus: [Kokkeløren-unike aspekter fra brand context]
  - Sitérbar påstand: "Kokkeløren har [X]-valgalternativer per uke" eller "Y% kundetilfredshet"
- H2: "Hva koster en matkasse?"
  - Prisspekter, kostnadssammenligninger
  - Sitérbar påstand: "En gjennomsnittsmatkasse koster 150–300 kr per portion (basert på analyse av 5 leverandører)"
- H2: "Kokkeløren — Spesifikk fordel"
  - [Premium-posisjonering, unikt utsalgspunkt]
- H2: "Vanlige spørsmål om matkasser"
  - FAQ-format (for schema markup)

**Intern lenking:**
- Lenker ut til alle cluster- og niche-sider
- Lenker til Kokkeløren product pages (priser, bestilling)

---

### **CLUSTER PAGES — SOLUTION-AWARE**

#### 2. Beste Matkasse 2026 — Test & Sammenligning
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/beste-matkasse` |
| **Primærkeyword** | beste matkasse (210/mnd) |
| **Sekundærkeywords** | matkasse test, matkasse sammenligning, matkasse test 2026 |
| **Søkeintensjon** | Commercial investigation |
| **Awareness** | Solution-aware |
| **Innholdstype** | Cluster page (sammenligning) |
| **Prioritet** | Tier 1 — BYGG FØRST |
| **Estimert søkevolum** | 210 primary + 480 (test) + secondary ≈ 800+ |
| **Konkurranse** | Høy (men Kokkeløren POV mulig) |

**Innholdsstruktur:**
- H1: "Beste Matkasse 2026 — Komplett Test og Sammenligning"
- H2: "Testkriterier: Slik rangerer vi"
  - Smak, variasjon, matsvinn, pris, levering, kundeservice
  - Transparent metodologi
- H2: "Topplisten 2026"
  - Tabell-format med rating (1–5 stjerner per kategori)
  - Fokus: Kokkeløren posisjoneres som premium/best-in-category på [relevant metrikk, f.eks. "variasjon", "bærekraft"]
  - Sitérbar påstand: "Kokkeløren oppnådde høyeste poengsum innenfor [kategori] med [tall] poeng ut av 100"
- H2: "Kokkeløren — Hvorfor den vinner i [kategori]"
  - Deep dive: Prosess, sourcing, kvalitet
  - Sitérbar påstand: "Kokkeløren partnerer med [X] lokale produsenter, reduserer leveringstid til [Y] timer"
- H2: "Matkasse for deg?"
  - Veivalg etter behov (pris, allergi, etikk, etc.)

**Schema markup:**
- BreadcrumbList (Pillar → denne siden)
- Article + AggregateRating + ItemList (for matkasse-sammenligningen)

**Intern lenking:**
- ← Fra: Pillar page ("beste matkasse" link)
- → Til: Geo-sider ("du bor i Stavanger? Se lokal tilgjengelighet")
- → Til: Niche-sider (vegetar, glutenfri, lavkarbo)

---

#### 3. Matkasse vs. Handle Selv — Hva er best?
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-vs-handle-selv` |
| **Primærkeyword** | matkasse vs handle selv |
| **Sekundærkeywords** | lage middag selv eller bestille, matkasse fordeler, matkasse ulemper |
| **Søkeintensjon** | Informational |
| **Awareness** | Problem-aware |
| **Innholdstype** | Cluster page (problem-framing) |
| **Prioritet** | Tier 1 — BYGG FØRST |
| **Estimert søkevolum** | 50–80/mnd (low volume, HIGH intent) |
| **Konkurranse** | Lav (GAP OPPORTUNITY) |

**Innholdsstruktur:**
- H1: "Matkasse vs. Handle Selv — Fullstendig Kostnads- og Tidssammenligning"
- H2: "Kostnadene sammenlignet"
  - Matvarekurv: 1 uke med matkasse vs. dagligvare
  - Sitérbar påstand: "Matkasse koster gjennomsnittlig [X] kr/uke, dagligvare [Y] kr/uke — [prosentvis forskjell] (basert på SSA-priindeks)"
- H2: "Tidsbruk — Planlegging, innkjøp, tilberedning"
  - Timetabell: Matkasse = X timer, selv = Y timer pr. uke
  - Sitérbar påstand: "En gjennomsnittsfamilie sparer [X] timer/uke med matkasse (basert på Simpleness customer data)"
- H2: "Kvalitet og matsvinn"
  - Friskhet, lagring, avfall
  - Sitérbar påstand: "Matkasse reduserer matsvinn med [X]% sammenlignet med egen innkjøp (kilder: REN/Matsvinnrapporten)"
- H2: "Når er matkasse best for deg?"
  - Persona-matrise: Opptatt karrieremenneske, småbarnsfamilie, student, pensjonist
  - Plass for Kokkeløren POV: "Kokkeløren passer best hvis du [X]"
- H2: "Kokkeløren — Perfekt for [persona]"
  - Connector-seksjon til product pages

**Schema markup:**
- Article
- FAQPage (hvis innhold er FAQ-strukturert)

**Intern lenking:**
- ← Fra: Pillar page
- → Til: Niche-sider (familie, student)
- → Til: Geo-sider (lokalisering av levering)

---

#### 4. Matkasse Pris — Hva Koster Det?
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-pris` |
| **Primærkeyword** | matkasse pris (50/mnd) |
| **Sekundærkeywords** | hvor mye koster matkasse, billigste matkasse, matkasse kostnad |
| **Søkeintensjon** | Commercial investigation |
| **Awareness** | Solution-aware |
| **Innholdstype** | Cluster page |
| **Prioritet** | Tier 1 — AD-DESTINASJON |
| **Estimert søkevolum** | 50 + related ≈ 150–200 |
| **Konkurranse** | Medium |

**Innholdsstruktur:**
- H1: "Matkasse Pris 2026 — Kostnader og Prissammenligninger"
- H2: "Typisk pris på matkasse"
  - Prisintervall, portion-størrelse, abonnementsmodeller
  - Sitérbar påstand: "Gjennomsnittlig matkasse-pris ligger på 150–350 kr per porsjon (basert på analyse av 6 norske leverandører i 2026)"
- H2: "Kokkeløren — Prismodell og Abonnementer"
  - Direkte pricing, bundles, rabatter for første ordre
  - Transparent sammenligning med konkurrenter
- H2: "Hvordan sparer du penger på matkasse"
  - Tips for budsjettering, familierabatter, etc.
- H2: "Gratis forsøk eller rabatt?"
  - Kokkeløren-tilbud, vilkår

**Intern lenking:**
- ← Fra: Pillar, "beste matkasse"
- → Til: Geo-sider
- → Til: Product pages (bestilling)

---

#### 5. Matkasse Tilbud & Rabatter 2026
| Attribut | Verdi |
|-----------|-------|
| **URL** | `/matkasse-tilbud` |
| **Primærkeyword** | matkasse tilbud (90/mnd) |
| **Sekundærkeywords** | matkasse rabatt, billigste matkasse, gratis prøve matkasse |
| **Søkeintensjon** | Transactional |
| **Awareness** | Product-aware |
| **Innholdstype** | Cluster page + AD-DESTINASJON |
| **Prioritet** | Tier 1 — KONVERSJONSFOKUS |
| **Estimert søkevolum** | 90 + related ≈ 150 |
| **Konkurranse** | Høy |

**Innholdsstruktur:**
- H1: "Matkasse Tilbud 2026 — Aktive Rabatter og Kampanjer"
- H2: "Kokkeløren tilbud nå"
  - Gjeldende kampanje, vilkår, bindingstid
  - CTA i hver seksjon
- H2: "Hvordan løse inn kode?"
  - Step-by-step til bestilling
- H2: "FAQ: Vilkår og levering"
  - Bindingstid, returrett, levering

**Nota bene:** Denne siden er designet som ad-destinasjon for kampanjer. Må oppdateres regelmessig (monthly/quarterly).

**Intern lenking:**
- ← Fra: Alle andre cluster pages ("søk etter rabatter")
- → Til: Product pages (checkout)

---

### **CLUSTER PAGES — NICHE/SEGMENT**

#### 6. Matkasse Vegetar — For Vegetarianere
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-vegetar` |
| **Primærkeyword** | matkasse vegetar (30/mnd, +50% YoY) |
| **Sekundærkeywords** | vegetarisk matkasse, vegetariske oppskrifter, vegansk alternativ |
| **Søkeintensjon** | Commercial investigation |
| **Awareness** | Solution-aware |
| **Innholdstype** | Cluster page (niche) |
| **Prioritet** | Tier 1 — NICHE OPPORTUNITY |
| **Estimert søkevolum** | 30 primary + secondary ≈ 80–120 |
| **Konkurranse** | Lav |

**Innholdsstruktur:**
- H1: "Matkasse Vegetar — Kokkeløren sitt Vegetariske Utvalg"
- H2: "Hva er vegetar matkasse?"
  - Definisjon, fordeler
- H2: "Kokkeløren vegetarisk meny"
  - Antall vegetariske oppskrifter per uke, eksempler
  - Sitérbar påstand: "Kokkeløren tilbyr [X] rene vegetariske oppskrifter per uke, samt [Y] fleksible oppskrifter med vegetarisk alternativ"
- H2: "Ernæring og protein i vegetarisk mat"
  - Hvordan sikrer man tilstrekkelig protein, B12, etc.
  - Sitérbar påstand: "Kokkeløren sitt vegetariske utvalg inneholder gjennomsnittlig [X]g protein per porsjon"
- H2: "Eksempler på vegetariske oppskrifter fra Kokkeløren"
  - 2–3 konkrete oppskrifter (eller lenker til oppskrift-database)
- H2: "Kokkeløren eller vegansk?"
  - Veileding mellom vegansk/vegetar-meny

**Intern lenking:**
- ← Fra: Pillar, "beste matkasse"
- → Til: Oppskrift-database (hvis eksisterer)
- → Til: Product pages

---

#### 7. Matkasse Glutenfri — For Glutenintoleranse
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-glutenfri` |
| **Primærkeyword** | matkasse glutenfri (140/mnd, Medium konkurranse) |
| **Sekundærkeywords** | glutenfri oppskrifter, allergivennlig matkasse |
| **Søkeintensjon** | Commercial investigation |
| **Awareness** | Solution-aware |
| **Innholdstype** | Cluster page (allergi-niche) |
| **Prioritet** | Tier 1 — MEDISINSK FOKUS |
| **Estimert søkevolum** | 140 + secondary ≈ 200–250 |
| **Konkurranse** | Medium |

**Innholdsstruktur:**
- H1: "Matkasse Glutenfri — Kokkeløren sitt Glutenfri Sortiment"
- H2: "Hva er glutenfri matkasse og hvorfor?"
  - Forklaring av glutenintoleranse vs. cøliaki
  - Fordeler med glutenfri matkasse-levering
- H2: "Kokkeløren glutenfri meny"
  - Antall oppskrifter, sourcing, merking
  - Sitérbar påstand: "Kokkeløren tilbyr [X] glutenfrie oppskrifter per uke, alle sertifisert av [sertifisering]"
- H2: "Sikkerhet og merking"
  - Hvordan unngår Kokkeløren krysskontaminasjon?
  - Sitérbar påstand: "Kokkeløren bruker [X]-prosess for merking av glutenfrie ingredienser"
- H2: "Kokkeløren vs. selv-shopping for glutenfrie"
  - Tid, bekvemmelighet, sikkerhet
- H2: "Eksempler på glutenfri oppskrifter"

**Intern lenking:**
- ← Fra: Pillar, "beste matkasse"
- → Til: Allergi/ernærings-ressurser (eksterne autoriteter som coeliac.no)

---

#### 8. Matkasse Lavkarbo — For Lavkarbo Diett
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-lavkarbo` |
| **Primærkeyword** | matkasse lavkarbo (40/mnd) |
| **Sekundærkeywords** | lavkarbo oppskrifter, LCHF matkasse, keto-vennlig mat |
| **Søkeintensjon** | Commercial investigation |
| **Awareness** | Solution-aware |
| **Innholdstype** | Cluster page (diett-niche) |
| **Prioritet** | Tier 2 — FASE 2 |
| **Estimert søkevolum** | 40 + secondary ≈ 100–150 |
| **Konkurranse** | Medium |

**Innholdsstruktur:**
- H1: "Matkasse Lavkarbo — LCHF og Keto-Vennlig Matkasse fra Kokkeløren"
- H2: "Hva er lavkarbo og hvorfor?"
  - Kort intro til LCHF/keto
- H2: "Kokkeløren lavkarbo-meny"
  - Antall oppskrifter, sammensetning (protein, fett, karb)
  - Sitérbar påstand: "Kokkeløren sine lavkarbo-oppskrifter inneholder i gjennomsnitt [X]g karbohydrater per porsjon"
- H2: "Ernæring i lavkarbo-mat"
  - Hvordan sikre mikronæringer, elektrolytter
- H2: "Kokkeløren vs. HelloFresh lavkarbo"
  - Konkurrent-sammenligning
- H2: "Eksempler på lavkarbo oppskrifter"

**Intern lenking:**
- ← Fra: Pillar, "beste matkasse"
- → Til: Oppskrift-database

---

#### 9. Matkasse Gave — Gaveforslag
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-gave` |
| **Primærkeyword** | matkasse gave (30/mnd, Høy konkurranse) |
| **Sekundærkeywords** | gave idé, julegave matkasse, bursdagsgave matkasse |
| **Søkeintensjon** | Transactional |
| **Awareness** | Product-aware |
| **Innholdstype** | Cluster page + AD-DESTINASJON |
| **Prioritet** | Tier 2 — SESONGRESSURS |
| **Estimert søkevolum** | 30 primary + secondary ≈ 80–120 |
| **Konkurranse** | Høy |

**Innholdsstruktur:**
- H1: "Matkasse som Gave — Sjekkliste og Idéer fra Kokkeløren"
- H2: "Hvorfor velge matkasse som gave?"
  - Fordeler vs. tradisjonelle gaver
  - Sitérbar påstand: "[X]% av mottakere sier de liker matkasse-gave bedre enn tradisjonelle gaver (kilde: Simpleness survey)"
- H2: "Gave-pakker fra Kokkeløren"
  - Rabatt-koder, gave-kuvert, personalisering
  - CTA til bestilling
- H2: "Perfekt gave for [rolle]"
  - Veivalg: Venner, familie, kollega, etc.
- H2: "FAQ: Hvordan fungerer det?"
  - Når starter abonnementet, skattlegging, returnering

**Nota bene:** Denne siden er sesongrelevant (mai/juni før sommerkrav, oktober–november før julegaver). Optimer tema rundt slike perioder.

---

### **GEO-SIDER — LOKALE LANDINGSSIDER**

**Arkitektur-logikk:** Geo-sider eies av lokale intent. Stavanger er Tier 1 pga. høyt søkevolum + lav konkurranse. Oslo og Trondheim er Tier 2 pga. stigende trend.

#### 10. Matkasse Stavanger — Lokal Levering og Pris
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-stavanger` |
| **Primærkeyword** | matkasse stavanger (880/mnd, Lav konkurranse) |
| **Sekundærkeywords** | matkasse levering stavanger, matkasse stavanger pris |
| **Søkeintensjon** | Commercial investigation + Transactional |
| **Awareness** | Solution-aware → Product-aware |
| **Innholdstype** | Geo-cluster page |
| **Prioritet** | Tier 1 — HØYT VOLUM, LAV KONKURRANSE |
| **Estimert søkevolum** | 880 ≈ Høyeste volum i geo-strategi |
| **Konkurranse** | Lav |

**Innholdsstruktur:**
- H1: "Matkasse Stavanger — Lokal Levering fra Kokkeløren"
- H2: "Levering i Stavanger"
  - Områder som dekkes, leveringsdager/-tider
  - Sitérbar påstand: "Kokkeløren leverer til Stavanger sentrum, Forus og omegn — [X] områder dekket"
- H2: "Matkasse pris i Stavanger"
  - Lokalisert pricing, transport-kostnader, gjennomsnitt
  - Sitérbar påstand: "Matkasse-priser i Stavanger starter fra [X] kr, med levering inkludert"
- H2: "Kokkeløren vs. lokale konkurrenter"
  - Stavanger-spesifikk sammenligning (hvis Godtlevert leverer lokalt)
  - Fokus på Kokkeløren-fordeler
- H2: "Hva bestiller Stavanger-folk fra Kokkeløren?"
  - Lokalt insikt (hvis data eksisterer): populære oppskrifter, sesonger, preferanser
  - Sitérbar påstand: "Stavanger-kundene velger [X] som populæreste meny"
- H2: "Bestill nå fra Stavanger"
  - CTA + rabattfelt
  - Link til signup-flow

**Schema markup:**
- LocalBusiness (Kokkeløren i Stavanger)
- BreadcrumbList
- Article

**Intern lenking:**
- ← Fra: Pillar, geo-veileding
- ← Fra: "beste matkasse" (geo-filter)
- → Til: Product pages (checkout, lokalisert for Stavanger)

---

#### 11. Matkasse Oslo — Lokal Levering og Pris
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-oslo` |
| **Primærkeyword** | matkasse oslo (50/mnd, Lav konkurranse, +125% YoY) |
| **Sekundærkeywords** | matkasse levering oslo, matkasse pris oslo |
| **Søkeintensjon** | Commercial investigation + Transactional |
| **Awareness** | Solution-aware → Product-aware |
| **Innholdstype** | Geo-cluster page |
| **Prioritet** | Tier 2 — STIGENDE TREND |
| **Estimert søkevolum** | 50 primary, men +125% YoY = potensial ≈ 150–250 fremover |
| **Konkurranse** | Lav |

**Innholdsstruktur:**
- H1: "Matkasse Oslo — Rask Levering og Premium Kvalitet"
- H2: "Levering i Oslo"
  - Områder (Øst, Vest, Sentrum, Indre Østland)
  - Leveringstider, samme-dag levering?
- H2: "Matkasse pris Oslo"
  - Prissammenligninger for Oslo-område
  - Sitérbar påstand: "Matkasse i Oslo koster gjennomsnittlig [X] kr per uke, Kokkeløren [Y] kr"
- H2: "Kokkeløren Oslo — Spesiell fordel?"
  - Premium posisjonering for Oslo (urbant, travelt, kvalitetsbevisst)
  - Sitérbar påstand: "[X]% av Kokkeløren-kundene i Oslo er urbane karrieremennesker som verdsetter tid over pris"
- H2: "Bestill fra Oslo"
  - CTA, rabatt

**Schema markup:**
- LocalBusiness
- Article

**Intern lenking:**
- ← Fra: Pillar, geo-veileding
- → Til: Product pages

---

#### 12. Matkasse Trondheim — Lokal Levering
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-trondheim` |
| **Primærkeyword** | matkasse trondheim (90/mnd, Medium konkurranse) |
| **Sekundærkeywords** | matkasse levering trondheim |
| **Søkeintensjon** | Commercial investigation + Transactional |
| **Awareness** | Solution-aware → Product-aware |
| **Innholdstype** | Geo-cluster page |
| **Prioritet** | Tier 2 — MEDIUM VOLUM |
| **Estimert søkevolum** | 90 + secondary ≈ 150–180 |
| **Konkurranse** | Medium |

**Innholdsstruktur:**
- H1: "Matkasse Trondheim — Lokal Levering fra Kokkeløren"
- H2: "Levering i Trondheim"
- H2: "Pris og abonnement"
- H2: "Bestill nå"

*(Samme struktur som Oslo/Stavanger, men skalert til volum og lokalt insikt)*

---

### **BONUS: FAMILIE OG STUDENT (Tier 2 — Fase 2)**

Disse er planlagt for Tier 2 pga. lav (men stigende) søkevolum. Inkluder i dokumentet for fremtida, men prioritér ikke i første sprint.

#### 13. Matkasse Familie — For Småbarnsfamilier
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-familie` |
| **Primærkeyword** | matkasse familie (20/mnd) |
| **Sekundærkeywords** | matkasse med barn, familierabatt matkasse |
| **Søkeintensjon** | Commercial investigation |
| **Awareness** | Solution-aware |
| **Innholdstype** | Cluster page |
| **Prioritet** | Tier 2 — FASE 2 |
| **Estimert søkevolum** | 20 + secondary ≈ 60–80 |
| **Konkurranse** | Medium |

*Innholdsstruktur identisk til andre segment-sider (vegetar, glutenfri) — fokus på barnevenlige oppskrifter, ernæring, allergiveiledning.*

---

#### 14. Matkasse Student — For Studenter
| Attributt | Verdi |
|-----------|-------|
| **URL** | `/matkasse-student` |
| **Primærkeyword** | matkasse student (20/mnd, +200% YoY) |
| **Sekundærkeywords** | billig matkasse, studentrabatt matkasse |
| **Søkeintensjon** | Commercial investigation |
| **Awareness** | Solution-aware |
| **Innholdstype** | Cluster page |
| **Prioritet** | Tier 2 — STIGENDE TREND |
| **Estimert søkevolum** | 20 primary, +200% YoY = potensial ≈ 80–120 fremover |
| **Konkurranse** | Lav |

*Fokus: Kostnadsbesparelse, lett tilberedning, sosial aspekt (kokking for venner), studentrabatt.*

---

## 5. Hub-and-Spoke Visual

```
                    ┌─────────────────────┐
                    │  PILLAR PAGE        │
                    │ Matkasse — Komplett │
                    │    Guide            │
                    │ (/matkasse-guide)   │
                    └─────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        │         ┌───────────┴────────┐            │
        │         │  CLUSTER PAGES     │            │
        │         │  (Solution-Aware)  │            │
        │         └────────────────────┘            │
        │              │                             │
        │    ┌─────────┼─────────────────┐          │
        │    │         │                 │          │
    ┌───▼────▼──┐  ┌───▼────────┐  ┌────▼──────┐  │
    │ Beste     │  │ Matkasse   │  │ Pris &    │  │
    │ Matkasse  │  │ vs Handle  │  │ Tilbud    │  │
    │           │  │ Selv       │  │           │  │
    └───────────┘  └────────────┘  └───────────┘  │
        │                                           │
        │         ┌───────────┴────────┐            │
        │         │  NICHE PAGES       │            │
        │         │  (Segment)         │            │
        │         └────────────────────┘            │
        │              │                             │
    ┌───┴──┬──────┬────┴──┐                         │
    │      │      │       │                         │
    │  ┌───▼──┐ ┌──▼───┐ ┌──▼───┐                  │
    │  │Veget.│ │Glut. │ │Lav K.│                  │
    │  └──────┘ └──────┘ └──────┘                  │
    │                                               │
    │         ┌───────────┴────────┐                │
    │         │  GEO-PAGES         │                │
    │         │  (Lokale spørringer)                │
    │         └────────────────────┘                │
    │              │                                │
    │    ┌─────────┼──────────┐                     │
    │    │         │          │                     │
┌──▼────▼──┐  ┌────▼───┐  ┌───▼──────┐             │
│ Stavanger │  │ Oslo   │  │Trondheim │             │
└───────────┘  └────────┘  └──────────┘             │
    │                                               │
    │    ┌──────────────────┐                       │
    │    │  TRANSACTIONAL   │                       │
    │    │  PAGES           │                       │
    │    └──────────────────┘                       │
    │         │                                     │
┌──▼────┐  ┌──▼────┐                               │
│Gave   │  │Product│                               │
│Pages  │  │Pages  │                               │
└───────┘  └───────┘                               │
    │         │                                     │
    └─────────┴─────────────────────────────────────┘
                   (All link to Pillar)
```

---

## 6. Intern lenke-strategi (Silo-struktur)

### **Siloing-logikk**
- **Pillar silo:** Alle sider lenker ut fra pillar, pillar lenker ut til alle
- **Geo-subsilo:** Geo-sider lenker til hverandre og pillar, men primært til lokalt relevant innhold
- **Segment-subsilo:** Niche-sider lenker til hverandre via "se også"-mekanismer
- **Cross-silos:** Transaksjonelle sider (gave, tilbud, product pages) lenkes fra alle cluster-sider

### **Konkrete lenkemønstre**

#### Fra Pillar page (`/matkasse-guide`):
```
H2 "Beste Matkasse?" → → /beste-matkasse
H2 "Matkasse vs. handle selv?" → → /matkasse-vs-handle-selv
H2 "Prissammenligninger" → → /matkasse-pris
H2 "Vegetarisk? Glutenfri? Lavkarbo?" → → /matkasse-vegetar, /matkasse-glutenfri, /matkasse-lavkarbo
H2 "Du bor i..." → → /matkasse-stavanger, /matkasse-oslo, /matkasse-trondheim
CTA "Søk etter tilbud" → → /matkasse-tilbud
CTA "Gaveide" → → /matkasse-gave
```

#### Fra Cluster pages (f.eks. `/beste-matkasse`):
```
Intro → "Les mer om matkasse generelt" → /matkasse-guide
"Kokkeløren for vegetarianere?" → /matkasse-vegetar
"Kokkeløren i Stavanger?" → /matkasse-stavanger
"Se aktive tilbud" → /matkasse-tilbud
CTA "Bestill nå" → Product pages
```

#### Fra Geo-sider (f.eks. `/matkasse-stavanger`):
```
"Hva skal jeg velge?" → /beste-matkasse
"Hva koster det?" → /matkasse-pris
"Vegetarisk meny?" → /matkasse-vegetar
"Se alle område" → /matkasse-oslo, /matkasse-trondheim
CTA "Bestill fra Stavanger" → Product pages (lokalisert)
```

#### Fra Niche-sider (f.eks. `/matkasse-vegetar`):
```
"Lese mer om matkasse?" → /matkasse-guide
"Bestille nå?" → /matkasse-tilbud, Product pages
"Andre allergi/preferanser?" → /matkasse-glutenfri, /matkasse-lavkarbo
"I ditt område?" → /matkasse-stavanger, etc.
```

---

## 7. Prioritert implementeringsplan (Fase 4 — Build)

### **Sprint 1 (Uke 1–2): Pillar + Core Cluster Pages**
1. **Matkasse — Komplett Guide** (`/matkasse-guide`) — 4000–5000 ord
   - Definisjon, fordeler, sammenligning, Kokkeløren-fokus
2. **Beste Matkasse 2026** (`/beste-matkasse`) — 3500–4500 ord
   - Test-metodologi, ranking, siterable påstander
3. **Matkasse vs. Handle Selv** (`/matkasse-vs-handle-selv`) — 3000–3500 ord
   - Problem-framing, kostnads-/tidssammenligninger

*Ansvarlig: seo-content-writer + geo-content-optimizer*

### **Sprint 2 (Uke 3–4): Geo-sider + Transaksjonelle**
4. **Matkasse Stavanger** (`/matkasse-stavanger`) — 2500–3000 ord
5. **Matkasse Oslo** (`/matkasse-oslo`) — 2000–2500 ord
6. **Matkasse Pris** (`/matkasse-pris`) — 2500–3000 ord
7. **Matkasse Tilbud** (`/matkasse-tilbud`) — 1500–2000 ord (ofte oppdatert)

*Ansvarlig: seo-content-writer + geo-content-optimizer + meta-tags-optimizer*

### **Sprint 3 (Uke 5–6): Niche-sider**
8. **Matkasse Vegetar** (`/matkasse-vegetar`) — 2500–3000 ord
9. **Matkasse Glutenfri** (`/matkasse-glutenfri`) — 2500–3000 ord
10. **Matkasse Gave** (`/matkasse-gave`) — 2000–2500 ord
11. **Matkasse Trondheim** (`/matkasse-trondheim`) — 2000–2500 ord

*Ansvarlig: seo-content-writer + geo-content-optimizer*

### **Sprint 4 (Uke 7–8): QA + Refinement**
12. **Matkasse Lavkarbo** (`/matkasse-lavkarbo`) — 2500–3000 ord (hvis Tier 1 prioritet)
13. **Internal linking + Visual briefs**
14. **Content quality audit** (CORE-EEAT 80/100 gate)
15. **On-page SEO audit** (meta tags, schema, etc.)

*Ansvarlig: content-quality-auditor + on-page-seo-auditor + internal-linking-optimizer*

---

## 8. Forventet resultat & metriker

### **Organisk trafikk-prognose (6 mnd etter lansering)**
| Side | Primærkeyword | Vol/mnd | SERP-posisjon mål | Forventet trafikk |
|------|---------------|---------|-------------------|-------------------|
| Pillar | matkasse | 4400 | Top 10 (pos. 5–7) | 400–600 |
| Beste Matkasse | beste matkasse | 210 | Top 10 (pos. 3–5) | 60–100 |
| Stavanger | matkasse stavanger | 880 | Top 3 (pos. 1–2) | 250–350 |
| Oslo | matkasse oslo | 50 | Top 5 (pos. 1–3) | 25–40 |
| vs. Handle Selv | [niche spørring] | 50–80 | Top 5 (pos. 1–2) | 30–50 |
| **TOTAL** | | ~5600 | — | **765–1140/mnd** |

*Notat: Prognoser er konservative. Kokkeløren kan oppnå høyere ranking hvis innholdskvalitet og on-page SEO er optimal.*

### **AI Citation Target**
- Minst 3 siterable påstander per side (tall, kilder, sitater)
- Fokus på unique insikt (Kokkeløren-data, customer surveys, etc.) som LLM-er prioriterer
- Expected AI citation flow: ChatGPT, Perplexity, Google AI Overviews, Gemini

### **Ad Performance (Meta/Google)**
- Landing pages designet for message match
- Geo-sider for lokale kampanjer
- Tilbud-siden som seasonal/evergreen destination

---

## 9. Åpne spørsmål før bygging

1. **CMS-valg:** Hvilken platform skal sidene bygges i? (Påvirker intern lenking og schema-implementasjon)
2. **Kokkeløren-data:** Finnes det customer data (antall vegetar-oppskrifter, gjennomsnittlig pris, customer satisfaction) som kan siteres?
3. **Konkurrent-data:** Skal Godtlevert, HelloFresh og Adams Matkasse nøyaktig prises/sammenlignes, eller kun refereres?
4. **Lokalisering:** Beyond Stavanger/Oslo/Trondheim — andre byer (Bergen, Tromsø, etc.)?
5. **Oppskrift-database:** Finnes en eksisterende oppskrift-database som kan lenkes fra segment-sider?
6. **Oppdaterings-regime:** Hvem og hvor ofte skal `matkasse-tilbud` oppdateres?

---

## 10. Vedlegg: Sidearkitektur-oversikt (Implementeringsmatrise)

| # | Side | URL | Primærkeyword | Vol/mnd | Konkurranse | Innholdstype | Tier | Status |
|----|------|-----|---------------|---------|-------------|--------------|------|--------|
| 1 | Matkasse Guide | `/matkasse-guide` | matkasse | 4400 | Medium | Pillar | T1 | — |
| 2 | Beste Matkasse | `/beste-matkasse` | beste matkasse | 210 | Høy | Cluster | T1 | — |
| 3 | vs. Handle Selv | `/matkasse-vs-handle-selv` | — | 50–80 est. | Lav | Cluster | T1 | — |
| 4 | Pris | `/matkasse-pris` | matkasse pris | 50 | Medium | Cluster | T1 | — |
| 5 | Tilbud | `/matkasse-tilbud` | matkasse tilbud | 90 | Høy | Cluster + Transact. | T1 | — |
| 6 | Stavanger | `/matkasse-stavanger` | matkasse stavanger | 880 | Lav | Geo-cluster | T1 | — |
| 7 | Oslo | `/matkasse-oslo` | matkasse oslo | 50 | Lav | Geo-cluster | T2 | — |
| 8 | Trondheim | `/matkasse-trondheim` | matkasse trondheim | 90 | Medium | Geo-cluster | T2 | — |
| 9 | Vegetar | `/matkasse-vegetar` | matkasse vegetar | 30 | Lav | Niche-cluster | T1 | — |
| 10 | Glutenfri | `/matkasse-glutenfri` | matkasse glutenfri | 140 | Medium | Niche-cluster | T1 | — |
| 11 | Lavkarbo | `/matkasse-lavkarbo` | matkasse lavkarbo | 40 | Medium | Niche-cluster | T2 | — |
| 12 | Gave | `/matkasse-gave` | matkasse gave | 30 | Høy | Niche + Transact. | T2 | — |
| 13 | Familie* | `/matkasse-familie` | matkasse familie | 20 | Medium | Niche-cluster | T2 | — |

*Familie og Student er planlagt for Tier 2 (Fase 2). Ikke prioritert i Sprint 1–3.

---

## Referanser og kilder

- **Keyword research:** Google Ads Keyword Planner (data fra klient 2026-04-08)
- **SERP-analyse:** Top 10 organiske resultater per keyword cluster
- **Konkurrentanalyse:** Godtlevert (25 artikler), HelloFresh (500+ oppskrifter), Matkassetorget.no (aggregator authority)
- **Metodologi:** CLAUDE.md — Kokkeløren SEO/GEO Landingssider, Fase 3
- **Framework:** Hub-and-spoke-arkitektur med intent-driven clustering, ingen kannibalisering

---

**Neste fase:** Fase 4 — Side-for-side build (seo-content-writer, geo-content-optimizer, meta-tags-optimizer, schema-markup-generator)

**QA-gate:** Fase 5 — Hver side må oppnå 80/100 på CORE-EEAT-audit før levering.
