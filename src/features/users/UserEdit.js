import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="id" disabled/>
          <TextInput source="UserName" />
          <TextInput source="Password" />
      </SimpleForm>
  </Edit>
);

export default UserEdit;