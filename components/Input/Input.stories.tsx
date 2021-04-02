import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input from './index';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Input type={args.type} label={args.label} {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  label: 'Text label',
  placeholder: 'Text placeholder',
  error: '',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  label: 'Number label',
  placeholder: 'Number placeholder',
  error: '',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  label: 'Password label',
  placeholder: 'Password placeholder',
  error: '',
};
