import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { getGreeting, getTimeStr } from '../../utils/time';
import styles from './Clocks.module.scss';

const Clocks = () => {
  const [timeString, setTimeString] = useState(getTimeStr());
  const [greeting, setGreeting] = useState(getGreeting());
  const [tempName, setTempName] = useState('');
  const [name, setName] = useLocalStorage('username');

  useEffect(() => {
    setInterval(() => {
      setTimeString(getTimeStr());
      setGreeting(getGreeting());
    }, 1000);
  }, []);

  const input = (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          setName(tempName);
        }}
      >
        <input
          className={styles.inputName}
          type="text"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          placeholder="Enter your name"
        />
      </form>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.clock}>
        {timeString}
      </div>
      {name ? (
        <div className={styles.greeting}>
          {greeting}
          ,
          {' '}
          {name}
        </div>
      ) : input}
    </div>
  );
};

export default Clocks;
