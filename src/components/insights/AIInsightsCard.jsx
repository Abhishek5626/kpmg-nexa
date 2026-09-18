import React from "react";
import GlassCard from "../common/GlassCard";
import { dashboardData } from "../../data/dashboardData";
import AIAnimation from "./AIAnimation";

const ASSET = "/assets/";
const kpiIcons = {
  "Total Consumers": "kpi-total-consumers.png",
  "Active Customers": "kpi-active-customers.png",
  "Campaign Conversion": "kpi-campaign-conversion.png",
  "Marketing ROI": "kpi-marketing-roi.png"
};

const kpiSparkAssets = {
  blue: "/assets/kpi-spark-blue.png",
  violet: "/assets/kpi-spark-violet.png",
  cyan: "/assets/kpi-spark-cyan.png",
  amber: "/assets/kpi-spark-amber.png"
};

export default function AIInsightsCard() {
  const { insight } = dashboardData;
  return (
    <GlassCard className="insight-card">
      <div className="animated-border" aria-hidden="true" />
      <div className="insight-content">
        <div className="insight-topline">
          <div className="section-title-wrap">
            <span className="section-icon ai-star" aria-hidden="true"><AIAnimation /></span>
            <h2>AI Insights</h2><span className="section-dot">•</span>
            <span className="section-meta">Real-time user activity and trend insights</span>
          </div>
          <button className="primary-pill">Explore Opportunity <span>→</span></button>
        </div>
        <div className="insight-copy">
          <h1 className="shimmer-text">{insight.title} <span>{insight.highlight}</span> {insight.suffix}</h1>
          <p>{insight.subtext}</p>
        </div>
        <div className="kpi-grid">
          {dashboardData.kpis.map(kpi => <KPICard key={kpi.label} {...kpi} />)}
        </div>
      </div>
    </GlassCard>
  );
}

function KPICard({ label, value, change, period, tone, spark }) {
  return <div className={`kpi-card kpi-${tone}`}>
    <div className="kpi-top">
      <span className="kpi-symbol"><img src={`${ASSET}${kpiIcons[label]}`} alt="" /></span>
      <span className="kpi-change">↑ {change} <small>{period}</small></span>
    </div>
    <div className="kpi-label">{label}</div>
    <div className="kpi-value">{value}</div>
    <img className="kpi-spark" src={kpiSparkAssets[tone]} alt="" aria-hidden="true" />
  </div>;
}
