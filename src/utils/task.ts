import { Task } from "../types";
import { generateId } from "./common";

export function getTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];
}

export function buildTask(
  title: string,
  description: string,
  taskListName: string
) {
  try {
    if (!title || !description) {
      return;
    }

    const newTask: Task = {
      id: generateId(),
      title,
      description,
      status: "To Do",
      taskListName,
    };

    return newTask;
  } catch (error) {
    // Do something here.
  }
}

export function filterOutTask(taskList: Task[], id: string): Task[] {
  return taskList.filter((task) => task.id !== id);
}

export function updateTaskStatus(
  taskList: Task[],
  taskId: string,
  newStatus: string
): Task[] {
  return taskList.map((task) => {
    if (task.id === taskId) {
      return { ...task, status: newStatus };
    }
    return task;
  });
}
