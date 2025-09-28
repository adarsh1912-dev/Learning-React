import styles from "./Counter.module.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles["counter-container"]}>
      <p id="para">You have clicked {count} times</p>
      <button id="btn" onClick={handleCount}>
        Click me
      </button>
    </div>
  );
};

export default Counter;

