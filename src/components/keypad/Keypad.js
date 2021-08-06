import React from 'react';
import Button from '../button/Button';
import keypadStyles from '../keypad/keypad.module.css';

const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
const sideOperations = ['÷', 'x', '-', '+', '='];

const Keypad = ({ buttonOnClick, operationOnClick, operationClicked }) => (
  <div id="keypad" style={{ display: 'flex' }}>
    <div className={keypadStyles.keypadBody}>
      {numbers.map((number) => (
        <Button value={number} buttonClickHandler={buttonOnClick} key={number}>
          {number}
        </Button>
      ))}
      <Button id="comma" value="," buttonClickHandler={buttonOnClick}>
        ,
      </Button>
      <Button id="clearBtn" value="AC" buttonClickHandler={buttonOnClick}>
        AC
      </Button>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
      }}
    >
      {sideOperations.map((operation) => (
        <Button
          value={operation}
          buttonClickHandler={operationOnClick}
          key={operation}
          isHighlighted={operationClicked}
        >
          {operation}
        </Button>
      ))}
    </div>
  </div>
);

export default Keypad;
