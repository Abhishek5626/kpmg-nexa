import React from "react";
import { navigate } from "../../navigation";

const ASSET = "/assets/";
const groups = [
  { label: "Understand", items: [["People", "/people", "people"], ["Consumers", "/consumers", "consumers"], ["Journey", "/journey", "journey"]] },
  { label: "Explore", items: [["Market", "/market", "market"], ["Competition", "/competition", "competition"]] },
  { label: "Act", items: [["Opportunities", "/opportunities", "opportunities"]] }
];

const icons = {
  home: "nav-home.png", people: "nav-people.png", consumers: "nav-consumers.png",
  journey: "nav-journey.png", market: "nav-market.png", competition: "nav-competition.png",
  opportunities: "nav-opportunities.png"
};

function NavItem({ label, to, type, active, onClose }) {
  return (
    <button className={`nav-item ${active ? "active" : ""}`} onClick={() => { navigate(to); onClose?.(); }}>
      <span className="nav-icon"><img src={`${ASSET}${icons[type]}`} alt="" /></span>
      <span>{label}</span>
    </button>
  );
}

export default function Sidebar({ open, onClose, currentPath = "/" }) {
  return (
    <>
      <div className={`mobile-backdrop ${open ? "is-open" : ""}`} onClick={onClose} />
      <div className={`sidebar-frame ${open ? "is-open" : ""}`}>
        <aside className="sidebar">
          <button className="mobile-close" onClick={onClose} aria-label="Close navigation">×</button>
          <div className="brand">
            <div className="brand-name">Nexa</div>
            <div className="brand-subtitle">Powered by KPMG</div>
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
            <div className="footer-copy">From insights<br />to impact.</div>
            <div className="footer-rule" />
            <div className="kpmg-wordmark">KPMG</div>
          </div>
        </aside>
      </div>
    </>
  );
}
