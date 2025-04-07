/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useMemo } from "react";
import { Task } from "../types";
import {
  buildTask,
  filterOutTask,
  getTasks,
  updateTaskStatus,
} from "../utils/task";
import { TaskExpanded } from "./taskExpanded";
import { AddTaskForm } from "./addTaskForm";

interface TaskListProps {
  taskListName: any;
  title: any;
}

const TaskList: React.FC<TaskListProps> = ({ taskListName, title }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = getTasks();
    const filteredTasks = storedTasks.filter(
      (task) => task.taskListName === taskListName
    );
    setTasks(filteredTasks);
  }, [taskListName]);

  function addTask(title: string, description: string) {
    const task = buildTask(title, description, taskListName);
    if (!task) return;

    const allTasks = getTasks();

    localStorage.setItem("tasks", JSON.stringify([...allTasks, task]));
    setTasks([...tasks, task]);
  }

  function removeTask(id: string) {
    const allTasks: any[] = getTasks();
    localStorage.setItem("tasks", JSON.stringify(filterOutTask(allTasks, id)));
    setTasks(filterOutTask(tasks, id));
  }

  const setTaskStatus = (taskId: any, newStatus: any) => {
    const allTasks = getTasks();
    localStorage.setItem(
      "tasks",
      JSON.stringify(updateTaskStatus(allTasks, taskId, newStatus))
    );
    setTasks(updateTaskStatus(tasks, taskId, newStatus));
  };

  const taskCount = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <div className="addTaskOuterContainer">
      <div className="addTaskTitleContainer">
        <h2>{title}</h2>
        <p>Total tasks: {taskCount}</p>
      </div>

      <AddTaskForm addTask={addTask} />

      <ul className="addTaskInnerContainer">
        {tasks.map((task: Task, idx) => (
          <TaskExpanded
            task={task}
            setTaskStatus={setTaskStatus}
            removeTask={removeTask}
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
