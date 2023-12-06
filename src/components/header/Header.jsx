import Title from 'components/title/Title';
import CurrencyInfo from 'components/currencyInfo';

import css from './header.module.scss';

const Header = ({ eur, usd }) => {
  return (
    <header className={css.header}>
      <Title title="Exchange Rates"></Title>
      <CurrencyInfo currency={eur}></CurrencyInfo>
      <CurrencyInfo currency={usd}></CurrencyInfo>
    </header>
  );
};

export default Header;
