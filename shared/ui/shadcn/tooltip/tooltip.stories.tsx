import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const meta = {
  title: 'shadcn/Tooltip',
  component: TooltipProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TooltipProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="text-md font-inter font-bold" variant="ghost">
            Hover
          </Button>
        </TooltipTrigger>
        <TooltipContent className="*:hover:text-foreground *:hover:bg-secondary px-1 *:cursor-pointer *:rounded-sm *:px-6 *:py-2">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </TooltipContent>
      </Tooltip>
    ),
  },
};
