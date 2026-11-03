
import React from "react";
import { TbLoader } from "react-icons/tb";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#2a53f1] text-white hover:bg-[#1f3ed6] hover:scale-[0.95] hover:-translate-y-px",

  secondary:
    "bg-[#c1ff40] text-[#0d1321] hover:opacity-90",

  ghost:
    "bg-transparent text-[#2a53f1] hover:bg-[#2a53f1]/10",

  danger:
    "bg-[#ff4d4f] text-white hover:bg-[#e04344]",

  dark:
    "bg-gray-800 text-white hover:opacity-90",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-[18px] py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  type = "button",
  ...props
}) => {
  const buttonClasses = [
    // Base styles
    "inline-flex items-center justify-center gap-2",
    "rounded-full border-0 outline-none",
    "font-medium cursor-pointer",
    "transition-all duration-200 ease-in-out",

    // Variant
    variants[variant],

    // Size
    sizes[size],

    // Width
    fullWidth ? "w-full" : "",

    // Loading
    loading ? "pointer-events-none" : "",

    // Disabled
    disabled || loading
      ? "cursor-not-allowed opacity-60"
      : "active:scale-[0.98]",

    // Custom classes
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <TbLoader className="animate-spin text-xl" aria-hidden="true" />
      )}

      {/* Left Icon */}
      {!loading && leftIcon && (
        <span className="inline-flex items-center justify-center">
          {leftIcon}
        </span>
      )}

      {/* Button Label */}
      <span className="inline-flex items-center justify-center">
        {children}
      </span>

      {/* Right Icon */}
      {!loading && rightIcon && (
        <span className="inline-flex items-center justify-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
