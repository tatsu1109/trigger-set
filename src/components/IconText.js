import React from 'react';
// import PropTypes from 'prop-types';
import { FormControl, Input, InputLabel, InputAdornment, SvgIcon} from '@material-ui/core';

export default function IconText({ data, icon, label, viewBox }) {
  return (
      <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={data}
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon component={icon} viewBox={viewBox}/>
            </InputAdornment>
          }
        />
      </FormControl>
  );
}

// Task.propTypes = {
//   /** Composition of the task */
//   task: PropTypes.shape({
//     /** Id of the task */
//     id: PropTypes.string.isRequired,
//     /** Title of the task */
//     title: PropTypes.string.isRequired,
//     /** Current state of the task */
//     state: PropTypes.string.isRequired,
//   }),
//   /** Event to change the task to archived */
//   onArchiveTask: PropTypes.func,
//   /** Event to change the task to pinned */
//   onPinTask: PropTypes.func,
// };