import React from "react";
import { navigate } from "../../navigation";

const ASSET = "/assets/";
const groups = [
  { label: "Understand", items: [["People", "/people", "people"], ["Consumers", "/consumers", "consumers"], ["Journey", "/journey", "journey"]] },
  { label: "Explore", items: [["Market", "/market", "market"], ["Competition", "/competition", "competition"]] },
  { label: "Act", items: [["Opportunities", "/opportunities", "opportunities"]] }
];

const icons = {
  home: "sidebar-home-figma.svg", people: "sidebar-people-figma.svg", consumers: "sidebar-consumers-figma.svg",
  journey: "sidebar-journey-figma.svg", market: "sidebar-market-figma.svg", competition: "sidebar-competition-figma.svg",
  opportunities: "sidebar-opportunities-figma.svg"
};

function NavItem({ label, to, type, active, onClose }) {
  return (
    <button className={`nav-item ${active ? "active" : ""}`} onClick={() => { navigate(to); onClose?.(); }}>
      <span className="nav-icon"><img src={`${ASSET}${icons[type]}`} alt="" /></span>
      <span>{label}</span>
    </button>
  );
}

export default function Sidebar({ open, collapsed, onToggleCollapse, onClose, currentPath = "/" }) {
  return (
    <>
      <div className={`mobile-backdrop ${open ? "is-open" : ""}`} onClick={onClose} />
      <div className={`sidebar-frame ${open ? "is-open" : ""} ${collapsed ? "is-collapsed" : ""}`}>
        <aside className="sidebar">
          <button className="mobile-close" onClick={onClose} aria-label="Close navigation">×</button>
          <div className="brand">
            <div className="brand-copy">
              <div className="brand-name">Nexa</div>
              <div className="brand-subtitle">Powered by KPMG</div>
            </div>
            <button
              className="sidebar-collapse-toggle"
              onClick={onToggleCollapse}
              aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
              aria-expanded={!collapsed}
            >
              <span aria-hidden="true">{collapsed ? "›" : "‹"}</span>
            </button>
          </div>
          <nav className="nav" aria-label="Primary navigation">
            <NavItem label="Home" to="/" type="home" active={currentPath === "/"} onClose={onClose} />
            {groups.map(group => (
              <div className="nav-group" key={group.label}>
                <div className="nav-label">{group.label}</div>
                {group.items.map(([label, to, type]) => (
                  <NavItem key={to} label={label} to={to} type={type} active={currentPath === to} onClose={onClose} />
                ))}
              </div>
            ))}
          </nav>
          <div className="sidebar-footer">
            <img className="sidebar-art" src="/assets/sidebar-ambient-art.png" alt="" aria-hidden="true" />
            <div className="footer-copy">From insights<br />to Impact.</div>
            <div className="footer-rule" />
            <img className="kpmg-wordmark" src={`${ASSET}sidebar-kpmg-figma.svg`} alt="KPMG" />
          </div>
        </aside>
      </div>
    </>
  );
}
