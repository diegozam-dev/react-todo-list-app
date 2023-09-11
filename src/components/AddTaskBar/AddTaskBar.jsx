import { useState, useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext.jsx';
import './addTaskBar.css';

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

    const tmpTask = createTask(
      inputName.trimStart(),
      inputDescription.trimStart()
    );

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
    <form className="add-task-bar__form">
      <div className="form__input">
        <input
          id="name"
          className="input__name"
          type="text"
          value={inputName}
          autoComplete="off"
          onChange={handleChandeInputs}
        />
        <label className="placeHolder">Write something to do...</label>
      </div>
      <div
        className="form__input"
        style={wantDescription ? { display: 'block' } : { display: 'none' }}
      >
        <input
          id="description"
          className="input__description"
          type="text"
          value={inputDescription}
          disabled={!wantDescription}
          autoComplete="off"
          onChange={handleChandeInputs}
        />
        <label className="placeHolder">Add some description....</label>
      </div>
      <div className="form__btns">
        <button
          className="btn__save"
          disabled={inputName === ''}
          onClick={handleSave}
          onKeyUp={handleSave}
        >
          Save
        </button>
        <button className="btn__description" onClick={handleAddDescription}>
          {wantDescription === true ? 'Remove description' : 'Add description'}
        </button>
      </div>
    </form>
  );
};

export default AddTaskBar;
