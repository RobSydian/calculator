import React from 'react';

import keypadStyles from '../keypad/keypad.module.css';

let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let sideOperations = ['+', '-', 'x', '÷', '='];

const Keypad = ({ buttonOnClick }) => (
  <div id="keypad">
    <div style={{ display: 'flex' }}>
      <div className={keypadStyles.keypadBody}>
        {numbers.map((number) => (
          <button
            onClick={() => buttonOnClick(number)}
            className={keypadStyles.numberButtonCircle}
            key={number}
          >
            {number}
          </button>
        ))}
        <button
          id="comma"
          className={keypadStyles.numberButtonCircle}
          onClick={() => buttonOnClick(',')}
        >
          ,
        </button>
        <button
          id="clearBtn"
          className={keypadStyles.numberButtonCircle}
          onClick={() => buttonOnClick('AC')}
        >
          AC
        </button>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }}
      >
        {sideOperations.map((operations) => (
          <button className={keypadStyles.numberButtonCircle} key={operations}>
            <div className={keypadStyles.numberButtonValue}>{operations}</div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Keypad;
