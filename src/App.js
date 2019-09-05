import React from 'react';

import './App.css';

const lengthPhoneNumber = 13; 

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      phoneNumber: '',
      errorMessage: ''
    }
  }

  render() {
    const {phoneNumber, errorMessage} = this.state;

    return (
      <div className="App">
        <br />
        <input 
          type='text'
          value={phoneNumber}
          name='phone'
          placeholder='Your number'
          maxLength={lengthPhoneNumber}
          onChange={this.validatinge}
          className={errorMessage !== '' ? 'error' : ''}
        />
        <br />
        {errorMessage !== '' ? errorMessage : ''}
      </div>
    );
  }

  validatinge = e => {
    const phoneNumber = e.target.value;
    let errorMessage = '';

    if (phoneNumber.length === e.target.maxLength) {
      const match = phoneNumber.match(/^(\+375)(29|33|44|25)([\d\- ]{7}$)/);

      if (match === null) {
        errorMessage = 'Номер введен неверно';
      }
    }
    
    this.setState({ phoneNumber, errorMessage });
  }
}
