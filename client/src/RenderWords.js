import "./RenderWords.css";

function RenderWords() {
  return (
    <div className="word container wrapper">
      <div className="left">
        <div>
          <span>/\</span>
          <span>\/</span>
        </div>
        <span>#</span>
        <span>Word here</span>
      </div>
      <span>submittion details here</span>
    </div>
  );
}

export default RenderWords;
