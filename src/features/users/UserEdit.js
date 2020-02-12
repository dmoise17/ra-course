import React from 'react';
import { Edit, SimpleForm } from 'react-admin';
import UserSummary from './UserSummary';


const UserEdit = props => (
  <Edit {...props}>
      <SimpleForm>
        <UserSummary creation={false} />
      </SimpleForm>
  </Edit>
);

export default UserEdit;