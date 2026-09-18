import React from "react";

const ASSET = "/assets/";

function GlassControl({ className = "", children, as = "div", ...props }) {
  const Tag = as;
  return (
    <Tag className={`topbar-glass-frame ${className}`} {...props}>
      <span className="topbar-glass-inner">{children}</span>
    </Tag>
  );
}

function Chevron() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Topbar({ onMenu }) {
  return (
    <header className="topbar">
      <button className="menu-button" onClick={onMenu} aria-label="Open navigation">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </button>

      <div className="breadcrumb-home">
        <GlassControl className="home-glass" aria-hidden="true">
          <span className="topbar-glass-icon">
            <img src={`${ASSET}topbar-home.png`} alt="" />
          </span>
        </GlassControl>
        <span>Home</span>
      </div>

      <div className="topbar-right">
        <div className="greeting">
          <span>Good Morning</span>
          <span className="muted">Thursday, Aug 28 11:52 AM</span>
        </div>

        <GlassControl className="weather-glass" aria-label="Weather">
          <span className="topbar-glass-icon">
            <img src={`${ASSET}topbar-weather.png`} alt="" />
          </span>
        </GlassControl>

        <GlassControl as="button" className="notification-glass" aria-label="Notifications">
          <span className="topbar-glass-icon">
            <img src={`${ASSET}topbar-notification.png`} alt="" />
          </span>
        </GlassControl>

        <GlassControl as="button" className="profile-glass" aria-label="Account menu">
          <span className="avatar-inner">AK</span>
          <Chevron />
        </GlassControl>
      </div>
    </header>
  );
}
