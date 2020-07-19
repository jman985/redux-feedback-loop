import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class ThankYou extends Component {

    newHandleClick = ()=>{
        console.log('Next clicked');
        
        this.props.history.push('/');
      
      }

    render() {
      return (
        <div className="ThankYou">
        <h1>Thank You!</h1>
        <br></br>
          
        <button onClick={this.newHandleClick}>Leave New Feedback</button>

        </div>
      );
    }
  }
  
  export default ThankYou;