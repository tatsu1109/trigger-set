import React from 'react';
import { makeStyles, MenuItem, ListSubheader, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CategoryList({ data }) {
  const classes = useStyles();

  return (
      <FormControl className={classes.formControl}>
      <Select defaultValue="" id="grouped-select">
        {
          data.map(item => {
            const listSubHeader = <ListSubheader>{item.category}</ListSubheader>
            const ListItem = item.itemList.map(detailItem => <MenuItem value={detailItem}>{detailItem}</MenuItem>)
            return [listSubHeader ,...ListItem]
         })
        }
        </Select>
      </FormControl>
  );
}