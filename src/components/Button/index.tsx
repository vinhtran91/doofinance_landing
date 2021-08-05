import { FC } from "react";
import "./Button.css";

interface ButtonProps {
  className?: string;
  textColor?: string;
  bgColor: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  textColor = "#fff",
  bgColor,
  children,
}) => {
  return (
    <button
      className={className ? `${className} button` : `button`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
};
