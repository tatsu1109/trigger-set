import React from 'react';
import { makeStyles, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CategoryList({ data, noneData, handleChange }) {
  const classes = useStyles();

  return (
      <FormControl className={classes.formControl}>
      <Select
        native
        defaultValue="None"
        id="grouped-select"
        onChange={event => handleChange(event.target.value)}
      >
        <option value={noneData}>{noneData}</option >
        {
          data.map(item => {
            return (
              <optgroup key={item.category} label={item.category}>
                {
                  item.itemList.map(detailItem =>
                    <option key={detailItem} value={detailItem}>
                      {detailItem}
                    </option>)
                }
              </optgroup >)
         })
        }
        </Select>
      </FormControl>
  );
}