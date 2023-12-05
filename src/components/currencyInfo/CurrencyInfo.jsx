import css from './currencyInfo.module.scss';
const CurrencyInfo = ({ currency }) => {
  return (
    <>
      {currency && (
        <div className={css.currency}>
          <h2>{currency.cc}</h2>
          <p>{currency.rate}</p>
        </div>
      )}
    </>
  );
};

export default CurrencyInfo;
