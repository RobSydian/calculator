import React from 'react';

import styles from './display.module.css';

const Display = ({ value }) => (
  <div className={styles.displayScreen}>
    <div className={styles.displayResult}>
      <h2>{value ? value : '0'}</h2>
    </div>
  </div>
);

export default Display;
