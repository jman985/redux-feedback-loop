import React, {Component} from 'react';



class ThankYou extends Component {

  //move to beginning of survey on click and reset state
    newHandleClick = ()=>{
        console.log('Next clicked');
        this.props.dispatch( { type: 'reset' } );
        this.props.history.push('/');
      }

    render() {
      return (
        <div className="ThankYou">
        <h1>Thank You!</h1>
        <br></br>
          
        <button onClick={this.newHandleClick}>Leave New Feedback</button>

        </div>
      );//end return
    }//end render
  }//end class
  
  export default ThankYou;