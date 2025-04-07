import { useState, useEffect, useMemo } from "react";
import { Task, TaskType } from "../types";
import { TaskCompact } from "../components/taskCompact";

interface IProps {
  variant: TaskType;
}

export const Tasks = ({ variant }: IProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      const filteredTasks = parsedTasks.filter(
        (task: Task) => task.status === (variant === "done" ? "Done" : "To Do")
      );
      setTasks(filteredTasks);
    }
  }, [variant]);

  const taskCount = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  const title = variant === "done" ? "Done Tasks" : "To Do Tasks";

  return (
    <div
      className={`taskListOuterContainer ${
        variant === "done" ? "doneContainer" : "todoContainer"
      }`}
    >
      <div className="taskListHeaderContainer">
        <h2>{title}</h2>
        <p>Total tasks: {taskCount}</p>
      </div>
      <ul className="taskListInnerContainer">
        {tasks.map((task: Task, idx: number) => (
          <TaskCompact task={task} key={idx} />
        ))}
      </ul>
    </div>
  );
};
