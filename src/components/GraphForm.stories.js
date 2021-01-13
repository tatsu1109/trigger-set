import React from 'react';
import GraphForm from './GraphForm';

export default {
  component: GraphForm,
  title: 'GraphForm',
};

const Template = args => <GraphForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultData: {
    A: 120, B: 110, fullMark: 150,
  },
};
