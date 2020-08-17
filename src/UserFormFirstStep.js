import React, { Component } from 'react';
import FormUserDetailsSecStep from './FormUserDetailsSecStep';
import FormPersonalDetailsThirdStep from './FormPersonalDetailsThirdStep';
import Success from './Success';
import Confirm from './Confirm';
class UserFormFirstStep extends Component {  
state = {
    step: 1,
    FirstName: '',
    LastName: '',
    Email: '',
    Occupation:'',
    City: '',
    Bio: ''
};

//next step
nextStep =() =>{
    const {step} = this.state;
    this.setState({
    step: step + 1
    });
};
//previous step
prevStep = () => {
    const {step} = this.state;
    this.setState ({
        step: step - 1
        
    });
};
handleChange = (input) => (e) =>{
    this.setState ({
        [input]: e.target.value
    });

};
    render() {
        const {step} = this.state;
        const {FirstName,LastName,Email,Occupation,City,Bio} = this.state;
        const values = {FirstName,LastName,Email,Occupation,City,Bio};
        console.log(this.state);
                switch (step) { 
                    case 1:
                        return(
                        <FormUserDetailsSecStep nextStep={this.nextStep} values={values} handleChange={this.handleChange}/>
                        );
                        
                    case 2:
                       return( <FormPersonalDetailsThirdStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>
                       );
                    case 3:
                       return( <Confirm nextStep={this.nextStep} prevStep={this.prevStep}  values={values}/>
                       );
                    case 4:
                       return( <Success />
                       );
                    default:
                        console.log("multistep form ")
                }
        
        
    }
}

export default UserFormFirstStep;
