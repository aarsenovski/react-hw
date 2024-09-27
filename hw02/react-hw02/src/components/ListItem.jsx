import TaskItem from "./Task";

function ListItem({ taskItems }) {
  return (
    <ul>
      {taskItems.map((item, index) => {
        return (
          <TaskItem key={index} name={item.name} priority={item.priority} />
        );
      })}
    </ul>
  );
}

export default ListItem;
