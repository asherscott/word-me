import { useState } from "react";
import RenderList from "../RenderList";
import "../Home.css";

function Home({ list, setList, dictonary }) {
  const [letters, setLetters] = useState("");

  const renderLists = list.map((words, idx) => {
    if (words.length > 0) {
      return (
        <div key={idx}>
          <p>{words[0].length} Letter Words</p>
          <RenderList words={words} />
        </div>
      );
    }
  });

  const resultNum = list.reduce(
    (wordSum, currList) => currList.length + wordSum,
    0
  );

  const comboNum = (num) => {
    if (num < 3) return num;

    let fac = 1;
    while (num > 0) {
      fac *= num;
      num--;
    }

    return fac;
  };

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

  function createLists() {
    let newList = [];
    let wordLength = letters.length;

    while (wordLength > 1) {
      const defaultList = permutator(wordLength, letters.split(""));
      const uniqueList = [...new Set(defaultList)];

      newList = [...newList, uniqueList];
      wordLength--;
    }

    return newList;
  }

  function handleSubmit(e) {
    e.preventDefault();

    setList(createLists);
  }
  return (
    <div id="Home">
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
        />
        <button type="submit">enter</button>
      </form>

      <p>{comboNum(letters.length)} Possible Combinations</p>
      <p>Generating Words...</p>

      <p>Generated {resultNum} results.</p>

      <div>{renderLists}</div>
    </div>
  );
}

export default Home;
