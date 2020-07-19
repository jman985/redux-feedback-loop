import React, {Component} from 'react';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';



class Comments extends Component {


    nextHandleClick = ()=>{
        console.log('Next clicked');
        this.props.history.push('/review');
      
      }


    render() {
      return (
        <div className="Comments">
            <h1>Any comments you want to leave?</h1>
            <br></br>
          
          <button onClick={this.nextHandleClick}>Next</button>
          {/* 
            The list shouldn't go here.
            The list goes inside of the FamousSection Component
          */}
        </div>
      );
    }
  }
  
  export default Comments;