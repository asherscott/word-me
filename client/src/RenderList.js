function RenderList({ words }) {
  const list = words.join(", ");

  return <p>{list}</p>;
}

export default RenderList;
