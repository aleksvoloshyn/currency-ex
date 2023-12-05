import { useState, useEffect } from 'react';
import Title from 'components/title/Title';
import CurrencyInfo from 'components/currencyInfo';
import { getCurrencyCodes } from 'sevices/currency';
import css from './header.module.scss';

const Header = () => {
  const [usd, setUsd] = useState({});
  const [eur, setEur] = useState({});

  useEffect(() => {
    getCurrencyCodes().then(data => {
      const eurCurrency = data.find(val => val.cc === 'EUR');
      const usdCurrency = data.find(val => val.cc === 'USD');
      setEur(eurCurrency || {});
      setUsd(usdCurrency || {});
    });
  }, []);
  return (
    <header className={css.header}>
      <Title title="Exchange Rates"></Title>
      <CurrencyInfo currency={eur}></CurrencyInfo>
      <CurrencyInfo currency={usd}></CurrencyInfo>
    </header>
  );
};

export default Header;
