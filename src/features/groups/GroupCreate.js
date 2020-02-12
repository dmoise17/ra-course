import React from 'react';
import { Create, SimpleForm } from 'react-admin';
import GroupSummary from './GroupSummary';


const GroupCreate = props => (
  <Create {...props}>
      <SimpleForm>
        <GroupSummary creation={true} />
      </SimpleForm>
  </Create>
);

export default GroupCreate;