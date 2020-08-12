import React, { Component } from 'react'

class UserFormFirstStep extends Component {
state = {
    step: 1,
    FirstName: '',
    LastName: '',
    Email: '',
    Occupation:'',
    City: ''

}
//next step
nextStep =() =>{
    const {step} = this.state;
    this.setState({
    step: step + 1
    })
}
//previous step
prevStep = () => {
    const {step} = this.state;
    this.setState =({
        step: step - 1
    })
}
handleChange = (input) => (eve) =>{
    this.setState ({
        [input]: e.target.name
    })

}
    render() {
        const {step} = this.state
        const {FirstName,LastName,Email,Occupation,City} = this.state
        const {values} = FirstName,LastName,Email,Occupation,City
                switch (step) {
                    case 1:
                        return(
                        <FormUserDetailsSecStep nextStep={this.nextStep} values={values} handleChange={this.handleChange}/>
                        );
                        
                    case 2:
                        <FormPersonalDetailsThirdStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>
                        
                    case 3:
                        <Confirm nextStep={this.nextStep} prevStep={this.prevStep}  values={values}/>
                    case 4:
                        <Success />
                    default:
                        console.log("multistep form ")
                }
        
        
    }
}

export default UserFormFirstStep
