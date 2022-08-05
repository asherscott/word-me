import { useState } from "react";
import RenderList from "../RenderList";
import "./Home.css";

function Home({ list, setList, dictonary }) {
  const [letters, setLetters] = useState("");

  const renderLists = list.map((words, idx) => {
    if (words.length > 0) {
      return (
        <div key={idx} className="list-item">
          <h5>{words[0].length} Letter Words</h5>
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
    <main id="Home">
      <section id="Input" className="home-section">
        <div>
          <label>Enter up to 10 letters</label>
          <form onSubmit={handleSubmit} className="letter-form">
            <input
              onChange={(e) => setLetters(e.target.value.toLowerCase())}
              value={letters}
              className="home-input"
              maxLength="10"
              type="text"
              pattern="[a-zA-Z]+"
              title="Only letters"
              placeholder="Enter Letters"
              required
            />
            <button type="submit" className="home-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </form>
          <div className="small-text">
            <p>
              {comboNum(letters.length).toLocaleString()} Possible Combinations
            </p>
          </div>
        </div>
      </section>

      {list[0] && (
        <section id="Output" className="home-section">
          <div className="wrapper main-wrapper">
            <h4 className="result-num">
              Generated {resultNum.toLocaleString()} results.
            </h4>

            {renderLists}
          </div>
        </section>
      )}
    </main>
  );
}

export default Home;
