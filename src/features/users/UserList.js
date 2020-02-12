import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Datagrid, DateField, EditButton, EmailField, Filter, List, NumberField, ReferenceField, TextInput, TextField, UrlField } from 'react-admin';

const styles = {
  button: {
    fontWeight: 'bold',
    // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
    '& svg': { color: 'orange' }
  },
};

const UserFilters = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="UserName" alwaysOn />
    <TextInput label="Last Name" source="LastName" />
  </Filter>
);

const MyEditButton = withStyles(styles)(({ classes, ...props }) => (
  <EditButton
    className={classes.button}
    {...props}
  />
));

const UserList = props => (
  <List {...props} filters={<UserFilters />} sort={{ field: 'UserName', order: 'ASC' }}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="UserName" />
      <TextField source="FirstName" sortable={false} />
      <TextField source="LastName" />
      <DateField source="birthDate" />
      <EmailField source="email" />
      <UrlField source="website" />
      <ReferenceField label="Group" source="group" reference="groups" sortBy="name">
        <TextField source="name" />
      </ReferenceField>
      <MyEditButton />
    </Datagrid>
  </List>
);

export default UserList;