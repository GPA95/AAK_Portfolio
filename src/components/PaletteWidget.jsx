import { useState, useEffect } from "react";
import "./PaletteWidget.css";

const PALETTES = [
  { value: "",           label: "🎨 Current Theme (Purple/Indigo)" },
  { value: "palette-1",  label: "P1 — Slate & Mint" },
  { value: "palette-2",  label: "P2 — Obsidian & Neon Teal" },
  { value: "palette-3",  label: "P3 — Nordic Sage & Cream" },
  { value: "palette-4",  label: "P4 — Ink & Amber" },
];

export default function PaletteWidget() {
  const [palette, setPalette]   = useState("");
  const [lightMode, setLight]   = useState(false);

  // Sync palette data-attribute on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (palette) {
      html.setAttribute("data-preview", palette);
    } else {
      html.removeAttribute("data-preview");
    }
  }, [palette]);

  // Sync light-theme class on <html>
  // Only applies when a preview palette is active
  useEffect(() => {
    const html = document.documentElement;
    if (palette && lightMode) {
      html.classList.add("light-theme");
    } else {
      html.classList.remove("light-theme");
    }
  }, [palette, lightMode]);

  return (
    <div className="palette-widget" role="group" aria-label="Palette preview switcher">
      {/* Palette Select */}
      <select
        id="palette-select"
        className="palette-select"
        value={palette}
        onChange={(e) => setPalette(e.target.value)}
        aria-label="Choose colour palette"
      >
        {PALETTES.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>

      {/* Light / Dark toggle — only shown when a preview palette is active */}
      {palette && (
        <button
          className={`palette-mode-btn ${lightMode ? "is-light" : "is-dark"}`}
          onClick={() => setLight((v) => !v)}
          aria-pressed={lightMode}
          title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
        >
          {lightMode ? "☀️ Light" : "🌑 Dark"}
        </button>
      )}

      {/* Reset pill — visible only when something is active */}
      {palette && (
        <button
          className="palette-reset-btn"
          onClick={() => { setPalette(""); setLight(false); }}
          title="Restore original theme"
        >
          ✕ Reset
        </button>
      )}
    </div>
  );
}
