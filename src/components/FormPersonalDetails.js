import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <Container>
            <AppBar title="Enter Personal Details" />
            <TextField placeholder="Enter Your Occupation" label="Occupation" margin="normal" fullWidth
              onChange={handleChange('occupation')} defaultValue={values.occupation} />
            <br />
            <TextField placeholder="Enter Your City" label="City" margin="normal" fullWidth
               defaultValue={values.city} onChange={handleChange('city')}/>
            <br />
            <TextField placeholder="Enter Your Bio" label="Bio" margin="normal" fullWidth
              defaultValue={values.bio} onChange={handleChange('bio')} />
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>Back</Button>
            <Button color="primary" variant="contained" onClick={this.continue}>Continue</Button>
        </Container>
    );
  }
}

export default FormPersonalDetails;
