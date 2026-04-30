/* =====================================================================
   Kundeområde — page-status.js
   Sentral status-håndtering for alle sider i kundeområdet.

   Tre tilstander:
   - godkjent          (kunden har godkjent)
   - til_avsjekk       (klar for kundegjennomgang)
   - under_utvikling   (Simpleness jobber fortsatt)

   Regel: parent-sider arver status fra children.
   - Alle children = godkjent → parent = godkjent
   - Ingen children = under_utvikling (men minst én er til_avsjekk) → parent = til_avsjekk
   - Ellers → parent = under_utvikling

   Sett status for ny side ved å legge til en oppføring i REGISTRY.
   Sett `children: [...]` for parent-sider — status beregnes automatisk.
   ===================================================================== */

(function () {
  "use strict";

  const REGISTRY = {
    "/":                                          { children: ["/designsystem.html", "/nyhetsbrev.html", "/innholdsstrategi.html", "/kreativ-strategi.html", "/landingssider.html"] },
    "/index.html":                                { children: ["/designsystem.html", "/nyhetsbrev.html", "/innholdsstrategi.html", "/kreativ-strategi.html", "/landingssider.html"] },

    "/designsystem.html":                         { status: "til_avsjekk" },

    "/nyhetsbrev.html":                           { children: ["/nyhetsbrev/moduler.html", "/nyhetsbrev/maler.html", "/nyhetsbrev/flows/velkomstserie.html", "/nyhetsbrev/maler/produktnyhet.html", "/nyhetsbrev/maler/salg.html", "/nyhetsbrev/maler/redaksjonelt.html", "/nyhetsbrev/maler/digest.html"] },
    "/nyhetsbrev/moduler.html":                   { status: "under_utvikling" },
    "/nyhetsbrev/maler.html":                     { status: "under_utvikling" },
    "/nyhetsbrev/flows/velkomstserie.html":       { status: "til_avsjekk" },
    "/nyhetsbrev/maler/produktnyhet.html":        { status: "under_utvikling" },
    "/nyhetsbrev/maler/salg.html":                { status: "under_utvikling" },
    "/nyhetsbrev/maler/redaksjonelt.html":        { status: "under_utvikling" },
    "/nyhetsbrev/maler/digest.html":              { status: "under_utvikling" },

    "/innholdsstrategi.html":                     { status: "under_utvikling" },
    "/kreativ-strategi.html":                     { status: "under_utvikling" },
    "/landingssider.html":                        { status: "under_utvikling" },

    "/moduler.html":                              { status: "under_utvikling" },
    "/templates.html":                            { status: "under_utvikling" },
  };

  const LABELS = {
    godkjent:        "Godkjent",
    til_avsjekk:     "Til avsjekk",
    under_utvikling: "Under utvikling",
  };

  // --- Status-beregning -----------------------------------------------------

  function computeStatus(path) {
    const node = REGISTRY[path];
    if (!node) return "under_utvikling";
    if (node.status) return node.status;
    if (Array.isArray(node.children) && node.children.length > 0) {
      const childStatuses = node.children.map(computeStatus);
      if (childStatuses.every(s => s === "godkjent")) return "godkjent";
      if (childStatuses.some(s => s === "under_utvikling")) return "under_utvikling";
      return "til_avsjekk";
    }
    return "under_utvikling";
  }

  // --- Stil ------------------------------------------------------------------

  const STYLE = `
.kp-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 11px 5px 10px;
  border-radius: 999px;
  font-family: "GT Flexa", "Plus Jakarta Sans", system-ui, -apple-system, Arial, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1;
  white-space: nowrap;
  border: 1px solid transparent;
  user-select: none;
}
.kp-status-pill .kp-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.kp-status-pill[data-status="godkjent"] {
  background: #E8F5E0;
  border-color: #C8E5B4;
  color: #2D5C18;
}
.kp-status-pill[data-status="godkjent"] .kp-status-dot { background: #6CC24A; }
.kp-status-pill[data-status="til_avsjekk"] {
  background: #FFF4D9;
  border-color: #F4DFA0;
  color: #6E4C00;
}
.kp-status-pill[data-status="til_avsjekk"] .kp-status-dot { background: #E5A000; }
.kp-status-pill[data-status="under_utvikling"] {
  background: rgba(49, 38, 29, 0.06);
  border-color: rgba(49, 38, 29, 0.12);
  color: rgba(49, 38, 29, 0.7);
}
.kp-status-pill[data-status="under_utvikling"] .kp-status-dot { background: rgba(49, 38, 29, 0.4); }

/* Fixed-position fallback når ingen mount-target finnes på siden */
.kp-status-pill.kp-status-pill--fixed {
  position: fixed;
  top: 14px;
  right: 18px;
  z-index: 1000;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(6px);
  box-shadow: 0 1px 2px rgba(49,38,29,0.08), 0 4px 12px rgba(49,38,29,0.05);
}
.kp-status-pill.kp-status-pill--fixed[data-status="godkjent"]        { background: #E8F5E0; }
.kp-status-pill.kp-status-pill--fixed[data-status="til_avsjekk"]     { background: #FFF4D9; }
.kp-status-pill.kp-status-pill--fixed[data-status="under_utvikling"] { background: rgba(255,255,255,0.96); }
`;

  // --- DOM-rendering --------------------------------------------------------

  function buildPill(status) {
    const pill = document.createElement("span");
    pill.className = "kp-status-pill";
    pill.setAttribute("data-status", status);
    pill.setAttribute("role", "status");
    pill.setAttribute("aria-label", "Status: " + LABELS[status]);

    const dot = document.createElement("span");
    dot.className = "kp-status-dot";
    pill.appendChild(dot);

    const label = document.createElement("span");
    label.className = "kp-status-label";
    label.textContent = LABELS[status];
    pill.appendChild(label);

    return pill;
  }

  function findMountTarget() {
    return (
      document.querySelector("[data-status-mount]") ||
      document.querySelector(".header") ||
      document.querySelector(".topbar") ||
      null
    );
  }

  function init() {
    // Hopp over hvis siden er innebygd i en iframe — pillen tilhører
    // det ytre kundeområdet, ikke selve preview-innholdet.
    if (window.self !== window.top) return;

    const styleEl = document.createElement("style");
    styleEl.textContent = STYLE;
    document.head.appendChild(styleEl);

    const path = window.location.pathname;
    const status = computeStatus(path);
    const pill = buildPill(status);

    const target = findMountTarget();
    if (target) {
      target.appendChild(pill);
    } else {
      pill.classList.add("kp-status-pill--fixed");
      document.body.appendChild(pill);
    }
  }

  // Eksponer for debugging og evt. test/demo
  window.PageStatus = { REGISTRY, LABELS, computeStatus };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
