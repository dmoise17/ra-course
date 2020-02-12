import React from 'react';
import { Datagrid, List, NumberField, TextField } from 'react-admin';

const GroupList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export default GroupList;