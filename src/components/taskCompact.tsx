import { Task } from "../types";

interface IProps {
  task: Task;
}

export const TaskCompact = ({ task }: IProps) => {
  return (
    <li className="taskContainer">
      <h3 className="taskTitle">{task.title}</h3>
      <p className="taskDescription">{task.description}</p>
    </li>
  );
};
