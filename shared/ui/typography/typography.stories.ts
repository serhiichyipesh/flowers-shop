import { Typography } from '@/shared/ui';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'shadcn/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Inter = {
  args: {
    children: 'Inter',
  },
};

export const InterBold = {
  args: {
    children: 'Inter Bold',
    className: 'font-bold',
  },
};

export const PlayFair = {
  args: {
    children: 'PlayFair',
    className: 'font-playfair',
  },
};

export const PlayFairBold = {
  args: {
    children: 'PlayFair Bold',
    className: 'font-playfair font-bold',
  },
};
