import React, { Component } from 'react';

class Review extends Component {


  //dispatch to redux on axios call
    submitHandleClick = ()=>{
        console.log('Submit clicked');
        this.props.dispatch( { type: 'submit' } );
        this.props.history.push('/thankyou');
      
      }

    //render feedback data for review
    render() {
      return (
        <div className="Review">
            <h1>Review Your Feedback</h1>
            <br></br>
            <p>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
            <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
            <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
            <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>

          <button onClick={this.submitHandleClick}>Submit</button>
         
        </div>
      );//end return
    }//end render
  }//end class
  
  export default Review;