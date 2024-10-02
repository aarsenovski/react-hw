import Grandchild from "./Grandchild";

const Child = ({ child }) => {
  return (
    <div>
      <h3>
        {child.name}, Age: {child.age}
      </h3>
      <div>
        {child.grandchildren.map((grandchild, index) => (
          <Grandchild key={index} grandchild={grandchild} />
        ))}
      </div>
    </div>
  );
};

export default Child;
