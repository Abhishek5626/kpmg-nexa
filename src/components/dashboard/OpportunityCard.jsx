import React from "react";
import GlassCard from "../common/GlassCard";
import SectionHeader from "../common/SectionHeader";
import OpportunityMetric from "./OpportunityMetric";
import { dashboardData } from "../../data/dashboardData";

const metrics = [
  {
    value: "194K",
    label: "Target consumers",
    asset: "/assets/metric-target-consumers.png",
    alt: "Target consumers"
  },
  {
    value: "+28%",
    label: "Demand growth",
    asset: "/assets/metric-demand-growth.png",
    alt: "Demand growth"
  },
  {
    value: "₹ 42.6 Cr",
    label: "Est Opportunity",
    asset: "/assets/metric-opportunity.png",
    alt: "Estimated opportunity"
  },
  {
    value: "Low",
    label: "Competitive Penetration",
    asset: "/assets/metric-competitive.png",
    alt: "Competitive penetration"
  }
];

export default function OpportunityCard() {
  const { opportunity } = dashboardData;

  return (
    <GlassCard className="opportunity-card">
      <SectionHeader
        icon={<span className="header-arrow">↗</span>}
        title="What Should I Investigate"
        meta="Customer Growth rate by region"
        action="See All"
      />

      <div className="opportunity-content">
        <div className="product-image">
          <img src="/assets/opportunity-product.png" alt="Premium skincare product" />
        </div>

        <div className="opportunity-copy">
          <h3>{opportunity.title}</h3>
          <p>{opportunity.description}</p>

          <div className="opportunity-stats" aria-label="Opportunity metrics">
            {metrics.map((metric) => (
              <OpportunityMetric key={metric.label} icon={metric.asset} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
