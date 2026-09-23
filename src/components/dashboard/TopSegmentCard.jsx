import React from "react";
import GlassCard from "../common/GlassCard";
import SectionHeader, { figmaHeaderIcon } from "../common/SectionHeader";
import OpportunityMetric from "./OpportunityMetric";

const metrics = [
  {
    value: "3.2M",
    label: "Addressable customers",
    icon: "/assets/metric-target-consumers.svg"
  },
  {
    value: "+42%",
    label: "Higher intent vs average",
    icon: "/assets/metric-demand-growth.svg"
  },
  {
    value: "₹12.6B",
    label: "Potential revenue",
    icon: "/assets/metric-opportunity.svg"
  }
];

export default function TopSegmentCard() {
  return (
    <GlassCard className="segment-card">
      <SectionHeader
        icon={figmaHeaderIcon}
        title="Top Segment"
        meta="Highest growth and intent"
        action="See All"
      />

      <div className="segment-hero">
        <div className="segment-profile-tile" aria-hidden="true">
          <img src="/assets/metric-target-consumers.svg" alt="" />
        </div>
        <div className="segment-identity">
          <h3>Affluent</h3>
          <p>Age 25 - 40 yrs</p>
        </div>
      </div>

      <div className="segment-metrics" aria-label="Segment metrics">
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
