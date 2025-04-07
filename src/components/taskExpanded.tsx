import { Task } from "../types";

interface IProps {
  task: Task;
  setTaskStatus: (taskId: string, newStatus: string) => void;
  removeTask: (taskId: string) => void;
}

export function TaskExpanded({ task, setTaskStatus, removeTask }: IProps) {
  return (
    <li
      key={task.id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#f9f9f9",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "5px",
        border: "1px solid #eee",
      }}
    >
      <h2
        style={{
          fontSize: "1.1em",
          fontWeight: "bold",
          marginBottom: "5px",
          color: "#555",
        }}
      >
        {task.title}
      </h2>
      <p style={{ fontSize: "0.9em", color: "#555" }}>
        Description: {task.description}
      </p>
      <p style={{ fontSize: "0.9em", color: "#555" }}>Status: {task.status}</p>
      <select
        onChange={(e: any) => setTaskStatus(task.id, e.target.value)}
        defaultValue={task.status}
        style={{
          marginTop: "10px",
          padding: "5px",
          borderRadius: "3px",
          border: "1px solid #ccc",
        }}
      >
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
      </select>
      <button className="outlineButton" onClick={() => removeTask(task.id)}>
        Remove
      </button>
    </li>
  );
}
