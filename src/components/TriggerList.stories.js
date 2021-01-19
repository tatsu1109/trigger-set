import React from 'react';
import TriggerList from './TriggerList';

// A super-simple mock of a redux store
// const store = {
//   getState: () => {
//     return {
//       tasks: TaskListStories.Default.args.tasks,
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action('dispatch'),
// };

export default {
  component: TriggerList,
  // decorators: [story => <Provider store={store}>{story()}</Provider>],
  title: 'TriggerList',
};

const Template = args => <TriggerList {...args} />;

export const Default = Template.bind({});
Default.args = {
  triggerList: [
    {
      category: 'A', 
      itemList: ['AAA', 'AAB','AAC']
    },
    {
      category: 'B', 
      itemList: ['BBA', 'BBB'],
    },
  ],
  listCount: 4,
  noneData:'None'
};


// export const Error = Template.bind({});
// Error.args = {
//   error: 'Something',
// };