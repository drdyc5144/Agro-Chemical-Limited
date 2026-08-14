import React from "react";

const Container = ({ children, className = "", size = "default" }) => {
  const sizes = {
    default: "max-w-7xl",
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
