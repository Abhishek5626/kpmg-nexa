import React from "react";
import GlassCard from "../common/GlassCard";
import SectionHeader, { figmaHeaderIcon } from "../common/SectionHeader";
import OpportunityMetric from "./OpportunityMetric";
import { dashboardData } from "../../data/dashboardData";

const metrics = [
  {
    value: "194K",
    label: "Target consumers",
    asset: "/assets/metric-target-consumers.svg",
    alt: "Target consumers"
  },
  {
    value: "+28%",
    label: "Demand growth",
    asset: "/assets/metric-demand-growth.svg",
    alt: "Demand growth"
  },
  {
    value: "₹ 42.6 Cr",
    label: "Est Opportunity",
    asset: "/assets/metric-opportunity.svg",
    alt: "Estimated opportunity"
  },
  {
    value: "Low",
    label: "Competitive Penetration",
    asset: "/assets/metric-competitive.svg",
    alt: "Competitive penetration"
  }
];

export default function OpportunityCard() {
  const { opportunity } = dashboardData;

  return (
    <GlassCard className="opportunity-card">
      <SectionHeader
        icon={figmaHeaderIcon}
        title="What Should I Investigate"
        meta="Customer Growth rate by region"
        action="See All"
      />

      <div className="opportunity-content">
        <div className="product-image">
          <img src="/assets/opportunity-product.png" alt="Premium skincare product" />
        </div>

        <div className="opportunity-copy">
          <div className="opportunity-copy-text">
            <h3>{opportunity.title}</h3>
            <p>
              <span className="opp-desc-line">High demand, large addressable audience</span>
              <span className="opp-desc-line">and low competitive penetration.</span>
            </p>
          </div>

          <div className="opportunity-stats" aria-label="Opportunity metrics">
            {metrics.map((metric, index) => (
              <React.Fragment key={metric.label}>
                {index > 0 && <div className="opportunity-metric-divider" aria-hidden="true" />}
                <OpportunityMetric icon={metric.asset} value={metric.value} label={metric.label} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
