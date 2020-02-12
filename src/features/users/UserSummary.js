import { Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required, number, minValue } from 'react-admin';

const styles = {
  root: {
    backgroundColor: 'lightgray'
  },
  label: {
    fontSize: '24px'
  }
};

const email = (message = 'Must be a valid email') =>
    value => value && (value.indexOf('@') < 0) ? message : undefined;

const UserSummary = ({ creation, classes, ...rest }) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <div className={classes.root}>
        <span className={classes.label}>User Title</span>
      </div>
    </Grid>
    <Grid item xs={12}>
      <NumberInput source="id" disabled={!creation} />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <TextInput source="UserName" validate={required()}/>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <TextInput source="Password" type="password" />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <TextInput source="FirstName" />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <TextInput source="LastName" />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <DateInput source="birthDate" />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <TextInput source="age" validate={[number(), minValue(18)]}/>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <TextInput label="Email Address" source="email" validate={email()} />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <TextInput label="Web Site" source="website" type="url" />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <ReferenceInput label="Group" source="group" reference="groups">
        <SelectInput optionText="name" />
      </ReferenceInput>      
    </Grid>
  </Grid>
);

export default withStyles(styles)(UserSummary);