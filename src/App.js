import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputStr, setInputStr] = useState("");
  // const [wordLength, setWordLength] = useState("");

  function getComboNum(num, length) {
    if (num < 3) return num;

    let i = num;
    let fac = 1;
    while (i > num - (length || num)) {
      fac *= i;
      i--;
    }

    return fac;
  }

  function permutator(str) {
    let result = [];

    function permute(arr, m = []) {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = [...arr];
          const next = curr.splice(i, 1);

          permute([...curr], m.concat(next));
        }
      }
    }

    permute(str.split(""));

    return result;
  }

  function scramble(string, wordLength) {
    const comboNum = getComboNum(string.length, wordLength);

    console.log(`Generating combos, ${comboNum} possible combinations...`);

    setList(permutator(string));
  }

  function handleSubmit(e) {
    e.preventDefault();

    scramble(inputStr);
  }

  const renderList = list.map((word, idx) => <li key={idx}>{word}</li>);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputStr(e.target.value)}
          value={inputStr}
          type="text"
          placeholder="Enter String"
          required
        ></input>

        {/* <input
          onChange={(e) => setWordLength(e.target.value)}
          value={wordLength}
          type="number"
          placeholder="optional"
        ></input> */}
        <button type="submit">enter</button>
      </form>

      <p>
        {inputStr
          ? getComboNum(inputStr.length) + " Possible Combinations"
          : "Hey"}
      </p>

      <ul>{renderList}</ul>
    </div>
  );
}

export default App;
