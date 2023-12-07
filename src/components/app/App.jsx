import { useState, useEffect } from 'react';
import Container from 'components/container/Container';
import Header from 'components/header/Header';
import Board from 'components/board/Board';
import { getCurrencyCodes } from 'sevices/currency';

function App() {
  const [amountLeft, setAmountLeft] = useState('1');
  const [currencyLeft, setCurrencyLeft] = useState('UAH');
  const [amountRight, setAmountRight] = useState('1');
  const [currencyRight, setCurrencyRight] = useState('UAH');
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
