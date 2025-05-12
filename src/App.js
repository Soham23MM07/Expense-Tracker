import { useState } from "react";
import styles from "./App.module.css";
import { Result } from "./pages/Result";
import { Tracker } from "./pages/Tracker";

function App() {
  const [name, setName] = useState("");
  const [amt, setAmt] = useState();
  const [value, setValue] = useState(0);
  const [expense, setExpense] = useState(
    JSON.parse(localStorage.getItem("Expenses")) || []
  );

  return (
    <div className={styles.App}>
      <Tracker
        amt={amt}
        expense={expense}
        setExpense={setExpense}
        setAmt={setAmt}
        name={name}
        setName={setName}
        value={value}
        setValue={setValue}
      />
      <Result
        amt={amt}
        expense={expense}
        setExpense={setExpense}
        setAmt={setAmt}
        name={name}
        setName={setName}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
