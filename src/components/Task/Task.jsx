import { useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext';
import { VscChromeClose } from 'react-icons/vsc';
import './task.css';

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
        className="task__check"
        checked={task.isCompleted}
        onChange={handleChange}
      />
      <div className="task__data">
        <p className="task__name">{task.name}</p>
        {task.description !== '' ? (
          <p className="task__description">{task.description}</p>
        ) : null}
      </div>
      <button className="task__btn-delete" onClick={handleDelete}>
        <VscChromeClose color="#eb455f" size={'1.5rem'} strokeWidth={1} />
      </button>
    </div>
  );
};

export default Task;
