import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import AIChatDock from "../ai/AIChatDock";

export default function AppShell({ children, currentPath }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={`app-shell ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <div className="ambient-background" aria-hidden="true">
        <span className="ambient-orb orb-one" />
        <span className="ambient-orb orb-two" />
        <span className="ambient-orb orb-three" />
        <span className="ambient-line line-one" />
        <span className="ambient-line line-two" />
      </div>

      <Sidebar
        open={sidebarOpen}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(value => !value)}
        onClose={() => setSidebarOpen(false)}
        currentPath={currentPath}
      />

      <main className="app-main">
        <Topbar onMenu={() => setSidebarOpen(true)} />
        <div className="page-container">{children}</div>
      </main>

      <AIChatDock />
    </div>
  );
}