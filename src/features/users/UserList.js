import React from 'react';
import { Datagrid, List, NumberField, TextField, EmailField, UrlField, DateField } from 'react-admin';

const UserList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <NumberField source="id" />
          <TextField source="UserName" />
          <TextField source="FirstName" />
          <TextField source="LastName" />
          <DateField source="birthDate" />
          <EmailField source="email" />
          <UrlField source="website" />
      </Datagrid>
  </List>
);

export default UserList;