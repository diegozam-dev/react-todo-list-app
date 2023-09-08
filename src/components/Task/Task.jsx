import { useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext';

const Task = ({ task }) => {
  const { deleteTask, checkTask } = useContext(TodoListContext);

  const handleDelete = (e) => {
    const taskId = e.target.closest('.task').id;

    deleteTask(Number(taskId));
  };

  const handleChange = (e) => {
    const taskId = e.target.closest('.task').id;

    checkTask(Number(taskId));
  };

  return (
    <div id={task.id} className="task">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleChange}
      />
      <div className="task__data">
        <p className="task__name">{task.name}</p>
        <p className="task__description">{task.description}</p>
      </div>
      <button className="btn-delete-task" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default Task;
