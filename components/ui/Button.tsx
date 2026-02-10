import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg";

  const variants = {
    primary:
      "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-red-500/50 hover:brightness-110",
    secondary:
      "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50",
    outline:
      "bg-transparent border-2 border-white/20 text-white hover:bg-white/10",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
