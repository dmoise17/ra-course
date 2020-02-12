import { Grid } from '@material-ui/core/';
import React from 'react';
import { NumberInput, TextInput } from 'react-admin';

const GroupSummary = ({ creation, ...rest }) => (
  <Grid container>
    <NumberInput source="id" disabled={!creation} />
    <TextInput source="name" />
  </Grid>
);

export default GroupSummary;