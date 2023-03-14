import React, { useState } from "react";
function Tracker() {
  const [num, setNum] = useState("");
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);

  const trans = {
    date: null,
    balance: null,
    fun: null,
  };

  const add = (num) => {
    if (num !== "") {
      setTotal(total + num);
      const d = new Date().toISOString();
      trans.date = d;
      trans.balance = num;
      trans.fun = "Add";
      setHistory([...history, trans]);
      setNum("");
    }
  };

  const del = (num) => {
    if (num !== "") {
      setTotal(total - num);
      const d = new Date().toISOString();
      trans.date = d;
      trans.balance = num;
      trans.fun = "Remove";
      setHistory([...history, trans]);
      setNum("");
    }
  };

  return (
    <div className="expense">
      <h2>Expense Tracker - Basic</h2>
      <div className="basic">
        <b>
        <label>Balance: </label>
        {total}
        </b>
        <br />
        <input
          type="number"
          value={num}
          onChange={(val) => setNum(val.target.valueAsNumber)}
        />
        <br />
        <button onClick={() => add(num)}>Add</button>
        <button onClick={() => del(num)}>Remove</button>
      </div>
      <br />
      <div className="transactions">
        <b>Transactions:</b>
        <br />
        <br />
        {history.map((val) => (
          <div>
            {val.date} - {val.balance} - {val.fun}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracker;
