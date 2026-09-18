import React from "react";
function Svg({children,size=18,className=""}){return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{children}</svg>}
export default function Topbar({onMenu}){return <header className="topbar">
  <button className="menu-button" onClick={onMenu} aria-label="Open navigation"><Svg><path d="M4 7h16M4 12h16M4 17h16"/></Svg></button>
  <div className="breadcrumb-home"><span className="breadcrumb-icon"><Svg><path d="M4 10.5 12 4l8 6.5v8.2a1.3 1.3 0 0 1-1.3 1.3H5.3A1.3 1.3 0 0 1 4 18.7Z"/><path d="M9 20v-5h6v5"/><circle cx="8" cy="9" r="1.4" fill="#2463ff" stroke="none"/></Svg></span><span>Home</span></div>
  <div className="topbar-right"><div className="greeting"><span>Good Morning</span><span className="muted">Thursday, Aug 28 11:52 AM</span></div><span className="weather-sun">☀️</span><button className="circle-button"><Svg size={17}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></Svg></button><button className="profile-button"><span>AK</span><Svg size={15}><path d="m6 9 6 6 6-6"/></Svg></button></div>
</header>}
