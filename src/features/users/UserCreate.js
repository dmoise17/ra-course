import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const UserCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="id"/>
          <TextInput source="UserName" />
          <TextInput source="Password" />
      </SimpleForm>
  </Create>
);

export default UserCreate;