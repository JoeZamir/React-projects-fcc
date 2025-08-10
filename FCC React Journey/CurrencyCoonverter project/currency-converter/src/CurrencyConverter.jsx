import { useState, useMemo } from 'react';

const exchangeRates = {
    USD: 1,
    EUR: 0.86,
    GBP: 0.75,
    JPY: 147.41
  }

export function CurrencyConverter() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const amountInUSD = useMemo(() => {
    if (!amount || !exchangeRates[fromCurrency]) {
      return 0;
    }
    return (amount / exchangeRates[fromCurrency]);
  }, [amount, fromCurrency]);

  const result = amountInUSD * exchangeRates[toCurrency];

  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <label htmlFor="number">{fromCurrency} to {toCurrency} Conversion</label>
      <input type="number" id="number" onChange={e => setAmount(e.target.value)} />
      <label htmlFor="start-currency">Start Currency</label>
      <select id="start-currency" onChange={e => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <label htmlFor="target-currency">Target Currency</label>
      <select id="target-currency" onChange={e => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <div className="result">
        Converted Amount: {result.toFixed(2)} {toCurrency}
      </div>
    </div>
  )
}
