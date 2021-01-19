import React from 'react';
import { Grid } from '@material-ui/core';
// import PropTypes from 'prop-types';

import FormGroupWithLabel from './FormGroupWithLabel';

export function TriggerList({ triggerList, listCount, noneData}) {

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs>
          <FormGroupWithLabel label='MAIN' data={triggerList} listCount={listCount} noneData={noneData}/>
        </Grid>
        <Grid item xs>
          <FormGroupWithLabel label='SUB' data={triggerList} listCount={listCount} noneData={noneData}/>
        </Grid>
      </Grid>
    </div>
    
    
  );
}

// PureInboxScreen.propTypes = {
//   /** The error message */
//   error: PropTypes.string,
// };

// PureInboxScreen.defaultProps = {
//   error: null,
// };

export default TriggerList;