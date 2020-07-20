import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';



class Comments extends Component {


    state={
        comments: ''
      }

    //dispatch 'comments' on click, then move to next page

    nextHandleClick = ()=>{
        console.log('Next clicked');
        this.props.dispatch( { type: 'comments', payload: this.state.comments} );
        this.props.history.push('/review');
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
        <div className="Comments">
            <h1>Any comments you want to leave?</h1>
            <br></br>
            <br></br>
            <input type="text" placeholder="Comments?" onChange={ ( event )=>this.handleChange( event, 'comments') }></input>
            <br></br>
            <br></br>
          <button onClick={this.nextHandleClick} disabled={this.state.comments===''}>Next</button>
         
        </div>
      );//end return
    }//end render
  }//end class
  
  export default Comments;