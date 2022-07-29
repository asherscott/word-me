import "./App.css";
import { useState } from "react";
import dictonary from "./dictonary.json";

function App() {
  const [list, setList] = useState([]);
  const [inString, setInString] = useState("");
  const [wordLength, setWordLength] = useState("");

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

  function permutator(n, str) {
    let result = [];

    function permute(arr, m = []) {
      if (arr.length === str.length - n) {
        if (dictonary[m.join("")]) {
          result.push(m);
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = [...arr];
          const next = curr.splice(i, 1);

          permute([...curr], m.concat(next));
        }
      }
    }

    permute(str);

    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();

    setList(permutator(wordLength || inString.length, inString.split("")));
  }

  const renderList = list.map((word, idx) => <li key={idx}>{word}</li>);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInString(e.target.value)}
          value={inString}
          type="text"
          placeholder="Enter String"
          required
        ></input>

        <input
          onChange={(e) => setWordLength(parseInt(e.target.value))}
          value={wordLength}
          type="number"
          placeholder="optional"
        ></input>
        <button type="submit">enter</button>
      </form>

      <p>
        {inString
          ? getComboNum(inString.length) + " Possible Combinations"
          : "Hey"}
      </p>

      {list.length > 0 && <p>Generated {list.length} results.</p>}

      <ul>{renderList}</ul>
    </div>
  );
}

export default App;
