import React from 'react';
import { numberButtonCircle, highlighted } from '../keypad/keypad.module.css';

const Button = ({ children, isHighlighted, buttonClickHandler, orangeBtn }) => {
  let classes = isHighlighted
    ? `${numberButtonCircle} ${highlighted}`
    : `${numberButtonCircle}`;  

  return (
    <button className={orangeBtn ? `${orangeBtn}` : classes} onClick={() => buttonClickHandler()}>
      {children}
    </button>
  );
};

export default Button;
