import React, { useState } from 'react';
import Keypad from '../keypad/Keypad';
import Display from '../display/Display';
import styles from './calculator.module.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [operation, setOperation] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [onSecondValue, setOnSecondValue] = useState(false);

  const updateDisplay = (value) => {
    if (value === 'AC') {
      setDisplay('');
      setOperation('');
      setFirstValue('');
      setOnSecondValue(false);
      return;
    }

    if (operation && !onSecondValue) {
      console.log(value);
      setDisplay(value);
      setOnSecondValue(true);
      return;
    }

    if (!display && value === ',') {
      setDisplay('0,');
      return;
    }

    if (value === ',' && display.includes(',')) {
      return;
    }

    setDisplay(display + value);
  };

  const updateOperation = (value) => {
    console.log(value);
    setOperation(value);
    setFirstValue(display);
  };

  return (
    <div className={styles.calculator}>
      <Display value={display}></Display>
      <Keypad
        buttonOnClick={updateDisplay}
        operationOnClick={updateOperation}
        operationClicked={operation === '' ? false : true}
      ></Keypad>
    </div>
  );
};

export default Calculator;

/**
 * store initial value before operation
 * get operation
 * when operation is clicked, button style changes to highlight mode
 * if it's the first operation pressed, store next value
 * function for the equal button
 * take display and the operation and calculate
 */
