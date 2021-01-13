import React from 'react';
import Graph from './Graph';

export default {
  component: Graph,
  title: 'Graph',
};

const Template = args => <Graph {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      subject: 'Math', A: 120, B: 110, value: 150,
    },
    {
      subject: 'Chinese', A: 98, B: 130, value: 150,
    },
    {
      subject: 'English', A: 86, B: 130, value: 150,
    },
    {
      subject: 'Geography', A: 99, B: 100, value: 150,
    },
    {
      subject: 'Physics', A: 85, B: 90, value: 150,
    },
    {
      subject: 'History', A: 65, B: 85, value: 150,
    },
  ]
};
