import React, { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";
import Currency from "../Currency";

const rates = {
  USD: 1,
  AED: 3.67,
  AFN: 83.32,
  ALL: 103.39,
  AMD: 483.99,
  ANG: 1.79,
  AOA: 609.71,
  ARS: 98.41,
  AUD: 1.37,
  AWG: 1.79,
  AZN: 1.7,
  BAM: 1.67,
  BBD: 2,
  BDT: 85.26,
  BGN: 1.67,
  BHD: 0.376,
  BIF: 1979.48,
  BMD: 1,
  BND: 1.35,
  BOB: 6.88,
  BRL: 5.28,
  BSD: 1,
  BTN: 73.75,
  BWP: 11.11,
  BYN: 2.5,
  BZD: 2,
  CAD: 1.27,
  CDF: 1978.94,
  CHF: 0.924,
  CLP: 786.93,
  CNY: 6.46,
  COP: 3854.66,
  CRC: 623.51,
  CUC: 1,
  CUP: 25,
  CVE: 93.97,
  CZK: 21.67,
  DJF: 177.72,
  DKK: 6.36,
  DOP: 56.46,
  DZD: 136.74,
  EGP: 15.69,
  ERN: 15,
  ETB: 46.12,
  EUR: 0.852,
  FJD: 2.09,
  FKP: 0.729,
  FOK: 6.36,
  GBP: 0.73,
  GEL: 3.1,
  GGP: 0.729,
  GHS: 6,
  GIP: 0.729,
  GMD: 52.04,
  GNF: 9737.97,
  GTQ: 7.73,
  GYD: 208.39,
  HKD: 7.78,
  HNL: 24.11,
  HRK: 6.42,
  HTG: 98.46,
  HUF: 304.11,
  IDR: 14099.12,
  ILS: 3.21,
  IMP: 0.729,
  INR: 73.75,
  IQD: 1454.93,
  IRR: 41899.98,
  ISK: 129.48,
  JMD: 148.17,
  JOD: 0.709,
  JPY: 110.08,
  KES: 110.26,
  KGS: 84.66,
  KHR: 4064.19,
  KID: 1.37,
  KMF: 419.28,
  KRW: 1176.7,
  KWD: 0.3,
  KYD: 0.833,
  KZT: 424.7,
  LAK: 9836.41,
  LBP: 1507.5,
  LKR: 199.48,
  LRD: 171.24,
  LSL: 14.7,
  LYD: 4.51,
  MAD: 8.98,
  MDL: 17.67,
  MGA: 3951.78,
  MKD: 52.48,
  MMK: 1801.15,
  MNT: 2842.59,
  MOP: 8.02,
  MRU: 36.23,
  MUR: 42.55,
  MVR: 15.42,
  MWK: 813.53,
  MXN: 20.03,
  MYR: 4.18,
  MZN: 63.93,
  NAD: 14.7,
  NGN: 422.42,
  NIO: 35.14,
  NOK: 8.6,
  NPR: 118.01,
  NZD: 1.42,
  OMR: 0.384,
  PAB: 1,
  PEN: 4.11,
  PGK: 3.51,
  PHP: 50.29,
  PKR: 168.8,
  PLN: 3.93,
  PYG: 6955.09,
  QAR: 3.64,
  RON: 4.22,
  RSD: 100.12,
  RUB: 72.73,
  RWF: 1013.4,
  SAR: 3.75,
  SBD: 7.98,
  SCR: 13.48,
  SDG: 437.13,
  SEK: 8.64,
  SGD: 1.35,
  SHP: 0.729,
  SLL: 10435.38,
  SOS: 576.43,
  SRD: 21.35,
  SSP: 177.43,
  STN: 20.88,
  SYP: 1683.02,
  SZL: 14.7,
  THB: 33.35,
  TJS: 11.29,
  TMT: 3.49,
  TND: 2.79,
  TOP: 2.26,
  TRY: 8.71,
  TTD: 6.78,
  TVD: 1.37,
  TWD: 27.74,
  TZS: 2312.36,
  UAH: 26.53,
  UGX: 3529.96,
  UYU: 42.76,
  UZS: 10702.36,
  VES: 4025451.56,
  VND: 22743.98,
  VUV: 112.07,
  WST: 2.58,
  XAF: 559.04,
  XCD: 2.7,
  XDR: 0.705,
  XOF: 559.04,
  XPF: 101.7,
  YER: 250.15,
  ZAR: 14.7,
  ZMW: 16.48,
};
const currencies = Object.keys(rates);

function Home(props) {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [resultList, setResultList] = useState([]);
  const [toCurrenciesList, setToCurrenciesList] = useState([]);

  const getOption = (currency) => {
    return (
      <option key={currency} value={currency}>
        {currency}
      </option>
    );
  };

  const getTheResults = () => {
    const fromCurrencyValue = rates[fromCurrency];
    const output = toCurrenciesList.map(
      (item) => (rates[item] / fromCurrencyValue) * amount
    );
    setResultList(output);
  };

  const updateAmount = (event) => {
    function validateAmount() {}
    setAmount(event.target.value);
  };

  const addCurrency = (event) => {
    const currency = event.target.value;
    setToCurrency(currency);
    console.log(toCurrency);
    console.log(toCurrenciesList);
    if (!toCurrenciesList.includes(currency)) {
      const list = [...toCurrenciesList, currency];
      setToCurrenciesList(list);
    }
    console.log(toCurrenciesList);
  };

  const removeFromToCurrencyList = (currency) => {
    const list = toCurrenciesList.filter((item) => !(item === currency));
    console.log(toCurrenciesList, currency);
    setToCurrenciesList(list);
  };

  const logout = () => {
    Cookies.remove("token");
    props.history.replace("/login");
  };

  //   const getTargetCurrencies;

  return (
    <div className="bg-container">
      <div>
        <input
          type="number"
          value={amount}
          min="0"
          step="any"
          onChange={updateAmount}
          placeholder="Enter amount"
        />
        <br />
        <span>
          <p>From</p>
        </span>
        <select
          placeholder="From"
          onChange={(event) => setFromCurrency(event.target.value)}
        >
          {currencies.map((item) => getOption(item))}
        </select>
        <span>
          <p>To</p>
        </span>

        <select onChange={addCurrency}>
          {currencies.map((item) => getOption(item))}
        </select>

        <ul>
          {toCurrenciesList.map((currency, index) => {
            console.log("from text area", toCurrenciesList);
            return (
              <Currency
                key={currency}
                currency={currency}
                removeFromToCurrencyList={removeFromToCurrencyList}
              />
            );
          })}
        </ul>
        <button onClick={getTheResults}>Convert</button>
        <div>
          <p>
            {amount} {fromCurrency} equals
          </p>
          {resultList.map((val, index) => (
            <p key={index}>
              {val} {toCurrenciesList[index]}
            </p>
          ))}
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
