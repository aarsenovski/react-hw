const Grandchild = ({ grandchild }) => {
  return (
    <div>
      <p>
        {grandchild.name}, Hobby: {grandchild.hobby}
      </p>
    </div>
  );
};

export default Grandchild;
