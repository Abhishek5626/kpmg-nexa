import React from "react";

const defaultActionIcon = (
  <img className="figma-action-arrow" src="/assets/opp-see-all-arrow.svg" alt="" width={12} height={12} />
);

export const figmaHeaderIcon = (
  <img className="figma-header-icon" src="/assets/opp-header-chart.svg" alt="" width={14} height={14} />
);

export default function SectionHeader({ icon, title, meta, action, actionIcon, dropdown }) {
  return (
    <div className="section-header">
      <div className="section-title-wrap">
        <span className="section-icon">{icon ?? figmaHeaderIcon}</span>
        <h2>{title}</h2>
        {meta && (
          <>
            <span className="section-dot">•</span>
            <span className="section-meta">{meta}</span>
          </>
        )}
      </div>
      {dropdown && (
        <button className="text-action" type="button">
          {dropdown}
          <span>⌄</span>
        </button>
      )}
      {action && (
        <button className="text-action" type="button">
          {action}
          <span className="text-action-icon">{actionIcon ?? defaultActionIcon}</span>
        </button>
      )}
    </div>
  );
}
