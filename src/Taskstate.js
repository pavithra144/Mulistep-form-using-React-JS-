import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 class Taskstate extends Component {
     constructor(props) {
         super(props);
         this.state = {
              message : "Hello"
         };
         this.clickover= this.clickover.bind(this) 
     }    
    clickover = () => {
        this.setState  ({
        message : "Thanks"
        });
        
    }
    render() {
        return ( 
            <div>
                <h1> {this.state.message}</h1>
                <button onClick = {this.clickover}> Click</button>
            </div>
        );
    }


 
 }
 ReactDOM.render(<Taskstate /> , document.getElementById('root'));
export default Taskstate
