import { useToast } from '@/shared/models/hooks/use-toast';
import type { Meta } from '@storybook/react';
import { Button } from '../button';
import { Toaster } from './toaster';

const meta: Meta<typeof Toaster> = {
  title: 'shadcn/Toast',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-12">
      <Button
        onClick={() =>
          toast({
            title: 'Notification',
            description: 'This is a default toast notification.',
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
};

export const Destructive = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-12">
      <Button
        onClick={() =>
          toast({
            title: 'Error',
            description: 'Something went wrong. Please try again.',
            variant: 'destructive',
            action: (
              <Button onClick={() => console.log('Retrying...')}>Retry</Button>
            ),
          })
        }
      >
        Show Error Toast
      </Button>
      <Toaster />
    </div>
  );
};
