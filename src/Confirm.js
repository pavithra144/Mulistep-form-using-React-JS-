import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {List,ListItem,ListItemText} from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';

 class Confirm extends Component {

    
            continue = (e) => {
                e.preventDefault();
                this.props.nextStep();
        
            };
            back = (e) => {
                e.preventDefault();
                this.props.prevStep();
            };
            
            render() {
                const {values :{ FirstName, LastName, Email, Occupation, City, Bio } } = this.props;
                console.log(this.props);
                return (
                    <MuiThemeProvider>
                              <Dialog
                                open
                                fullWidth  
                             maxWidth='sm' >
          
                        <AppBar title="Confirm before Submitting" />
                        <List>
                        <ListItem>
                           <ListItemText primary="FirstName" secondary={FirstName} />
                        </ListItem>
                        <ListItem>   
                           <ListItemText primary="LastName" secondary={LastName} />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="Email" secondary={Email} />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="Occupation" secondary={Occupation} />
                        </ListItem>
                       <ListItem>
                           <ListItemText primary="City" secondary={City} />
                        </ListItem>
                        <ListItem>   
                           <ListItemText primary="Bio" secondary={Bio} />
                        </ListItem>
                            
                        </List>
                        <br />
                        <Button color="primary" variant="contained" onClick={this.continue}>Continue</Button>
                        <Button color="secondary" variant="contained" onClick={this.back}>Back</Button>
                        </Dialog> 
                    </MuiThemeProvider>    

        );
    }
}

export default Confirm;
