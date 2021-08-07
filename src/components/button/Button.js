import React from 'react';
import { numberButtonCircle, highlighted } from '../keypad/keypad.module.css';

const Button = ({ value, children, isHighlighted, buttonClickHandler }) => {
  let classes = isHighlighted
    ? `${numberButtonCircle} ${highlighted}`
    : `${numberButtonCircle}`;

  return (
    <button className={classes} onClick={() => buttonClickHandler()}>
      {children}
    </button>
  );
};

export default Button;
