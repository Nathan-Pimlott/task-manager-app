export interface Task {
  id: any;
  title: any;
  description: any;
  status: any;
  taskListName: any;
}

export interface ActionProps {
  actionType?: "button" | "link";
  href?: string;
  onClick?: () => void;
  color?: string;
  children: React.ReactNode;
}

export type TaskType = "todo" | "done";
