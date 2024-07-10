import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import '@motionwindui/base/css/styles.css';
import './Button.css';
import { HTMLMotionProps, motion } from 'framer-motion';
import { VariantProps } from 'class-variance-authority';
import { buttonStyles, iconStyles } from './buttonStyles';
import { clsxMerge } from '../../utils/src/utils';
import {
  IconOutline,
  IconSolid,
  IconSpinners,
  IconWrapper,
} from '@motionwindui/base/src';

type ButtonElementProps = ComponentPropsWithoutRef<'button'>;

type MotionProps = Omit<HTMLMotionProps<'button'>, keyof ButtonElementProps>;

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    MotionProps,
    ButtonElementProps {
  /** The color/intentions of the button */
  color?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';

  /** The variation of the button */
  variant?: 'solid' | 'faded' | 'bordered' | 'ghost';

  /** The size of the button */
  size?: 'sm' | 'md' | 'lg' | 'default';

  /** The radius of the button */
  radius?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'default';

  /** The icon to be displayed before the text */
  leadingIcon?: ReactElement | IconOutline | IconSolid | IconSpinners;

  /** The icon to be displayed before the text */
  trailingIcon?: ReactElement | IconOutline | IconSolid | IconSpinners;

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

  /** Whether or not to show the children */
  showChildren?: boolean;

  /* Any React children */
  children?: React.ReactNode;
}

function Button({
  className,
  color = 'primary',
  variant = 'solid',
  size = 'default',
  radius = 'default',
  leadingIcon,
  trailingIcon,
  animate = true,
  animateOnDisable = false,
  disabled,
  showChildren = true,
  children,
  isLoading,
  ...props
}: ButtonProps) {
  const disabledState = disabled || isLoading;
  const motionProps =
    animate && (!disabledState || animateOnDisable)
      ? (props as MotionProps)
      : {};

  const buttonContent = (
    <>
      {leadingIcon && (
        <IconWrapper
          icon={leadingIcon}
          className={clsxMerge(
            iconStyles({
              buttonType: 'neutral-solid',
              size,
            }),
          )}
        />
      )}
      {showChildren && children}
      {trailingIcon && (
        <IconWrapper
          icon={trailingIcon}
          className={clsxMerge(
            iconStyles({
              buttonType: 'neutral-solid',
              size,
            }),
          )}
        />
      )}
    </>
  );

  return animate && (!disabledState || animateOnDisable) ? (
    <motion.button
      className={clsxMerge(
        buttonStyles({
          buttonType: 'neutral-solid',
          size,
          radius,
          className,
        }),
      )}
      whileTap={{ scale: 0.95 }}
      disabled={disabledState}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  ) : (
    <button
      className={clsxMerge(
        buttonStyles({
          buttonType: 'neutral-solid',
          size,
          radius,
          className,
        }),
      )}
      disabled={disabledState}
      {...props}
    >
      {leadingIcon && (
        <IconWrapper
          icon={leadingIcon}
          className={clsxMerge(
            iconStyles({
              buttonType: 'neutral-solid',
              size,
            }),
          )}
        />
      )}
      {showChildren && children}
      {trailingIcon && (
        <IconWrapper
          icon={trailingIcon}
          className={clsxMerge(
            iconStyles({
              buttonType: 'neutral-solid',
              size,
            }),
          )}
        />
      )}
    </button>
  );
}

export default Button;
