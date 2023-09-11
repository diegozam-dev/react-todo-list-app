import Header from './components/Header/Header.jsx';
import AddTaskBar from './components/AddTaskBar/AddTaskBar.jsx';
import UncompletedTasksList from './components/TasksLists/UncompletedTasksList.jsx';
import CompletedTasksList from './components/TasksLists/CompletedTasksList.jsx';
import './app.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <AddTaskBar />
      <hr />
      <UncompletedTasksList />
      <hr />
      <CompletedTasksList />
    </div>
  );
};

export default App;
