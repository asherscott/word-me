import "./Words.css";
import RenderWords from "../RenderWords";
import { useState } from "react";

function Words() {
  const [showForm, setShowForm] = useState(false);

  const renderWordList = [0, 0, 0, 0, 0, 0, 0, 0].map((ele, idx) => (
    <RenderWords key={idx} />
  ));

  return (
    <main id="Words">
      <div className="words-title wrapper">
        <div>
          <span># words under review</span>
          <span># words added so far</span>
        </div>

        <span>How does adding words work?</span>
      </div>
      <div className="container">
        {showForm && (
          <form className="word-form wrapper main-wrapper">
            <input placeholder="Enter New Word... "></input>
            <button>Submit</button>
          </form>
        )}

        <button
          onClick={() => setShowForm(!showForm)}
          className="toggle-form wrapper"
        >
          {showForm ? "- Hide Word Form" : "+ Show Word Form"}
        </button>
      </div>
      <div className="wrapper main-wrapper">{renderWordList}</div>
    </main>
  );
}

export default Words;
