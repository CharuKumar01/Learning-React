/* eslint-disable no-unused-vars */
import React, {useId} from 'react';
import PropTypes from 'prop-types';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  amountDisableable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();

  // Your component logic here...

  return (
    <div className={className}>
      <label htmlFor={amountInputId}>{label}</label>
      <input
        type="number"
        id={amountInputId}
        value={amount}
        onChange={onAmountChange}
        disabled={amountDisable || amountDisableable}
      />
      <select value={selectCurrency} onChange={onCurrencyChange} disabled={currencyDisable}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  selectCurrency: PropTypes.string,
  amountDisable: PropTypes.bool,
  amountDisableable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
