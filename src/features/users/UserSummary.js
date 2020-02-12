import React from 'react';
import { DateInput, NumberInput, TextInput } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

const styles = {
  root: {
    backgroundColor: 'lightgray'
  },
  label: {
    fontSize: '24px'
  }
};

const UserSummary = ({creation, classes, ...rest}) => (
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
        <TextInput source="UserName" />
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
        <TextInput label="Email Address" source="email" type="email" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3}>
        <TextInput label="Web Site" source="website" type="url" />
      </Grid>
    </Grid>
  );

export default withStyles(styles)(UserSummary);