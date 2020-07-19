import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Understanding extends Component {
    render() {
      return (
        <div className="Understanding">
        <h1>How well are you understanding the content?</h1>

          {/* 
            The list shouldn't go here.
            The list goes inside of the FamousSection Component
          */}
        </div>
      );
    }
  }
  
  export default Understanding;