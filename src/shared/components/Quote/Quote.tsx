import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { Quote as QI, QuoteResponse } from '../../interfaces/quote';
import styles from './Quote.module.scss';

const Quote = () => {
  const [quote, setQuote] = useLocalStorage<QI>('quote');

  useEffect(() => {
    fetch('https://quotes.rest/qod?language=en')
      .then((r) => r.json())
      .then((r: QuoteResponse) => setQuote(r.contents.quotes[0]));
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <b>
          {quote?.quote}
        </b>
      </div>
      <div>{quote?.author}</div>
    </div>
  );
};

export default Quote;
