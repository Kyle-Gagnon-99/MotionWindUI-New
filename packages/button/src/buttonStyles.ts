import { cva } from 'class-variance-authority';
import './Button.css';

export const buttonStyles = cva(
	'flex flex-row disabled:cursor-not-allowed items-center justify-center',
	{
		variants: {
			buttonType: {
				'neutral-solid': 'bg-[var(--button-neutral-solid-background)]',
			},
			size: {
				default: [
					'text-[var(--button-font-size-md)]',
					'px-[var(--button-spacing-padding-md-x)]',
					'py-[var(--button-spacing-padding-md-y)]',
				],
				sm: [
					'text-[var(--button-font-size-sm)]',
					'px-[var(--button-spacing-padding-sm-x)]',
					'py-[var(--button-spacing-padding-sm-y)]',
				],
				md: [
					'text-[var(--button-font-size-md)]',
					'px-[var(--button-spacing-padding-md-x)]',
					'py-[var(--button-spacing-padding-md-y)]',
				],
				lg: [
					'text-[var(--button-font-size-lg)]',
					'px-[var(--button-spacing-padding-lg-x)]',
					'py-[var(--button-spacing-padding-lg-y)]',
				],
			},
			radius: {
				default: 'rounded-[var(--button-border-radius-md)]',
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
	}
);
