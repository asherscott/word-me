import "./Lists.css";

function Lists() {
  const renderLists = [0, 0, 0, 0, 0, 0, 0, 0, 0].map((ele, idx) => (
    <div key={idx} className="list-item">
      <h5>
        <a target="_blank" href={`../lists/${10 - idx}.txt`}>
          {10 - idx} Letter Words
        </a>
        <span> - 100,000 words</span>
      </h5>
    </div>
  ));

  return (
    <main id="Lists">
      <div className="list-item">
        <h5>
          <a target="_blank" href={`../lists/dictonary.txt`}>
            Master List
          </a>
          <span> - 400,000 total words</span>
        </h5>
      </div>

      {renderLists}
    </main>
  );
}

export default Lists;
