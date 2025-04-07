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

interface TaskListProps {
  taskListName: any;
  title: any;
}

const TaskList: React.FC<TaskListProps> = ({ taskListName, title }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [titleInput, setTitleInput] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const storedTasks = getTasks();
    const filteredTasks = storedTasks.filter(
      (task) => task.taskListName === taskListName
    );
    setTasks(filteredTasks);
  }, [taskListName]);

  useEffect(() => {
    setTitleInput("");
    setDescription("");
  }, [tasks, taskListName]);

  function addTask() {
    const task = buildTask(titleInput, description, taskListName);
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

  const handleChange = (e: any, setter: any) => {
    setter(e.target.value);
  };

  return (
    <div className="addTaskOuterContainer">
      <div className="addTaskTitleContainer">
        <h2>{title}</h2>
        <p>Total tasks: {taskCount}</p>
      </div>

      <div className="addTaskFormContainer">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={titleInput}
          onChange={(e) => handleChange(e, setTitleInput)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => handleChange(e, setDescription)}
        />

        <button className="outlineButton" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
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
