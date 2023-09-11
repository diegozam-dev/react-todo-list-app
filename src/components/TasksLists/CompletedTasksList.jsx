import { useState, useEffect, useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext.jsx';
import Task from '../Task/Task.jsx';
import './tasksList.css';

const CompletedTasks = () => {
  const { tasks } = useContext(TodoListContext);

  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const tmpTasks = tasks.filter((task) => {
      if (task.isCompleted === false) return;

      return task;
    });

    setCompletedTasks(tmpTasks);
  }, [tasks]);

  return (
    <>
      {tasks.length === 0 ? (
        <br />
      ) : (
        <div id="completed-tasks-list" className="tasks-list__container">
          <div className="tasks-list__title">
            <h2>
              Completed{' '}
              <span>
                ({completedTasks.length} / {tasks.length})
              </span>
            </h2>
          </div>
          <div className="tasks-list__tasks">
            {completedTasks.length === 0 ? (
              <p>You have not completed any tasks yet...</p>
            ) : (
              completedTasks.map((task) => <Task key={task.id} task={task} />)
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CompletedTasks;
