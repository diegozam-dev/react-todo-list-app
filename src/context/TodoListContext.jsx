import { useState, useEffect, createContext } from 'react';

export const TodoListContext = createContext(null);

export const TodoListContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem('myTasks') === null ||
      localStorage.getItem('myTasks') === '[]'
    )
      return;

    setTasks(JSON.parse(localStorage.getItem('myTasks')));
  }, []);

  const createTask = (name, description) => {
    return {
      id: Date.now(),
      name,
      description,
      isCompleted: false,
    };
  };

  const updateTasks = (tasks) => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));

    setTasks(tasks);
  };

  const saveNewTask = (task) => {
    updateTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    updateTasks(tasks.filter((task) => id !== task.id));
  };

  const checkTask = (id) => {
    const tmpTasks = tasks.map((task) => {
      if (id !== task.id) return task;

      task.isCompleted = !task.isCompleted;

      return task;
    });

    updateTasks(tmpTasks);
  };

  return (
    <TodoListContext.Provider
      value={{
        tasks,
        saveNewTask,
        createTask,
        deleteTask,
        checkTask,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};
