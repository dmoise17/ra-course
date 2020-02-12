import React from 'react';
import { Edit, SimpleForm } from 'react-admin';
import GroupSummary from './GroupSummary';


const GroupEdit = props => (
  <Edit {...props}>
      <SimpleForm>
        <GroupSummary creation={false} />
      </SimpleForm>
  </Edit>
);

export default GroupEdit;