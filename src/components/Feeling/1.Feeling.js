import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';



class Feeling extends Component {

    nextHandleClick = ()=>{
        console.log('Next clicked');
        this.props.history.push('/understanding');
      
      }


    render() {
      return (
        <div className="Feeling">
          <h1>How are you feeling today?</h1>
          <br></br>
          
            <button onClick={this.nextHandleClick}>Next</button>
           
        </div>
      );
    }
  }
  
  export default Feeling;