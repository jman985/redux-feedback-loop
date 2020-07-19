import React, {Component} from 'react';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';



class Comments extends Component {
    render() {
      return (
        <div className="Comments">
          {/* 
            The list shouldn't go here.
            The list goes inside of the FamousSection Component
          */}
        </div>
      );
    }
  }
  
  export default Comments;