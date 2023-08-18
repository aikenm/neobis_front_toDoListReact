import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        className="taskInput"
        placeholder="e.g. get a milk"
        value={taskText}
        onChange={handleInputChange}
      />
      <button className="add" onClick={handleAddButtonClick}>
        Add todo
      </button>
    </div>
  );
}

export default TaskInput;
