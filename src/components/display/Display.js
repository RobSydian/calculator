import React from 'react';

import styles from './display.module.css';

const Display = ({ value }) => (
  <div className={styles.displayScreen}>
    <div className={styles.displayResult}>{value ? value : '0'}</div>
  </div>
);

export default Display;
