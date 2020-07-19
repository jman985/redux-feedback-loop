import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';



class Feeling extends Component {




    render() {
      return (
        <div className="Feeling">
          <h1>How are you feeling today?</h1>
          {/* 
            The list shouldn't go here.
            The list goes inside of the FamousSection Component
          */}
        </div>
      );
    }
  }
  
  export default Feeling;