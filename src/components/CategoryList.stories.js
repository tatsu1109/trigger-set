import React from 'react';
import CategoryList from './CategoryList';

export default {
  component: CategoryList,
  title: 'CategoryList',
};

const Template = args => <CategoryList {...args} />;

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
  noneData:'None'
};
