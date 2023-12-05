import axios from 'axios';

// const monoBankApi = 'https://api.monobank.ua/bank/currency';

// const privatBankApi =
//   'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const govBank =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const getCurrencyCodes = () => {
  return axios
    .get(govBank)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e);
    });
};
