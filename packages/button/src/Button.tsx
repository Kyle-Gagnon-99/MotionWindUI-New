import React, { ComponentPropsWithoutRef } from "react";
import "@motionwindui/base/css/styles.css";
import "./Button.css";
import { HTMLMotionProps, motion } from "framer-motion";
import { VariantProps } from "class-variance-authority";
import { buttonStyles } from "./buttonStyles";
import { clsxMerge } from "../../utils/src/utils";

type ButtonElementProps = ComponentPropsWithoutRef<"button">;

type MotionProps = Omit<HTMLMotionProps<"button">, keyof ButtonElementProps>;

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    MotionProps,
    ButtonElementProps {
  /** The color/intentions of the button */
  color?:
    | "neutral"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";

  /** The variation of the button */
  variant?: "solid" | "faded" | "bordered" | "ghost";

  /** The size of the button */
  size?: "sm" | "md" | "lg" | "default";

  /** The radius of the button */
  radius?: "sm" | "md" | "lg" | "xl" | "full" | "default";

  /** Whether or not to use Framer Motion animations */
  animate?: boolean;

  /** Whether or not the animate should occur on the element when disabled, even if animate is enabled */
  animateOnDisable?: boolean;

  /** Indicates if this button is in the loading state */
  isLoading?: boolean;

  /** An override on loading text. By default it is "Loading..." */
  loadingText?: string;

  /** Whether or not the button is disabled */
  disabled?: boolean;

  /* Any React children */
  children: React.ReactNode;
}

function Button({
  className,
  color = "primary",
  variant = "solid",
  size = "default",
  radius = "default",
  animate = true,
  animateOnDisable = false,
  disabled,
  children,
  isLoading,
  ...props
}: ButtonProps) {
  const disabledState = disabled || isLoading;
  const motionProps =
    animate && (!disabledState || animateOnDisable)
      ? (props as MotionProps)
      : {};

  return animate && (!disabledState || animateOnDisable) ? (
    <motion.button
      className={clsxMerge("bg-[var(--accent-neutral)] text-blue-400")}
      whileTap={{ scale: 0.95 }}
      disabled={disabledState}
      {...motionProps}
    >
      {children}
    </motion.button>
  ) : (
    <button
      className={clsxMerge(
        buttonStyles({
          buttonType: "neutral-solid",
          size,
          radius,
          className,
        }),
      )}
      disabled={disabledState}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
