const List = ({ data }) => {
  return (
    <ul className="list-disc list-inside">
      {data.map((item, index) => (
        <li key={index} className="text-lg">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
