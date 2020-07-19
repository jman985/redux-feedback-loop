import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class Review extends Component {

    submitHandleClick = ()=>{
        console.log('Submit clicked');



        this.props.history.push('/thankyou');
      
      }

    
    render() {
      return (
        <div className="Review">
            <h1>Review Your Feedback</h1>
            <br></br>
          
          <button onClick={this.submitHandleClick}>Submit</button>
         
        </div>
      );
    }
  }
  
  export default Review;