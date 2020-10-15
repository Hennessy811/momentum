import React from 'react';
import styles from './App.module.scss';
import Unsplash from './shared/components/Unsplash';
import Clocks from './shared/components/Clocks';
import Quote from './shared/components/Quote';

function App() {
  return (
    <div className={styles.root}>
      <Unsplash />
      <Clocks />
      <Quote />
    </div>
  );
}

export default App;
