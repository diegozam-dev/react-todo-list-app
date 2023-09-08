import AddTaskBar from './components/AddTaskBar/AddTaskBar.jsx';
import UncompletedTasksList from './components/UncompletedTasksList/UncompletedTasksList.jsx';
import CompletedTasksList from './components/CompletedTasksList/CompletedTasksList.jsx';

const App = () => {
  return (
    <div className="app-container">
      <AddTaskBar />
      <UncompletedTasksList />
      <CompletedTasksList />
    </div>
  );
};

export default App;
