import React from "react";

export default function OpportunityMetric({ icon, value, label }) {
  return (
    <div className="opportunity-metric">
      <div className="metric-icon-box">
        <img src={icon} alt="" />
      </div>
      <div className="metric-copy">
        <strong className="metric-value">{value}</strong>
        <span className="metric-label">{label}</span>
      </div>
    </div>
  );
}
