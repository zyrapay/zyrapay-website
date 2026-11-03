"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  RiArrowDownSLine,
  RiExchangeDollarLine,
  RiCheckboxCircleLine,
  RiArrowLeftRightLine,
  RiLoader4Line,
} from "react-icons/ri";
import "./styles/Convertor.scss";

const WEST_AFRICAN_CURRENCIES = [
  { code: "NGN", name: "Nigerian Naira",        country: "Nigeria",       flag: "🇳🇬", symbol: "₦" },
  { code: "GHS", name: "Ghanaian Cedi",          country: "Ghana",         flag: "🇬🇭", symbol: "₵" },
  { code: "XOF", name: "CFA Franc BCEAO",        country: "Senegal / WAEMU", flag: "🇸🇳", symbol: "CFA" },
  { code: "GMD", name: "Gambian Dalasi",          country: "Gambia",        flag: "🇬🇲", symbol: "D" },
  { code: "SLE", name: "Sierra Leonean Leone",    country: "Sierra Leone",  flag: "🇸🇱", symbol: "Le" },
  { code: "LRD", name: "Liberian Dollar",         country: "Liberia",       flag: "🇱🇷", symbol: "L$" },
  { code: "MRU", name: "Mauritanian Ouguiya",     country: "Mauritania",    flag: "🇲🇷", symbol: "UM" },
  { code: "GNF", name: "Guinean Franc",           country: "Guinea",        flag: "🇬🇳", symbol: "FG" },
  { code: "CVE", name: "Cape Verdean Escudo",     country: "Cape Verde",    flag: "🇨🇻", symbol: "$" },
];

