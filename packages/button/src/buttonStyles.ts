import { cva } from 'class-variance-authority';
import './Button.css';

export const buttonStyles = cva(
  'flex flex-row disabled:cursor-not-allowed items-center justify-center gap-2',
  {
    variants: {
      buttonType: {
        'neutral-solid': 'btn--neutral-solid',
      },
      size: {
        default: [
          'btn--text-test-md',
          'px-[var(--button-spacing-padding-md-x)]',
          'py-[var(--button-spacing-padding-md-y)]',
        ],
        sm: [
          'btn--text-test-sm',
          'px-[var(--button-spacing-padding-sm-x)]',
          'py-[var(--button-spacing-padding-sm-y)]',
        ],
        md: [
          'btn--text-test-md',
          'px-[var(--button-spacing-padding-md-x)]',
          'py-[var(--button-spacing-padding-md-y)]',
        ],
        lg: [
          'btn--text-test-lg',
          'px-[var(--button-spacing-padding-lg-x)]',
          'py-[var(--button-spacing-padding-lg-y)]',
        ],
      },
      radius: {
        default: 'rounded-[var(--button-border-radius-md)]',
        none: 'rounded-[var(--button-border-radius-none)]',
        sm: 'rounded-[var(--button-border-radius-sm)]',
        md: 'rounded-[var(--button-border-radius-md)]',
        lg: 'rounded-[var(--button-border-radius-lg)]',
        xl: 'rounded-[var(--button-border-radius-xl)]',
        full: 'rounded-[var(--button-border-radius-full)]',
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
      'neutral-solid': 'text-[--button-neutral-solid-text]',
    },
    size: {
      default: 'w-6 h-6', // Adjust based on your icon sizes
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
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
