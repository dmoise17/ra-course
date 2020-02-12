import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Datagrid, DateField, EditButton, EmailField, List, NumberField, TextField, UrlField } from 'react-admin';

const styles = {
  button: {
      fontWeight: 'bold',
      // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
      '& svg': { color: 'orange' }
  },
};

const MyEditButton = withStyles(styles)(({ classes, ...props }) => (
  <EditButton
      className={classes.button}
      {...props}
  />
));

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
          <MyEditButton/>
      </Datagrid>
  </List>
);

export default UserList;