import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'; 
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetailsThirdStep extends Component {
    continue = (e) => {
        e.preventDefault(); 
        this.props.nextStep();

    };
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };
    
    render() {
        const {values,handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <Dialog
                   open
                   fullWidth
                   maxWidth='sm'
                >
            <AppBar title="Enter Personal details" />
            <TextField placeholder="Enter your Occupation" label="Occupation" onChange={handleChange('Occupation')} defaultValue={values.Occupation} margin="normal" fullWidth /><br />
            <TextField placeholder="Enter your City" label="City" onChange= {handleChange('City')} defaultValue={values.City} margin="normal" fullWidth/><br />
            <TextField placeholder="Enter your Bio" label="Bio" onChange={handleChange('Bio')} defaultValue={values.Bio} margin="normal" fullWidth/><br />
            <Button color="primary" variant="contained" onClick={this.continue}>Continue</Button>
            <Button color="secondary" variant="contained" onClick={this.back}>Back</Button>
            </Dialog>
        </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetailsThirdStep;
