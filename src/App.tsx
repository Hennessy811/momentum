import React from 'react';
import styles from './App.module.scss';
import Unsplash from './shared/components/Unsplash';
import Clocks from './shared/components/Clocks';

function App() {
  return (
    <div className={styles.root}>
      <Unsplash />
      <Clocks />
    </div>
  );
}

export default App;
