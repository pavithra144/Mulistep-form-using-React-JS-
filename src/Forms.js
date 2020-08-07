import React, { Component } from 'react'

 class Forms extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             uname : '',
             email : '',
             gender : '',
             nation : '',
             fileSelect :''
         }
         this.handlerNameChange = this.handlerNameChange.bind(this);
     }
     handlerNameChange = (event) => {
         this.setState ({
            uname : event.target.value
         })
     }
     handlerEmailChange =(event) => {
         this.setState ({
             email : event.target.value
         })
     }
     handlerGenderChange =(event) => {
         debugger;
         this.setState({
             gender :event.target.value
         })
     }
     handlerNationChange =(event) => {
         this.setState({
             nation : event.target.value
         })
     }
    handlerFileChange = (event) => {
        this.setState({
            file : event.target.value
        })
    }
    // submitting
     handlerSubmitChange =(event) => {
        alert(`details are  ${this.state.uname} ${this.state.email} ${this.state.gender} ${this.state.nation} ${this.state.file} ` );
        event.preventDefault();
     }
    render() {
    
        
        return (
            <form onSubmit = {this.handlerSubmitChange}>
               
            
            
            <h2>Applicant Details</h2>
             <label> Name: 
            <input type="text" value={this.state.uname} onChange = {this.handlerNameChange} /> 
            </label><br></br>
            
              <label> Email: 
              <input type="text" value={this.state.email} onChange = {this.handlerEmailChange} /> 
              </label><br></br>
            
              <label > Gender:
              <input type="checkbox" value="female" onChange={this.handlerGenderChange} />
              <label >Female</label>
              <input type="checkbox" value ="male" onChange={this.handlerGenderChange} />
              <label>Male</label><br></br>
              </label><br></br>
            
            <label>Nationality:
            <select value={this.state.nation} onChange={this.handlerNationChange}>
                  <option value="0">-- Choose an Option -- </option>
                  <option value="Indian">Indian</option>
                  <option value="Canadian">Canadian</option>
                  <option value="American">American</option>
                    <option value="others">Others</option>
              </select> <br></br>
              </label><br></br>
            
            <label>Upload file:
            <input type="file" onChange= {this.handlerFileChange} name="fileupload"  />
            </label><br></br>
                                    
            <label><input type="submit" value="Submit" />
            </label>
            </form>
            
        );
    }
}

export default Forms
