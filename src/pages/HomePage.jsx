import React from "react";
import AIInsightsCard from "../components/insights/AIInsightsCard";
import GrowthMapCard from "../components/dashboard/GrowthMapCard";
import CategoryDriversCard from "../components/dashboard/CategoryDriversCard";
import OpportunityCard from "../components/dashboard/OpportunityCard";
import TopSegmentCard from "../components/dashboard/TopSegmentCard";

export default function HomePage() {
  return (
    <div className="dashboard-page">
      <AIInsightsCard />
      <div className="dashboard-grid dashboard-grid-top">
        <GrowthMapCard />
        <CategoryDriversCard />
      </div>
      <div className="dashboard-grid dashboard-grid-bottom">
        <OpportunityCard />
        <TopSegmentCard />
      </div>
    </div>
  );
}