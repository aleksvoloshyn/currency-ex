import { useState, useEffect } from 'react';
import { getCurrencyCodes } from 'sevices/currency';
import css from './header.module.scss';

const Header = () => {
  const [usd, setUsd] = useState({});
  const [eur, setEur] = useState({});

  useEffect(() => {
    getCurrencyCodes()
      .then(data => {
        data.map(val => {
          if (val.cc === 'USD') {
            setUsd(val);
          }
          if (val.cc === 'EUR') {
            setEur(val);
          }
          return true;
        });
      })
      .then(data => {
        console.log(data);
      });
  }, []);
  return (
    <header className={css.header}>
      {usd && (
        <>
          <h2>{usd.cc}</h2> <p>{usd.rate}</p>
        </>
      )}
      {eur && (
        <>
          <h2>{eur.cc}</h2> <p>{eur.rate}</p>
        </>
      )}
    </header>
  );
};

export default Header;
