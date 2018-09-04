import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './reducer';
import './App.css';
import Display from './component/Display';
import Button from './component/Button';

//creating store
const store = createStore(Reducer);


class App extends Component
{
  render()
  {
    return (
        <Provider store={store}>
      <div className="App">

          <Button text="+"/>
        <Display/>
          <Button text="-"/>

          <br/>

          <Button text="C"/>

      </div>
        </Provider>
    );
  }
}

export default App;
