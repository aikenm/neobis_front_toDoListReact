import React from 'react';

function TaskInput({ taskText, onInputChange }) {
  return (
    <div>
      <input
        type="text"
        className="taskInput"
        placeholder="e.g. get a milk"
        value={taskText}
        onChange={onInputChange}
      />
    </div>
  );
}

export default TaskInput;
