import { useState } from "react";

interface IProps {
  addTask: (title: string, description: string) => void;
}

export function AddTaskForm({ addTask }: IProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="addTaskFormContainer">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="outlineButton"
        onClick={() => addTask(title, description)}
      >
        Add Task
      </button>
    </div>
  );
}
