import css from './currencyInfo.module.scss';
const CurrencyInfo = ({ currency }) => {
  return (
    <>
      {currency && (
        <div className={css.currency}>
          <img
            src={`./images/${currency.cc}.png`}
            alt={` ${currency.cc} icon`}
            width={48}
          />
          <h2>{currency.cc}</h2>
          <div className="currency__text">
            {' '}
            <p>{currency.rate}</p>
            <p className={css.currency__descr}>for 1 UAH</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrencyInfo;
