import React, { useEffect } from "react";
import toast from "react-hot-toast";
import styles from "./tracker.module.css";

export const Tracker = ({
  amt,
  name,
  setAmt,
  setName,
  expense,
  setExpense,
  value,
  setValue,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !amt) {
      toast.error("Please Enter all the Fields");
      return;
    }
    const newExpense = {
      id: new Date(),
      name: name,
      amount: Number(amt),
    };
    setExpense([...expense, newExpense]);
    setValue(value + Number(amt));
    console.log(expense);
    setAmt("");
    setName("");
  };

  useEffect(() => {
    localStorage.setItem("Expenses", JSON.stringify(expense));
  }, [expense]);

  return (
    <main>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add Expense
        </button>
      </form>
    </main>
  );
};
