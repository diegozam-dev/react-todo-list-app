import { useState, useEffect, useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext.jsx';
import Task from '../Task/Task.jsx';

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
    <div className="uncompleted-tasks">
      <div className="uncompleted-tasks__title">
        <p>Tasks</p>
      </div>
      <div className="uncompleted-tasks__tasks">
        {uncompletedTasks.length === 0 ? (
          <h1>No hay tareas</h1>
        ) : (
          uncompletedTasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default UncompletedTasks;
