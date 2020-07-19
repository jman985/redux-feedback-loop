import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Understanding extends Component {

    state={
        understanding: 0
      }

    nextHandleClick = ()=>{
        console.log('Next clicked');
        this.props.history.push('/support');
      
      }

      handleChange=( event, property )=>{
        console.log( 'in handleChange:', property, event.target.value );
        event.preventDefault();

        {this.setState({
                [property]: event.target.value
            })
        }
    }

    render() {
      return (
        <div className="Understanding">
        <h1>How well are you understanding the content?</h1>
        <br></br>
        <p className="label">Understanding?</p>
        <input type="number" min="1" max="5" onChange={ ( event )=>this.handleChange( event, 'understanding') }></input>
        <br></br>
        <button onClick={this.nextHandleClick}>Next</button>

          
        </div>
      );
    }
  }
  
  export default Understanding;