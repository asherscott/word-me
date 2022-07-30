import "./App.css";
import { useState } from "react";
import dictonary from "./dictonary.json";

function App() {
  const [list, setList] = useState([]);
  const [letters, setLetters] = useState("");
  const [wordLength, setWordLength] = useState("");

  const renderList = list.map((word, idx) => <li key={idx}>{word}</li>);

  function getComboNum(num, length) {
    if (num < 3) return num;

    let current = num;
    let fac = 1;
    while (current > num - (length || num)) {
      fac *= current;
      current--;
    }

    return fac;
  }

  function permutator(n, str) {
    let result = [];

    function permute(arr, m = []) {
      if (arr.length === str.length - n) {
        if (dictonary[m.join("")]) {
          result.push(m.join(""));
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

    const newList = permutator(wordLength || letters.length, letters.split(""));
    const uniqueList = [...new Set(newList)];

    setList(uniqueList);
  }

  return (
    <div className="App">
      <p>Enter up to 10 letters</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setLetters(e.target.value.toLowerCase())}
          value={letters}
          maxLength="10"
          type="text"
          pattern="[a-zA-Z]+"
          title="Only letters"
          placeholder="Enter String"
          required
        ></input>

        <input
          onChange={(e) => setWordLength(parseInt(e.target.value))}
          value={wordLength}
          min="1"
          max="10"
          type="number"
          placeholder="optional"
        ></input>
        <button type="submit">enter</button>
      </form>

      <p>
        {letters
          ? getComboNum(letters.length) + " Possible Combinations"
          : "Hey"}
      </p>

      {list.length > 0 && <p>Generated {list.length} results.</p>}

      <ul>{renderList}</ul>
    </div>
  );
}

export default App;
