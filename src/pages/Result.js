import React, { useEffect } from "react";
import styles from "./result.module.css";

export const Result = ({
  amt,
  name,
  setAmt,
  setName,
  expense,
  setExpense,
  value,
  setValue,
}) => {
  useEffect(() => {
    const totalValue = expense.reduce(
      (acc, element) => Number(element.amount) + acc,
      0
    );
    setValue(totalValue);
  }, [expense, setValue]);

  const handleDelete = (id) => {
    setExpense(expense.filter((element) => element.id !== id));
    console.log(expense);
  };
  return (
    <main className={styles.resultContainer}>
      {expense.map((element) => (
        <div key={element.id} className={styles.expenseItem}>
          {element.name}: ${element.amount}
          <button onClick={() => handleDelete(element.id, element.amount)}>
            Delete
          </button>
        </div>
      ))}

      <div className={styles.total}>Total: ${value}</div>
    </main>
  );
};
