import React from 'react';
import { Edit, SimpleForm } from 'react-admin';
import UserSummary from './UserSummary';

const validateUser = (values) => {
  const errors = {};
  if (values.FirstName && !values.LastName) {
      errors.LastName = ['Last name is required if you added a first name'];
  }
  return errors
};


const UserEdit = props => (
  <Edit {...props}>
      <SimpleForm validate={validateUser}>
        <UserSummary creation={false} />
      </SimpleForm>
  </Edit>
);

export default UserEdit;