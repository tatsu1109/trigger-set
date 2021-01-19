import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
// import { Provider } from 'react-redux';
// import store from './lib/redux';
import { listTriggerMasters } from './graphql/queries'

import awsExports from "./aws-exports";
import './index.css';
import TriggerList from './components/TriggerList';

Amplify.configure(awsExports);
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchTodos()
  }, [])
  
  async function fetchTodos() {
    try {
      const master = await API.graphql(graphqlOperation(listTriggerMasters))
      const masterData = master.data.listTriggerMasters.items
      const result = groupBy(masterData, item => item.category)
        .map(([category, items]) => ({
          category: category,
          itemList: items
            .sort((a, b) => Number(a.key) - Number(b.key))
            .flatMap(item => item.name)
        }));
      setData(result)
    } catch (err) { console.log('error fetching data') }
  }
  
  return (
    <TriggerList triggerList={data} listCount={4} noneData='FREE TRIGGER'/>
  );
}

const groupBy = (array, getKey) =>
    Array.from(
        array.reduce((map, cur, idx, src) => {
            const key = getKey(cur, idx, src);
            const list = map.get(key);
            if (list) list.push(cur);
            else map.set(key, [cur]);
            return map;
        }, new Map())
    );
    
export default App;