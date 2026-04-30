/* =====================================================================
   Kundeområde — page-status.js
   Sentral status-håndtering for alle sider i kundeområdet.

   Tre tilstander:
   - godkjent          (kunden har godkjent)
   - til_avsjekk       (klar for kundegjennomgang)
   - under_utvikling   (Simpleness jobber fortsatt)

   Leaf-sider (uten children): brukeren kan klikke pillen og endre status.
   Endring lagres i localStorage og overstyrer default fra REGISTRY.

   Parent-sider (med children): pillen er read-only og arver status:
   - Alle children = godkjent → parent = godkjent
   - Minst én under_utvikling → parent = under_utvikling
   - Ellers → parent = til_avsjekk
   ===================================================================== */

(function () {
  "use strict";

  const STORAGE_PREFIX = "kp_status:";

  const REGISTRY = {
    "/":                                          { children: ["/designsystem.html", "/nyhetsbrev.html", "/innholdsstrategi.html", "/kreativ-strategi.html", "/landingssider.html"] },
    "/index.html":                                { children: ["/designsystem.html", "/nyhetsbrev.html", "/innholdsstrategi.html", "/kreativ-strategi.html", "/landingssider.html"] },

    "/designsystem.html":                         { status: "til_avsjekk" },

    "/nyhetsbrev.html":                           { children: ["/nyhetsbrev/flows/velkomstserie.html"] },
    "/nyhetsbrev/flows/velkomstserie.html":       { status: "til_avsjekk" },

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

  const ORDER = ["godkjent", "til_avsjekk", "under_utvikling"];

  // --- Status-beregning -----------------------------------------------------

  function isLeaf(path) {
    const node = REGISTRY[path];
    return !!(node && !Array.isArray(node.children));
  }

  function getOverride(path) {
    try {
      const v = localStorage.getItem(STORAGE_PREFIX + path);
      if (v && LABELS[v]) return v;
    } catch (e) {}
    return null;
  }

  function setOverride(path, status) {
    try { localStorage.setItem(STORAGE_PREFIX + path, status); } catch (e) {}
  }

  function computeStatus(path) {
    const node = REGISTRY[path];
    if (!node) return "under_utvikling";

    if (Array.isArray(node.children) && node.children.length > 0) {
      const childStatuses = node.children.map(computeStatus);
      if (childStatuses.every(s => s === "godkjent")) return "godkjent";
      if (childStatuses.some(s => s === "under_utvikling")) return "under_utvikling";
      return "til_avsjekk";
    }

    // Leaf — override har prioritet over default i REGISTRY
    return getOverride(path) || node.status || "under_utvikling";
  }

  // --- Stil ------------------------------------------------------------------

  const STYLE = `
.kp-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 11px 5px 10px;
  border-radius: 999px;
  font-family: "Plus Jakarta Sans", "GT Flexa", system-ui, -apple-system, Arial, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1;
  white-space: nowrap;
  border: 1px solid transparent;
  user-select: none;
  position: relative;
}
.kp-status-pill[data-clickable="true"] { cursor: pointer; }
.kp-status-pill[data-clickable="true"]::after {
  content: "▾";
  font-size: 9px;
  margin-left: 2px;
  opacity: 0.6;
}
.kp-status-pill[data-clickable="true"]:hover { filter: brightness(0.97); }
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
  background: rgba(9, 10, 8, 0.06);
  border-color: rgba(9, 10, 8, 0.12);
  color: rgba(9, 10, 8, 0.7);
}
.kp-status-pill[data-status="under_utvikling"] .kp-status-dot { background: rgba(9, 10, 8, 0.4); }

/* Fixed-position default — ligger alltid øverst til høyre */
.kp-status-pill.kp-status-pill--fixed {
  position: fixed;
  top: 14px;
  right: 18px;
  z-index: 1000;
  box-shadow: 0 1px 2px rgba(9,10,8,0.08), 0 4px 12px rgba(9,10,8,0.05);
}

/* Dropdown */
.kp-status-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 170px;
  background: #fff;
  border: 1px solid rgba(9,10,8,0.1);
  border-radius: 10px;
  padding: 4px;
  box-shadow: 0 4px 16px rgba(9,10,8,0.12), 0 1px 3px rgba(9,10,8,0.06);
  z-index: 1001;
  display: none;
  font-family: "Plus Jakarta Sans", "GT Flexa", system-ui, -apple-system, Arial, sans-serif;
}
.kp-status-menu.is-open { display: block; }
.kp-status-menu button {
  display: flex; align-items: center; gap: 9px;
  width: 100%;
  background: transparent;
  border: 0;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #090A08;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.02em;
}
.kp-status-menu button:hover { background: rgba(9,10,8,0.04); }
.kp-status-menu button[aria-checked="true"] { background: rgba(9,10,8,0.04); }
.kp-status-menu button[aria-checked="true"]::after {
  content: "✓";
  margin-left: auto;
  font-size: 11px;
  color: rgba(9,10,8,0.5);
}
.kp-status-menu .kp-menu-dot {
  width: 8px; height: 8px; border-radius: 50%;
  flex-shrink: 0;
}
.kp-status-menu button[data-value="godkjent"]        .kp-menu-dot { background: #6CC24A; }
.kp-status-menu button[data-value="til_avsjekk"]     .kp-menu-dot { background: #E5A000; }
.kp-status-menu button[data-value="under_utvikling"] .kp-menu-dot { background: rgba(9, 10, 8, 0.4); }

.kp-status-menu .kp-menu-divider { height: 1px; background: rgba(9,10,8,0.08); margin: 4px 6px; }
.kp-status-menu .kp-menu-hint {
  padding: 6px 10px;
  font-size: 10px;
  color: rgba(9,10,8,0.45);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
`;

  // --- DOM-rendering --------------------------------------------------------

  function buildPill(status, clickable) {
    const pill = document.createElement("span");
    pill.className = "kp-status-pill";
    pill.setAttribute("data-status", status);
    pill.setAttribute("role", "status");
    pill.setAttribute("aria-label", "Status: " + LABELS[status]);
    if (clickable) {
      pill.setAttribute("data-clickable", "true");
      pill.setAttribute("tabindex", "0");
      pill.setAttribute("title", "Klikk for å endre status");
    }

    const dot = document.createElement("span");
    dot.className = "kp-status-dot";
    pill.appendChild(dot);

    const label = document.createElement("span");
    label.className = "kp-status-label";
    label.textContent = LABELS[status];
    pill.appendChild(label);

    return pill;
  }

  function buildMenu(currentStatus, onSelect) {
    const menu = document.createElement("div");
    menu.className = "kp-status-menu";

    const hint = document.createElement("div");
    hint.className = "kp-menu-hint";
    hint.textContent = "Sett status";
    menu.appendChild(hint);

    ORDER.forEach(value => {
      const btn = document.createElement("button");
      btn.setAttribute("data-value", value);
      btn.setAttribute("aria-checked", value === currentStatus ? "true" : "false");
      btn.setAttribute("role", "menuitemradio");

      const dot = document.createElement("span");
      dot.className = "kp-menu-dot";
      btn.appendChild(dot);

      const text = document.createElement("span");
      text.textContent = LABELS[value];
      btn.appendChild(text);

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        onSelect(value);
      });

      menu.appendChild(btn);
    });

    return menu;
  }

  function findMountTarget() {
    return document.querySelector("[data-status-mount]") || null;
  }

  function init() {
    if (window.self !== window.top) return;

    const styleEl = document.createElement("style");
    styleEl.textContent = STYLE;
    document.head.appendChild(styleEl);

    const path = window.location.pathname;
    const status = computeStatus(path);
    const clickable = isLeaf(path);
    const pill = buildPill(status, clickable);

    const explicitMount = findMountTarget();
    if (explicitMount) {
      explicitMount.appendChild(pill);
    } else {
      pill.classList.add("kp-status-pill--fixed");
      document.body.appendChild(pill);
    }

    if (clickable) {
      const menu = buildMenu(status, (newStatus) => {
        setOverride(path, newStatus);
        // Oppdater pille på siden
        pill.setAttribute("data-status", newStatus);
        pill.setAttribute("aria-label", "Status: " + LABELS[newStatus]);
        pill.querySelector(".kp-status-label").textContent = LABELS[newStatus];
        // Oppdater menyen
        menu.querySelectorAll("button").forEach(b => {
          b.setAttribute("aria-checked", b.dataset.value === newStatus ? "true" : "false");
        });
        closeMenu();
      });
      pill.appendChild(menu);

      function openMenu() { menu.classList.add("is-open"); }
      function closeMenu() { menu.classList.remove("is-open"); }
      function toggleMenu(e) {
        e.stopPropagation();
        if (menu.classList.contains("is-open")) closeMenu();
        else openMenu();
      }

      pill.addEventListener("click", toggleMenu);
      pill.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMenu(e); }
        if (e.key === "Escape") closeMenu();
      });
      document.addEventListener("click", (e) => {
        if (!pill.contains(e.target)) closeMenu();
      });
    }
  }

  // Eksponer for debugging
  window.PageStatus = { REGISTRY, LABELS, computeStatus, isLeaf };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
