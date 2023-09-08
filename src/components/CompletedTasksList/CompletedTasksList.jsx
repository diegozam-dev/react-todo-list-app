import { useState, useEffect, useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext.jsx';
import Task from '../Task/Task.jsx';

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
        <div className="completed-tasks">
          <div className="completed-tasks__title">
            <p>Completed</p>
          </div>
          <div className="completed-tasks__tasks">
            {completedTasks.length === 0 ? (
              <h1>Aún no completas ninguna tarea..</h1>
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
