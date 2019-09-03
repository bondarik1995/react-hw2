import React from 'react';

import './App.css';

const lengthNumber = 13; 

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      number: '',
      errorMessage: ''
    }

    this.validating = this.validating.bind(this);
  }

  validating(e) {
    let number = e.target.value;
    var errorMessage = '';

    if (number.length >= lengthNumber) {
      var match = number.match(/^(\+375)(29|33|44|25)([\d\- ]{7}$)/);

      if (match === null) {
        errorMessage = 'Номер введен неверно';
      }
    }
    
    this.setState({ number, errorMessage });
  }

  render() {
    const {number, errorMessage} = this.state;

    return (
      <div className="App">
        <br />
        <input 
          type='text'
          value={number}
          name='phone'
          placeholder='Your number'
          maxLength={lengthNumber}
          onChange={this.validating}
          className={errorMessage !== '' ? 'error' : ''}
        />
        <br />
        {errorMessage !== '' ? errorMessage : ''}
      </div>
    );
  }
}
