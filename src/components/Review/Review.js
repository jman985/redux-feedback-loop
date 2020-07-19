import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class Review extends Component {



    
    render() {
      return (
        <div className="Review">
            <h1>Review Your Feedback</h1>
          {/* 
            The list shouldn't go here.
            The list goes inside of the FamousSection Component
          */}
        </div>
      );
    }
  }
  
  export default Review;