import React, {Component} from 'react';



class Understanding extends Component {

    state={
        understanding: 0
      }

    //dispatch 'understanding' data on click, then move to next page
    nextHandleClick = ()=>{
        console.log('Next clicked');
        this.props.dispatch( { type: 'understanding', payload: this.state.understanding} );
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
        <button onClick={this.nextHandleClick} disabled={this.state.understanding>5||this.state.understanding<1}>Next</button>

          
        </div>
      );//end return
    }//end render
  }//end class
  
  export default Understanding;