import React from 'react';
import { Create, SimpleForm } from 'react-admin';
import UserSummary from './UserSummary';


const UserCreate = props => (
  <Create {...props}>
      <SimpleForm>
        <UserSummary creation={true} />
      </SimpleForm>
  </Create>
);

export default UserCreate;