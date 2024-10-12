import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '.';
import { ThemeProvider } from '../../../context/themeProvider';

const customTheme = {};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: any = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ["onClick"]
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={customTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Button',
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    variant: 'filled',
    children: 'Button',
    onClick: fn(),
  },
};