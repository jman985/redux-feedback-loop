import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';



class Feeling extends Component {

    state={
      feeling: 0
    }


    nextHandleClick = ()=>{
        console.log('Next clicked');
        this.props.dispatch( { type: 'feeling', payload: this.state } );
        this.props.history.push('/understanding');
      
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
        <div className="Feeling">
          <h1>How are you feeling today?</h1>
          <br></br>
          <p className="label">Feeling?</p>
          <input type="number"  min="1" max="5" onChange={ ( event )=>this.handleChange( event, 'feeling') }></input>
        <br></br>
        <br></br>

        <button onClick={this.nextHandleClick} disabled={this.state.feeling>5||this.state.feeling<1}>Next</button>

        </div>
      );
    }
  }
  
  export default Feeling;