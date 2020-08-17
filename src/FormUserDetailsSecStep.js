import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


 class FormUserDetailsSecStep extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     componentWillReceiveProps(nextProps){
         if(this.props !== nextProps ){
             console.log(nextProps);
         }
     }
     continue = (e) => {
         e.preventDefault();
         this.props.nextStep();

     };
    render() { 
        const {values,handleChange} = this.props
        return (
        <MuiThemeProvider> 
            <Dialog
            open
            fullWidth
            maxWidth='sm'>
            <AppBar position="static" title="Enter Your details" />
      
            <TextField placeholder="Enter your FirstName" label="FirstName" onChange={handleChange('FirstName')} defaultValue={values.FirstName} margin="normal" fullWidth  /><br />
            <TextField placeholder="Enter your LastName" label="LastName" onChange={handleChange('LastName')} defaultValue={values.LastName}margin="normal" fullWidth/><br/>
            <TextField placeholder="Enter your Email" label="Email" onChange={handleChange('Email')}  defaultValue={values.Email}margin="normal" fullWidth /> <br/>
            <Button color="secondary" variant="contained" onClick={this.continue}> Continue </Button> 
            </Dialog>
            
        </MuiThemeProvider>
            
        );
    }
}

export default FormUserDetailsSecStep
