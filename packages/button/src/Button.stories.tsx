import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import React from 'react';
import { iconKeys } from '../../base/src/icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    leadingIcon: {
      options: iconKeys,
    },
    trailingIcon: {
      options: iconKeys,
    },
  },
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
