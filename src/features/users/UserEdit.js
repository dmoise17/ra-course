import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput, DateInput } from 'react-admin';

const UserEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <NumberInput source="id" disabled/>
          <TextInput source="UserName" />
          <TextInput source="Password" type="password"/>
          <TextInput source="FirstName" />
          <TextInput source="LastName" />
          <DateInput source="birthDate" />
          <TextInput label="Email Address" source="email" type="email" />
          <TextInput label="Web Site" source="website" type="url" />
      </SimpleForm>
  </Edit>
);

export default UserEdit;