import { useState, useEffect } from 'react';
import Container from 'components/container/Container';
import Header from 'components/header/Header';
import Board from 'components/board/Board';
import { getCurrencyCodes } from 'sevices/currency';

// ... (your import statements)

function App() {
  const [amountLeft, setAmountLeft] = useState('');
  const [currencyLeft, setCurrencyLeft] = useState('');
  const [amountRight, setAmountRight] = useState('');
  const [currencyRight, setCurrencyRight] = useState('');
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

  useEffect(() => {
    if (currencyLeft === currencyRight) {
      setAmountRight(amountLeft);
    } else if (currencyLeft === 'USD' && currencyRight === 'UAH') {
      setAmountRight((usd.rate * amountLeft).toFixed(2));
    } else if (currencyLeft === 'USD' && currencyRight === 'EUR') {
      setAmountRight(((1 / (eur.rate / usd.rate)) * amountLeft).toFixed(2));
    } else if (currencyLeft === 'EUR' && currencyRight === 'UAH') {
      setAmountRight((eur.rate * amountLeft).toFixed(2));
    } else if (currencyLeft === 'EUR' && currencyRight === 'USD') {
      setAmountRight(((eur.rate / usd.rate) * amountLeft).toFixed(2));
    } else if (currencyLeft === 'UAH' && currencyRight === 'EUR') {
      setAmountRight((eur.rate * amountLeft).toFixed(2));
    } else if (currencyLeft === 'UAH' && currencyRight === 'USD') {
      setAmountRight((usd.rate * amountLeft).toFixed(2));
    }
  }, [amountLeft, currencyLeft, currencyRight, eur.rate, usd.rate]);

  useEffect(() => {
    if (currencyRight === currencyLeft) {
      setAmountLeft(amountRight);
    } else if (currencyRight === 'USD' && currencyLeft === 'UAH') {
      setAmountLeft((amountRight / usd.rate).toFixed(2));
    } else if (currencyRight === 'USD' && currencyLeft === 'EUR') {
      setAmountLeft(((1 / (eur.rate / usd.rate)) * amountRight).toFixed(2));
    } else if (currencyRight === 'EUR' && currencyLeft === 'UAH') {
      setAmountLeft((amountRight / eur.rate).toFixed(2));
    } else if (currencyRight === 'EUR' && currencyLeft === 'USD') {
      setAmountLeft(((eur.rate / usd.rate) * amountRight).toFixed(2));
    } else if (currencyRight === 'UAH' && currencyLeft === 'EUR') {
      setAmountLeft((amountRight / eur.rate).toFixed(2));
    } else if (currencyRight === 'UAH' && currencyLeft === 'USD') {
      setAmountLeft((amountRight / usd.rate).toFixed(2));
    }
  }, [amountRight, currencyLeft, currencyRight, eur.rate, usd.rate]);

  const handleAmountLeftChange = event => {
    setAmountLeft(event.target.value);
  };

  const handleCurrencyLeftChange = event => {
    setCurrencyLeft(event.target.value);
  };

  const handleAmountRightChange = event => {
    setAmountRight(event.target.value);
  };

  const handleCurrencyRightChange = event => {
    setCurrencyRight(event.target.value);
  };

  return (
    <Container>
      <Header eur={eur} usd={usd} />
      <Board
        amountLeft={amountLeft}
        currencyLeft={currencyLeft}
        amountRight={amountRight}
        currencyRight={currencyRight}
        onAmountLeftChange={handleAmountLeftChange}
        onCurrencyLeftChange={handleCurrencyLeftChange}
        onAmountRightChange={handleAmountRightChange}
        onCurrencyRightChange={handleCurrencyRightChange}
      />
    </Container>
  );
}

export default App;
