import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Axios from 'axios';
import logger from 'redux-logger';


const feedbackInitialState={
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}


const feedbackReducer = ( state = feedbackInitialState, action ) => {
    console.log('in feedbackReducer:', action);
    
    if (action.type === 'feeling') {
      //update states to survey input 
      console.log('in feedbackReducer, payload is: ', action.payload)
      return  {...state, feeling: action.payload}

    }else if(action.type === 'understanding'){
        console.log('in feedbackReducer, payload is: ', action.payload)
        return  {...state, understanding: action.payload}

    }else if(action.type === 'support'){
        console.log('in feedbackReducer, payload is: ', action.payload)
        return  {...state, support: action.payload}

    }else if(action.type === 'comments'){
        console.log('in feedbackReducer, payload is: ', action.payload)
        return  {...state, comments: action.payload}

    }else if(action.type==='submit'){

      //post survey data to database using axios

        console.log('submit feedback: ', state)

        Axios.post( '/submit', state ).then( ( response )=>{
            console.log( 'back from POST:', response.data );
        }).catch( ( err )=>{
            console.log( err );
            alert( 'nope' );
        }) // end axios call

    }else if(action.type==='reset'){
      //reset feedback state
      console.log('reset feedback: ', state)
      return state=feedbackInitialState;
    }

    return state;
  }



// Create the Redux store - place to keep our shared data
// All reducers run each time an action is dispatched

const storeInstance = createStore(
    combineReducers( {
      feedbackReducer
    } ),
    applyMiddleware( logger )
  )



ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));

registerServiceWorker();
