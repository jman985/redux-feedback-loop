import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Understanding extends Component {

    nextHandleClick = ()=>{
        console.log('Next clicked');
        this.props.history.push('/support');
      
      }

    render() {
      return (
        <div className="Understanding">
        <h1>How well are you understanding the content?</h1>
        <br></br>
          
          <button onClick={this.nextHandleClick}>Next</button>

          
        </div>
      );
    }
  }
  
  export default Understanding;