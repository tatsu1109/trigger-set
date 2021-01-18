import React from 'react';
import FormGroupWithLabel from './FormGroupWithLabel';

export default {
  component: FormGroupWithLabel,
  title: 'FormGroupWithLabel',
};

const Template = args => <FormGroupWithLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      category: 'A', 
      itemList: ['AAA', 'AAB','AAC']
    },
    {
      category: 'B', 
      itemList: ['BBA', 'BBB'],
    },
  ],
  listCount: 4
};
