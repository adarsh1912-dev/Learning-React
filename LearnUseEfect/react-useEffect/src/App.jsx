import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //first -> side-effect logic
  //second -> clean-up function
  // third -> comma separated dependencies list;
  //
  // variation 1: runs on every render
  // useEffect(() => {
  //   alert("runs on every rerender");
  // });
  // variation 2: run only once when the dom load
  // useEffect(() => {
  //  alert("I will run on only 1st");
  // }, [])

  //variation 3: run every time when a particluar state changes

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    alert("you added +1");
  }, [count]);

  return (
    <>
      <div>
        <button onClick={handleClick}>Click me</button>
        <h1>Count : {count}</h1>
      </div>
    </>
  );
}

export default App;
