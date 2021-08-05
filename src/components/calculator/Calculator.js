import React, { useState } from 'react';
import Keypad from '../keypad/Keypad';
import Display from '../display/Display';
import styles from './calculator.module.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const updateDisplay = (value) => {
    if (value === 'AC') {
      setDisplay('');
    } else if (!display && value === ',') {
      setDisplay('0,');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display value={display}></Display>
      <Keypad buttonOnClick={updateDisplay}></Keypad>
    </div>
  );
};
export default Calculator;
