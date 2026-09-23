import React from "react";
import GlassCard from "../common/GlassCard";
import SectionHeader, { figmaHeaderIcon } from "../common/SectionHeader";
import { dashboardData } from "../../data/dashboardData";

export default function GrowthMapCard() {
  return (
    <GlassCard className="growth-card">
      <SectionHeader
        icon={figmaHeaderIcon}
        title="Where is the Growth Happening"
        meta="Customer Growth rate by region"
        dropdown="Growth Spend"
      />
      <div className="growth-content">
        <div className="india-map">
          <img className="india-image" src="/assets/india-growth-map.png" alt="India regional growth map" />
        </div>
        <div className="region-list">
          {dashboardData.regions.map((r) => (
            <div className="region-row" key={r.name}>
              <span className={`region-dot ${r.tone}`} />
              <span className="region-name">{r.name}</span>
              <strong>{r.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
