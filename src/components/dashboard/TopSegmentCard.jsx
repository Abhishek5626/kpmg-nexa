import React from "react";
import GlassCard from "../common/GlassCard";
import SectionHeader from "../common/SectionHeader";
import OpportunityMetric from "./OpportunityMetric";

const A = "/assets/";

const metrics = [
  { value: "3.2M", label: "Addressable customers", icon: `${A}metric-target-consumers.png` },
  { value: "+42%", label: "Higher intent vs average", icon: `${A}metric-demand-growth.png` },
  { value: "₹12.6B", label: "Potential revenue", icon: `${A}metric-revenue.png` }
];

export default function TopSegmentCard() {
  return (
    <GlassCard className="segment-card">
      <SectionHeader
        icon={<span className="section-arrow">↗</span>}
        title="Top Segment"
        meta="Highest growth and intent"
        action="See All"
      />

      <div className="segment-hero">
        <div className="segment-profile-tile" aria-hidden="true">
          <img src={`${A}nav-consumers.png`} alt="" />
        </div>
        <div className="segment-identity">
          <h3>Affluent</h3>
          <p>Age 25 - 40 yrs</p>
        </div>
      </div>

      <div className="segment-metrics">
        {metrics.map((metric, index) => (
          <React.Fragment key={metric.label}>
            {index > 0 && <div className="segment-metric-divider" aria-hidden="true" />}
            <OpportunityMetric {...metric} />
          </React.Fragment>
        ))}
      </div>
    </GlassCard>
  );
}