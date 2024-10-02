import Child from "./Child";

const Parent = ({ family }) => {
  return (
    <div>
      <h2>{family.name}</h2>
      {family.children.map((child, index) => (
        <Child key={index} child={child} />
      ))}
    </div>
  );
};

export default Parent;
