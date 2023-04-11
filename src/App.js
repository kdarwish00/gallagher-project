import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [income, setIncome] = useState(null);
  const incomeInputRef = useRef();

  const lowerThresholdTaxNi = (lowerThresholdIncome) => {
    const taxAbleAmount = lowerThresholdIncome - 15000;
    const taxDue = taxAbleAmount * 0.2;
    const niDue = taxAbleAmount * 0.12;
    const netPay = lowerThresholdIncome - taxDue - niDue;
    return { netPay, taxAbleAmount, taxDue, niDue };
  };
  const calculateIncome = () => {
    const parsedNumber = parseInt(incomeInputRef.current.value, 10);

    console.log({ parsedNumber });
    if (!parsedNumber) {
      return setIncome({
        netPay: "N/A",
        taxDue: "N/A",
        niDue: "N/A",
        error: "Error",
      });
    }
    if (parsedNumber <= 15000) {
      return setIncome({
        netPay: "£" + parsedNumber.toFixed(2),
        taxDue: "£" + 0,
        niDue: "£" + 0,
        error: null,
      });
    }

    if (parsedNumber > 15000 && parsedNumber < 50000) {
      const { netPay, taxDue, niDue } = lowerThresholdTaxNi(parsedNumber);
      setIncome({
        netPay: "£" + netPay.toFixed(2),
        taxDue: "£" + taxDue.toFixed(2),
        niDue: "£" + niDue.toFixed(2),
        error: null,
      });
    }

    if (parsedNumber > 50000) {
      const higherTaxableIncome = parsedNumber - 50000;
      const {
        netPay: lowerNetPay,
        taxDue: lowerTaxDue,
        niDue: lowerNIDue,
      } = lowerThresholdTaxNi(parsedNumber - higherTaxableIncome);
      const higherTaxDue = higherTaxableIncome * 0.4;
      const higherNiDue = higherTaxableIncome * 0.02;
      const netPay =
        lowerNetPay + (higherTaxableIncome - higherTaxDue - higherNiDue);

      setIncome({
        netPay: "£" + netPay.toFixed(2),
        taxDue: "£" + (lowerTaxDue + higherTaxDue).toFixed(2),
        niDue: "£" + (lowerNIDue + higherNiDue).toFixed(2),
        error: null,
      });
    }
  };
  return (
    <div className="tax-calc">
      <h1>UK Income tax calculator</h1>
      <div className="tax-calc__area">
        <div className="tax-calc__submission">
          <input type="number" placeholder="Income" ref={incomeInputRef} />
          <button onClick={calculateIncome}>Calculate</button>
        </div>
        <div className="tax-calc__results">
          {!income ? null : (
            <>
              <div className="tax-calc__results__net-pay">
                {" "}
                <h2>Net Pay</h2> 
                <h3>{income.netPay}</h3>{" "}
              </div>
              <div className="tax-calc__results__tax-due">
                {" "}
                <h2>Tax Due</h2> 
                <h3>{income.taxDue}</h3>{" "}
              </div>
              <div className="tax-calc__results__ni-due">
                {" "}
                <h2>NI Due </h2>
                <h3>{income.niDue}</h3>{" "}
              </div>
              <div className="tax-calc__results__error">{income.error}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
