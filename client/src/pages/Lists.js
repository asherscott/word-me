import "./Lists.css";

function Lists({ dictonary }) {
  const renderLists = [0, 0, 0, 0, 0, 0, 0, 0, 0].map((ele, idx) => (
    <div key={idx} className="list-item">
      <h5>
        <a target="_blank" href={`../lists/${10 - idx}.txt`}>
          {10 - idx} Letter Words
        </a>
      </h5>
      <p># of words here</p>
      <div className="list-preview">
        <p>Lists the first few words from each list here</p>
        <p>...</p>
      </div>
    </div>
  ));
  const masterlist = Object.keys(dictonary);

  return (
    <main id="Lists">
      <div className="wrapper main-wrapper">
        <div className="list-item">
          <h5>
            <a target="_blank" href={`../lists/dictonary.txt`}>
              Master List
            </a>
          </h5>
          <p>{(masterlist.length + 1).toLocaleString()} words</p>
          <div className="list-preview">
            <p>{masterlist.slice(0, 30).join(", ")}</p>
            <p>...</p>
          </div>
        </div>

        {renderLists}
      </div>
    </main>
  );
}

export default Lists;
