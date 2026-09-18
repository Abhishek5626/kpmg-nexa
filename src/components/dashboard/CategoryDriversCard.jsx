import React from "react";
import GlassCard from "../common/GlassCard";
import SectionHeader from "../common/SectionHeader";
import { dashboardData } from "../../data/dashboardData";

const driverIcons = {
  wallet: "/assets/driver-saving-accounts.png",
  user: "/assets/driver-personal-loans.png",
  card: "/assets/driver-digital-savings.png",
  briefcase: "/assets/driver-credit-cards.png",
  home: "/assets/driver-home-loans.png",
};

export default function CategoryDriversCard() {
  return (
    <GlassCard className="drivers-card">
      <SectionHeader
        icon={<span className="header-arrow">↗</span>}
        title="What's driving the Growth"
        meta="Top Categories for CX growth"
        action="See All"
      />

      <div className="driver-list">
        {dashboardData.drivers.map((driver) => (
          <div className="driver-row" key={driver.name}>
            <span className={`driver-icon ${driver.tone}`} aria-hidden="true">
              <img src={driverIcons[driver.icon]} alt="" />
            </span>

            <span className="driver-name">{driver.name}</span>

            <div className="driver-track" aria-hidden="true">
              <span style={{ width: `${driver.value}%` }} />
            </div>

            <strong>{driver.change}</strong>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