const SOURCE_CURRENCIES = [
  { code: "USD", name: "US Dollar",       flag: "🇺🇸", symbol: "$" },
  { code: "EUR", name: "Euro",            flag: "🇪🇺", symbol: "€" },
  { code: "GBP", name: "British Pound",   flag: "🇬🇧", symbol: "£" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", symbol: "CA$" },
  { code: "AED", name: "UAE Dirham",      flag: "🇦🇪", symbol: "د.إ" },
];

interface Currency {
  code: string;
  name: string;
  flag: string;
  symbol: string;
  country?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
const fmt = (n: number, decimals = 2) =>
  n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

// ─── Component ───────────────────────────────────────────────────────────────
const Convertor: React.FC = () => {
  const [amount, setAmount]           = useState<string>("100");
  const [fromCur, setFromCur]         = useState<Currency>(SOURCE_CURRENCIES[0]);
  const [toCur, setToCur]             = useState<Currency>(WEST_AFRICAN_CURRENCIES[0]);
  const [rate, setRate]               = useState<number | null>(null);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState<string | null>(null);
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen]     = useState(false);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(e.target as Node)) setFromOpen(false);
      if (toRef.current   && !toRef.current.contains(e.target as Node))   setToOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const fetchRate = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res  = await fetch(`https://open.er-api.com/v6/latest/${fromCur.code}`);
      const data = await res.json();
      if (data.result === "success" && data.rates[toCur.code]) {
        setRate(data.rates[toCur.code]);
      } else {
        setError("Rate unavailable");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }, [fromCur.code, toCur.code]);

  useEffect(() => { fetchRate(); }, [fetchRate]);

  const numAmount   = parseFloat(amount) || 0;
  const converted   = rate ? numAmount * rate : 0;
  const rateDisplay = rate
    ? `1 ${fromCur.code} = ${fmt(rate, rate < 1 ? 4 : 2)} ${toCur.code}`
    : "—";

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(val);
  };

  return (
    <div className="conversion">
      <div className="conversion__section">
        <span className="conversion__label">You send</span>

        <div className="conversion__row">
          <span className="conversion__symbol">{fromCur.symbol}</span>
          <input
            className="conversion__amount"
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
            aria-label={`Amount to send in ${fromCur.code}`}
          />

          <div className="conversion__dropdown" ref={fromRef}>
            <button
              type="button"
              className="conversion__cur-btn"
              onClick={() => { setFromOpen((o) => !o); setToOpen(false); }}
              aria-haspopup="listbox"
              aria-expanded={fromOpen}
              aria-label={`Select source currency, currently ${fromCur.name}`}
            >
              <span className="conversion__flag">{fromCur.flag}</span>
              <span className="conversion__cur-code">{fromCur.code}</span>
              <RiArrowDownSLine className={`icon conversion__chevron ${fromOpen ? "open" : ""}`} />
            </button>

            {fromOpen && (
              <ul className="conversion__menu" role="listbox" aria-label="Source currency">
                {SOURCE_CURRENCIES.map((c) => (
                  <li
                    key={c.code}
                    role="option"
                    aria-selected={c.code === fromCur.code}
                    className={`conversion__menu-item ${c.code === fromCur.code ? "active" : ""}`}
                    onClick={() => { setFromCur(c); setFromOpen(false); }}
                  >
                    <span className="conversion__flag">{c.flag}</span>
                    <span className="conversion__menu-code">{c.code}</span>
                    <span className="conversion__menu-name">{c.name}</span>
                    {c.code === fromCur.code && <RiCheckboxCircleLine className="icon conversion__check" />}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="conversion__breakdown">
        <div className="conversion__breakdown-row">
          <span className="conversion__breakdown-icon"><RiExchangeDollarLine className="" /></span>
          <span className="conversion__breakdown-label">You send</span>
          <span className="conversion__breakdown-value free">Free</span>
        </div>

        <div className="conversion__breakdown-row">
          <span className="conversion__breakdown-icon"><RiCheckboxCircleLine className="" /></span>
          <span className="conversion__breakdown-label">Total pay</span>
          <span className="conversion__breakdown-value">
            {numAmount > 0 ? `${fmt(numAmount)} ${fromCur.code}` : "—"}
          </span>
        </div>

        <div className="conversion__breakdown-row">
          <span className="conversion__breakdown-icon">
            {loading
              ? <RiLoader4Line className=" conversion__spin" />
              : <RiArrowLeftRightLine className="" />
            }
          </span>
          <span className="conversion__breakdown-label">Rate</span>
          <span className="conversion__breakdown-value">
            {error ? <span className="err">{error}</span> : rateDisplay}
          </span>
        </div>
      </div>

      <div className="conversion__section">
        <span className="conversion__label">Receiver gets</span>

        <div className="conversion__row">
          <span className="conversion__symbol conversion__symbol--muted">{toCur.symbol}</span>
          <span className="conversion__amount conversion__amount--converted">
            {loading
              ? <RiLoader4Line className="conversion__spin conversion__spin--lg" />
              : (converted > 0 ? fmt(converted, converted > 1000 ? 0 : 2) : "0.00")
            }
          </span>

          <div className="conversion__dropdown" ref={toRef}>
            <button
              type="button"
              className="conversion__cur-btn"
              onClick={() => { setToOpen((o) => !o); setFromOpen(false); }}
              aria-haspopup="listbox"
              aria-expanded={toOpen}
              aria-label={`Select destination currency, currently ${toCur.name}`}
            >
              <span className="conversion__flag">{toCur.flag}</span>
              <span className="conversion__cur-code">{toCur.code}</span>
              <RiArrowDownSLine className={`icon conversion__chevron ${toOpen ? "open" : ""}`} />
            </button>

            {toOpen && (
              <ul className="conversion__menu conversion__menu--right" role="listbox" aria-label="Destination currency">
                {WEST_AFRICAN_CURRENCIES.map((c) => (
                  <li
                    key={c.code}
                    role="option"
                    aria-selected={c.code === toCur.code}
                    className={`conversion__menu-item ${c.code === toCur.code ? "active" : ""}`}
                    onClick={() => { setToCur(c); setToOpen(false); }}
                  >
                    <span>{c.flag}</span>
                    <span className="conversion__menu-code">{c.code}</span>
                    <span className="conversion__menu-name">{c.country}</span>
                    {c.code === toCur.code && <RiCheckboxCircleLine className="icon conversion__check" />}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div className="conversion__footer">
        <p>Transfer internationally within minutes</p>
        {/* {lastFetched && (
          <span className="conversion__updated">
            updated {lastFetched.toLocaleTimeString()}
          </span>
        )} */}
      </div>
    </div>
  );
};

export default Convertor;