import { Task } from "../types";

interface IProps {
  task: Task;
  setTaskStatus: (taskId: string, newStatus: string) => void;
  removeTask: (taskId: string) => void;
}

export function TaskExpanded({ task, setTaskStatus, removeTask }: IProps) {
  return (
    <li className="expandedTaskContainer">
      <h2 className="taskTitle">{task.title}</h2>
      <p className="taskDescription">Description: {task.description}</p>
      <p className="taskStatus">Status: {task.status}</p>

      <label htmlFor="updateStatus">Update status</label>
      <select
        id="updateStatus"
        name="updateStatus"
        onChange={(e: any) => setTaskStatus(task.id, e.target.value)}
        defaultValue={task.status}
      >
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
      </select>

      <button
        className="outlineButton marginTop"
        onClick={() => removeTask(task.id)}
      >
        Remove
      </button>
    </li>
  );
}
