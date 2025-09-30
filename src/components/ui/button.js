import React from "react";

export const Button = ({ variant = "default", className = "", children, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    // Add other variants if needed
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <button className={`${baseStyles} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
