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
        alert(`name is ${this.state.uname} ${this.state.email} ${this.state.gender} ${this.state.nation} ${this.state.file} ` );
        event.preventDefault();
     }
    render() {
    
        
        return (
            <form onSubmit = {this.handlerSubmitChange}>
                <h2>Applicant Details</h2>
            <div>
              <label> Name: </label>
              <input type="text" value={this.state.uname} onChange = {this.handlerNameChange} /> <br></br>

              <label> Email: </label>
              <input type="text" value={this.state.email} onChange = {this.handlerEmailChange} /> <br></br> 

              <label > Gender:</label>
              <input type="checkbox" checked={this.state.gender} onChange={this.handlerGenderChange} />
              <label >Female</label><br></br>
              <input type="checkbox" />
              <label>Male</label><br></br>

              <label>Nationality:</label>
              <select value={this.state.nation} onChange={this.handlerNationChange}>
                  <option value="0">-- Choose an Option -- </option>
                  <option value="Indian">Indian</option>
                  <option value="Canadian">Canadian</option>
                  <option value="American">American</option>
                    <option value="others">Others</option>
              </select> <br></br>

              <label>Upload file:</label><br></br>
             <input type="file" value={this.state.fileSelect} onChange= {this.handlerFileChange} name="fileupload"  />
            </div> <br></br>

            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Forms
