import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

const UserCreate = props => (
  <Create {...props}>
      <SimpleForm>
      <NumberInput source="id"/>
          <TextInput source="UserName" />
          <TextInput source="Password" type="password"/>
          <TextInput source="FirstName" />
          <TextInput source="LastName" />
          <DateInput source="birthDate" />
          <TextInput label="Email Address" source="email" type="email" />
          <TextInput label="Web Site" source="website" type="url" />
      </SimpleForm>
  </Create>
);

export default UserCreate;