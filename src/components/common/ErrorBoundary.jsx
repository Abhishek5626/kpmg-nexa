import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error("Nexa application error:", error);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 32, background: "#edf4ff", fontFamily: "Inter, system-ui, sans-serif" }}>
        <section style={{ maxWidth: 680, width: "100%", padding: 28, borderRadius: 20, background: "rgba(255,255,255,.75)", border: "1px solid rgba(255,255,255,.95)", boxShadow: "0 20px 60px rgba(50,80,140,.14)" }}>
          <div style={{ color: "#2459d6", fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>Nexa runtime error</div>
          <h1 style={{ margin: "8px 0", color: "#252a33", fontSize: 24 }}>The application failed to render.</h1>
          <p style={{ color: "#69717d", lineHeight: 1.6 }}>Open the browser console and send the error shown there. This screen is intentionally visible instead of leaving a blank page.</p>
          <pre style={{ overflow: "auto", padding: 14, borderRadius: 12, background: "#f5f7fb", color: "#4b5360", fontSize: 12 }}>{String(this.state.error?.stack || this.state.error)}</pre>
        </section>
      </main>
    );
  }
}
