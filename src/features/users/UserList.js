import React from 'react';
import { Datagrid, List, NumberField, TextField } from 'react-admin';

const UserList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <NumberField source="id" />
          <TextField source="UserName" />
      </Datagrid>
  </List>
);

export default UserList;