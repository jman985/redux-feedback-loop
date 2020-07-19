import React, {Component} from 'react';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';



class Comments extends Component {
    render() {
      return (
        <div className="Comments">
            <h1>Any comments you want to leave?</h1>
          {/* 
            The list shouldn't go here.
            The list goes inside of the FamousSection Component
          */}
        </div>
      );
    }
  }
  
  export default Comments;