import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Fo/Button',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button
    data-testId="InputField-id"
    {...args}
  />
);
Primary.args = {
  color: 'primary',
  disabled: false,
  text: 'Primary',
};

export const Secondary: Story = (args) => (
  <Button
    data-testId="InputField-id"
    {...args}
  />
);
Secondary.args = {
  color: 'secondary',
  disabled: false,
  text: 'Secondary',
};

export const Disabled: Story = (args) => (
  <Button
    data-testId="InputField-id"
    {...args}
  />
);
Disabled.args = {
  color: 'default',
  disabled: true,
  text: 'Disabled',
};

export const Small: Story = (args) => (
  <Button
    data-testId="InputField-id"
    {...args}
  />
);
Small.args = {
  color: 'primary',
  disabled: false,
  size: 'sm',
  text: 'Small',
};

export const Medium: Story = (args) => (
  <Button
    data-testId="InputField-id"
    {...args}
  />
);
Medium.args = {
  color: 'warning',
  disabled: false,
  size: 'md',
  text: 'Medium',
};

export const Large: Story = (args) => (
  <Button
    data-testId="InputField-id"
    {...args}
  />
);
Large.args = {
  color: 'dark',
  disabled: false,
  size: 'lg',
  text: 'Large',
};
