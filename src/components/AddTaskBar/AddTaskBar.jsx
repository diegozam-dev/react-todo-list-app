import { useState, useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext.jsx';

const AddTaskBar = () => {
  const { saveNewTask, createTask } = useContext(TodoListContext);

  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [wantDescription, setWantDescription] = useState(false);

  const handleChandeInputs = (e) => {
    return e.target.className === 'input__name'
      ? setInputName(e.target.value)
      : setInputDescription(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (inputName === '' && inputDescription === '')
      return alert('No ha agregado ninguna tarea...');

    const tmpTask = createTask(inputName, inputDescription);

    saveNewTask(tmpTask);

    setInputName('');
    setInputDescription('');
    setWantDescription(false);
  };

  const handleAddDescription = (e) => {
    e.preventDefault();

    setWantDescription(!wantDescription);
    setInputDescription('');
  };

  return (
    <form className="add-task-bar">
      <div className="add-task-bar__inputs">
        <input
          className="input__name"
          type="text"
          placeholder="Write something to do..."
          value={inputName}
          onChange={handleChandeInputs}
        />
        <input
          className="input__description"
          type="text"
          placeholder="Add some description..."
          value={inputDescription}
          disabled={!wantDescription}
          onChange={handleChandeInputs}
        />
      </div>
      <div className="add-task-bar__btns">
        <button
          className="btn-save"
          disabled={inputName === ''}
          onClick={handleSave}
        >
          Save
        </button>
        <button className="btn-description" onClick={handleAddDescription}>
          {wantDescription === true ? 'Remove description' : 'Add description'}
        </button>
      </div>
    </form>
  );
};

export default AddTaskBar;
