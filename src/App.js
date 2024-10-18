import "./App.css";
import { useEffect, useState } from "react";
import FetchValuta from "./api/FetchValuta";
import axios from "axios";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(0);

  const [data, setData] = useState({});
  useEffect(() => {
    async function makeRequest() {
      const result = await axios.get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gkMNDWW06NkHJ8nvczJABBdXitQfn4Kpz2OzVjD0"
      );
      setData(result);
      console.log(result.data.data);
    }
    makeRequest();
  }, []);

  useEffect(() => {
    if (data && data.data) {
      const fromCurrencyKurs = data.data.data[fromCurrency];
      const toCurrencyKyrs = data.data.data[toCurrency];
      setResult(((toCurrencyKyrs * amount) / fromCurrencyKurs).toFixed(2));
    }
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="container">
      <div class="input-field col s12">
        <label class="amount">Enter amount</label>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div class="input-field col s12">
        <label htmlFor="amount">From currency</label>
        <select
          className="select-dropdown"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value={"AUD"}>Australian dollar</option>
          <option value={"BGN"}>Bulgarian lev</option>
          <option value={"BRL"}>Brazilian real</option>
          <option value={"CAD"}>Canadian Dollar</option>
          <option value={"CHF"}>Swiss franc </option>
          <option value={"CNY"}>Chinese yuan renminbi </option>
          <option value={"CZK"}>Koruna Česká</option>
          <option value={"DKK"}>Danish Krone</option>
          <option value={"EUR"}>Euro</option>
          <option value={"GBP"}>British Pound</option>
          <option value={"HKD"}>Hong Kong Dollar</option>
          <option value={"HRK"}>Croatian Kuna</option>
          <option value={"HUF"}>Hungarian Forint</option>
          <option value={"IDR"}>Indonesian Rupiah</option>
          <option value={"ILS"}>Israeli New Shekel</option>
          <option value={"INR"}>Indian Rupee</option>
          <option value={"ISK"}>Icelandic Krona</option>
          <option value={"JPY"}>Japanese Yen</option>
          <option value={"KRW"}>South Korean Won</option>
          <option value={"MXN"}>Mexican Peso</option>
          <option value={"MYR"}>Malaysian Ringgit</option>
          <option value={"NOK"}>Norwegian Krone</option>
          <option value={"NZD"}>New Zealand Dollar</option>
          <option value={"PHP"}>Philippine Peso</option>
          <option value={"PLN"}>Polish Zloty</option>
          <option value={"RON"}>Romanian Leu</option>
          <option value={"RUB"}>Russian Ruble</option>
          <option value={"SEK"}>Swedish Krona</option>
          <option value={"SGD"}>Singapore Dollar</option>
          <option value={"THB"}>Thai Baht</option>
          <option value={"TRY"}>Turkish Lira</option>
          <option value={"USD"}>US Dollar</option>
          <option value={"ZAR"}>South African Rand</option>
        </select>
      </div>
      <div class="input-field col s12">
        <span>{result}</span>
      </div>
      <div class="input-field col s12">
        <label htmlFor="amount">To currency</label>
        <select
          className="select-dropdown"
          value={toCurrency}
          onChange={(e) => {
            setToCurrency(e.target.value);
          }}
        >
          <option value={"AUD"}>Australian dollar</option>
          <option value={"BGN"}>Bulgarian lev</option>
          <option value={"BRL"}>Brazilian real</option>
          <option value={"CAD"}>Canadian Dollar</option>
          <option value={"CHF"}>Swiss franc </option>
          <option value={"CNY"}>Chinese yuan renminbi </option>
          <option value={"CZK"}>Koruna Česká</option>
          <option value={"DKK"}>Danish Krone</option>
          <option value={"EUR"}>Euro</option>
          <option value={"GBP"}>British Pound</option>
          <option value={"HKD"}>Hong Kong Dollar</option>
          <option value={"HRK"}>Croatian Kuna</option>
          <option value={"HUF"}>Hungarian Forint</option>
          <option value={"IDR"}>Indonesian Rupiah</option>
          <option value={"ILS"}>Israeli New Shekel</option>
          <option value={"INR"}>Indian Rupee</option>
          <option value={"ISK"}>Icelandic Krona</option>
          <option value={"JPY"}>Japanese Yen</option>
          <option value={"KRW"}>South Korean Won</option>
          <option value={"MXN"}>Mexican Peso</option>
          <option value={"MYR"}>Malaysian Ringgit</option>
          <option value={"NOK"}>Norwegian Krone</option>
          <option value={"NZD"}>New Zealand Dollar</option>
          <option value={"PHP"}>Philippine Peso</option>
          <option value={"PLN"}>Polish Zloty</option>
          <option value={"RON"}>Romanian Leu</option>
          <option value={"RUB"}>Russian Ruble</option>
          <option value={"SEK"}>Swedish Krona</option>
          <option value={"SGD"}>Singapore Dollar</option>
          <option value={"THB"}>Thai Baht</option>
          <option value={"TRY"}>Turkish Lira</option>
          <option value={"USD"}>US Dollar</option>
          <option value={"ZAR"}>South African Rand</option>
        </select>
      </div>
    </div>
  );
}

export default App;
