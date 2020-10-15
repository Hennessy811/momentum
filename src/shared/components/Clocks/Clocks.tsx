import React, { useEffect, useState } from 'react';
import { getTimeStr } from '../../utils/time';
import styles from './Clocks.module.scss';

const Clocks = () => {
  const [timeString, setTimeString] = useState(getTimeStr());

  useEffect(() => {
    setInterval(() => {
      setTimeString(getTimeStr());
    }, 1000);
  }, []);

  return (
    <div className={styles.clock}>
      {timeString}
    </div>
  );
};

export default Clocks;
