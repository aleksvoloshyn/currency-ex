import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

import css from './board.module.scss';

const Board = ({
  amountLeft,
  currencyLeft,
  amountRight,
  currencyRight,
  onAmountLeftChange,
  onCurrencyLeftChange,
  onAmountRightChange,
  onCurrencyRightChange,
}) => {
  const renderInput = (label, value, onChange, type = 'number') => (
    <div className={css.board__inp}>
      <InputLabel sx={{ marginRight: '8px' }}>{label}</InputLabel>
      <TextField
        sx={{ marginRight: '8px' }}
        variant="outlined"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );

  const renderSelect = (label, value, onChange, options) => (
    <div className={css.board__inp}>
      <InputLabel sx={{ marginRight: '8px' }}>{label}</InputLabel>
      <FormControl variant="outlined" sx={{ width: '100px' }}>
        <Select value={value} onChange={onChange}>
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );

  const leftOptions = [
    { label: 'EUR', value: 'EUR' },
    { label: 'USD', value: 'USD' },
    { label: 'UAH', value: 'UAH' },
  ];

  const rightOptions = [...leftOptions];

  return (
    <div className={css.board}>
      <div className={css.board__left}>
        {renderInput('Value', amountLeft, onAmountLeftChange)}
        {renderSelect(
          'Currency',
          currencyLeft,
          onCurrencyLeftChange,
          leftOptions,
        )}
      </div>
      <div className={css.board__right}>
        {renderInput('Value', amountRight, onAmountRightChange)}
        {renderSelect(
          'Currency',
          currencyRight,
          onCurrencyRightChange,
          rightOptions,
        )}
      </div>
    </div>
  );
};

export default Board;
