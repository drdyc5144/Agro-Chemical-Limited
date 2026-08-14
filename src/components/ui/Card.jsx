import React from "react";

const Card = ({ children, className = "", hover = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden ${
        hover ? "hover:shadow-xl transition-shadow duration-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 pb-0 ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export default Card;
