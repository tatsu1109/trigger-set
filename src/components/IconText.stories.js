import React from 'react';
import IconText from './IconText';
import { ReactComponent as optionIcon } from '../image/option.svg';

export default {
  component: IconText,
  title: 'IconText',
};

const Template = args => <IconText {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: 'data',
  icon: optionIcon,
  label: 'label',
  viewBox: '0 0 32 32'
};
