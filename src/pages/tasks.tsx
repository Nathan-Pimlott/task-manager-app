/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from "react";
import { Task } from "../types";
import { TaskCompact } from "../components/taskCompact";

interface IProps {
  complete: boolean;
}

export const Tasks = ({ complete }: IProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      const filteredTasks = parsedTasks.filter(
        (task: Task) => task.status === (complete ? "Done" : "To Do")
      );
      setTasks(filteredTasks);
    }
  }, [complete]);

  const taskCount = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  const title = complete ? "Done Tasks" : "To Do Tasks";

  return (
    <div
      className={`taskListOuterContainer ${
        complete ? "doneContainer" : "todoContainer"
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
