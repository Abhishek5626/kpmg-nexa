import React from "react";

export default function GlassCard({ className = "", children, as: Tag = "section" }) {
  return (
    <div className={`glass-frame ${className}-frame`}>
      <Tag className={`glass-card ${className}`}>{children}</Tag>
    </div>
  );
}
