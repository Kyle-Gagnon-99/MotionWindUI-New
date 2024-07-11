import { cva } from 'class-variance-authority';
import './Button.css';

export const buttonStyles = cva(
  'flex flex-row disabled:cursor-not-allowed items-center justify-center focus-visible:outline-[length:--focus-outline-width] focus-visible:outline-[--focus-outline-color] focus-visible:outline-offset-[--focus-outline-offset] disabled:opacity-[--disabled-opacity] disabled:cursor-not-allowed',
  {
    variants: {
      buttonType: {
        'neutral-solid': 'btn--neutral-solid',
        'neutral-bordered': 'btn--neutral-bordered',
        'neutral-ghost': 'btn--neutral-ghost',
        'neutral-faded': 'btn--neutral-faded',
        'primary-solid': 'btn--primary-solid',
        'primary-bordered': 'btn--primary-bordered',
        'primary-ghost': 'btn--primary-ghost',
        'primary-faded': 'btn--primary-faded',
        'secondary-solid': 'btn--secondary-solid',
        'secondary-bordered': 'btn--secondary-bordered',
        'secondary-ghost': 'btn--secondary-ghost',
        'secondary-faded': 'btn--secondary-faded',
        'success-solid': 'btn--success-solid',
        'success-bordered': 'btn--success-bordered',
        'success-ghost': 'btn--success-ghost',
        'success-faded': 'btn--success-faded',
        'warning-solid': 'btn--warning-solid',
        'warning-bordered': 'btn--warning-bordered',
        'warning-ghost': 'btn--warning-ghost',
        'warning-faded': 'btn--warning-faded',
        'danger-solid': 'btn--danger-solid',
        'danger-bordered': 'btn--danger-bordered',
        'danger-ghost': 'btn--danger-ghost',
        'danger-faded': 'btn--danger-faded',
      },
      size: {
        sm: [
          'gap-[--button-spacing-padding-sm-x]',
          'text-[length:--button-font-size-sm]',
          'px-[var(--button-spacing-padding-sm-x)]',
          'py-[var(--button-spacing-padding-sm-y)]',
        ],
        md: [
          'gap-[--button-spacing-padding-md-x]',
          'text-[length:--button-font-size-md]',
          'px-[var(--button-spacing-padding-md-x)]',
          'py-[var(--button-spacing-padding-md-y)]',
        ],
        lg: [
          'gap-[--button-spacing-padding-lg-x]',
          'text-[length:--button-font-size-lg]',
          'px-[var(--button-spacing-padding-lg-x)]',
          'py-[var(--button-spacing-padding-lg-y)]',
        ],
      },
      radius: {
        none: 'rounded-[--button-border-radius-none]',
        sm: 'rounded-[--button-border-radius-sm]',
        md: 'rounded-[--button-border-radius-md]',
        lg: 'rounded-[--button-border-radius-lg]',
        xl: 'rounded-[--button-border-radius-xl]',
        full: 'rounded-[--button-border-radius-full]',
      },
    },
    compoundVariants: [
      {
        buttonType: 'neutral-solid',
        size: 'md',
        radius: 'md',
      },
    ],
    defaultVariants: {
      buttonType: 'neutral-solid',
      size: 'md',
      radius: 'md',
    },
  },
);

export const iconStyles = cva('', {
  variants: {
    buttonType: {
      'neutral-solid': 'btn--neutral-icon-solid',
      'neutral-bordered': 'btn--neutral-icon-bordered',
      'neutral-ghost': 'btn--neutral-icon-ghost',
      'neutral-faded': 'btn--neutral-icon-faded',
    },
    size: {
      default: 'w-[--button-font-size-md] h-[--button-font-size-md]',
      sm: 'w-[--button-font-size-sm] h-[--button-font-size-sm]',
      md: 'w-[--button-font-size-md] h-[--button-font-size-md]',
      lg: 'w-[--button-font-size-lg] h-[--button-font-size-lg]',
    },
  },
  compoundVariants: [
    {
      buttonType: 'neutral-solid',
      size: 'md',
    },
  ],
  defaultVariants: {
    buttonType: 'neutral-solid',
    size: 'md',
  },
});
