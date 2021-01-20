import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
// import PropTypes from 'prop-types';

import FormGroupWithLabel from './FormGroupWithLabel';

export function TriggerList({ triggerList, listCount, noneData }) {
  
  const [main, setMain] = useState(new Map())
  const [sub, setSub] = useState(new Map())

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs>
          <FormGroupWithLabel
            handleChange={(trigger, position) => setTrigger(trigger, main, position, setMain)}
            label='MAIN'
            data={triggerList}
            listCount={listCount}
            noneData={noneData}
          />
        </Grid>
        <Grid item xs>
          <FormGroupWithLabel
            handleChange={(trigger, position) => setTrigger(trigger, sub, position, setSub)}
            label='SUB'
            data={triggerList}
            listCount={listCount}
            noneData={noneData}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const setTrigger = (trigger, map, position, setter) => {
  setter(map.set(position, trigger))
  // for (const value in map.values()) {
  //   if (value === trigger) {
  //     alert('same')
  //     return
  //   }
  // }
}
  
// PureInboxScreen.propTypes = {
//   /** The error message */
//   error: PropTypes.string,
// };

// PureInboxScreen.defaultProps = {
//   error: null,
// };

export default TriggerList;