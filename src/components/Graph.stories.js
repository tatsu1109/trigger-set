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
      subject: 'Math', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Chinese', A: 98, B: 130, fullMark: 150,
    },
    {
      subject: 'English', A: 86, B: 130, fullMark: 150,
    },
    {
      subject: 'Geography', A: 99, B: 100, fullMark: 150,
    },
    {
      subject: 'Physics', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'History', A: 65, B: 85, fullMark: 150,
    },
  ]
};
