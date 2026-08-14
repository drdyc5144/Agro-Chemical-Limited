import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <p className="text-accent-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="heading-2 text-primary-700 mb-4">{title}</h2>
      {centered && <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>}
    </div>
  );
};

export default SectionHeading;
