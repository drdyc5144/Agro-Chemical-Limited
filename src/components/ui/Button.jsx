import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-primary-700 hover:bg-primary-800 text-white",
    secondary: "bg-secondary-700 hover:bg-secondary-800 text-white",
    accent: "bg-accent-500 hover:bg-accent-600 text-white",
    outline: "border-2 border-primary-700 text-primary-700 hover:bg-primary-50",
    ghost: "text-primary-700 hover:bg-primary-50",
    whatsapp: "bg-green-500 hover:bg-green-600 text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`font-semibold rounded-lg transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
