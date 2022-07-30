function RenderList({ words }) {
  //   const list = words.map((word, idx) => <li key={idx}>{word}</li>);

  //   return <ul>{list}</ul>;

  const list = words.join(", ");

  return <p>{list}</p>;
}

export default RenderList;
