function TaskItem({ name, priority }) {
  return (
    <li className={`${priority.toLowerCase()}`}>
      <p>Task: {name}</p>
      <p>Priority: {priority}</p>
    </li>
  );
}

export default TaskItem;
