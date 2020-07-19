import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Support extends Component {
    render() {
      return (
        <div className="Support">
            <h1>How well are you being supported?</h1>
          {/* 
            The list shouldn't go here.
            The list goes inside of the FamousSection Component
          */}
        </div>
      );
    }
  }
  
  export default Support;