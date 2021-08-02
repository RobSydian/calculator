import React from 'react';
import Keypad from './Keypad';
import Display from './Display';


const Calculator = (props) => {
  return (
  <>
  <h1>I'm the Calculator</h1>
  <Display></Display>
  <Keypad></Keypad>
  </>)
}

export default Calculator;
