import { useState } from 'react';
import Container from 'components/container/Container';
import Header from 'components/header/Header';
import Board from 'components/board/Board';

function App() {
  const [amountLeft, setAmountLeft] = useState('');
  const [currencyLeft, setCurrencyLeft] = useState('');
  const [amountRight, setAmountRight] = useState('');
  const [currencyRight, setCurrencyRight] = useState('');

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
      <Header></Header>
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
