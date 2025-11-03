import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.char.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Generate Password"
            readOnly
          />

          <button className="outline-none bg-blue-700 text-white px-3 py-1 hover:bg-orange-600 shrink-0  delay-75 transition duration-300 ease-in-out">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">

        <div className="flex items-center gap-x-1">

        <input
         type="range" 
         min={8}
         max={20}
         value={length}
         cursor="pointer"
          onChange={(e) => setLength(e.target.value)}
          className="accent-orange-500"
         />

          <label>Length: {length}</label>

        </div>



        </div>
      </div>
    </>
  );
}

export default App;
