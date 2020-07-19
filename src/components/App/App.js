import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/1.Feeling'
import Understanding from '../Understanding/2.Understanding'
import Support from '../Support/3.Support'
import Comments from '../Comments/4.Comments'
import Review from '../Review/Review'
import ThankYou from '../ThankYou/ThankYou';


class App extends Component {


beginSurvey = ()=>{
  console.log('Begin clicked');
  window.location='#/feeling';
  // this.props.history.push('#/feeling');

}


  render() {
    return (
      <div className="App">
      <Header />
        <br/>


        <HashRouter>
    <Route exact path='/' render={()=> <button onClick={this.beginSurvey}>Begin</button>}/>
        <Route path='/feeling' render={ (props)=><Feeling {...props} dispatch={ this.props.dispatch } reduxState={ this.props.reduxState }/> }/>
        <Route path='/understanding' render={ (props)=><Understanding {...props} dispatch={ this.props.dispatch } reduxState={ this.props.reduxState }/>} />
        <Route path='/support' render={ (props)=><Support {...props} dispatch={ this.props.dispatch } reduxState={ this.props.reduxState }/>} />
        <Route path='/comments' render={ (props)=><Comments {...props} dispatch={ this.props.dispatch } reduxState={ this.props.reduxState }/> }/>
        <Route path='/review' render={ (props)=><Review {...props} dispatch={ this.props.dispatch } reduxState={ this.props.reduxState }/> }/>
        <Route path='/thankyou' render={ (props)=><ThankYou {...props} dispatch={ this.props.dispatch } reduxState={ this.props.reduxState }/> }/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
