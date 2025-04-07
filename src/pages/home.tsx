import TaskList from "../components/taskList";

export const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <TaskList taskListName="shopping-list" title="Shopping list" />
      <TaskList taskListName="work-tasks" title="Work tasks" />
      <TaskList taskListName="home-tasks" title="Home tasks" />
    </div>
  );
};
