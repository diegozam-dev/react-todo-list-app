import { useState, useEffect, useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext.jsx';
import Task from '../Task/Task.jsx';
import './tasksList.css';

const UncompletedTasks = () => {
  const { tasks } = useContext(TodoListContext);

  const [uncompletedTasks, setUncompletedTasks] = useState([]);

  useEffect(() => {
    const tmpTasks = tasks.filter((task) => {
      if (task.isCompleted === true) return;

      return task;
    });

    setUncompletedTasks(tmpTasks);
  }, [tasks]);

  return (
    <div id="uncompleted-tasks-list" className="tasks-list__container">
      <div className="tasks-list__title">
        <h2>Tasks</h2>
      </div>
      <div className="tasks-list__tasks">
        {uncompletedTasks.length === 0 ? (
          <p>No pending tasks...</p>
        ) : (
          uncompletedTasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default UncompletedTasks;
