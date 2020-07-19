import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Support extends Component {


    nextHandleClick = ()=>{
        console.log('Next clicked');
        this.props.history.push('/comments');
      
      }


    render() {
      return (
        <div className="Support">
        <h1>How well are you being supported?</h1>
        <br></br>
          
        <button onClick={this.nextHandleClick}>Next</button>
         
        </div>
      );
    }
  }
  
  export default Support;