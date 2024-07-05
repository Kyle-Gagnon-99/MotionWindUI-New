import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import React from 'react';

const meta = {
	title: 'Components/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

const StoryTemplate: Story = {
	args: {
		children: 'Button',
	},
	render: ({ children, ...args }) => {
		return (
			<Button {...args}>
				<span>{children}</span>
			</Button>
		);
	},
};

export const Default = StoryTemplate;
