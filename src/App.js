import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Provider } from 'react-redux';
import store from './lib/redux';
import { listTriggerMasters } from './graphql/queries'

import InboxScreen from './components/InboxScreen';
import awsExports from "./aws-exports";
import './index.css';

Amplify.configure(awsExports);
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchTodos()
  }, [])
  
  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTriggerMasters))
      const todos = todoData.data
      setData(todos)
    } catch (err) { console.log('error fetching todos') }
  }
  
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}


export default App;