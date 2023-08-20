import React from 'react';

function TaskInput({ taskText, onInputChange, onKeyDown }) {
  return (
    <div>
      <input
        type="text"
        className="taskInput"
        placeholder="e.g. get a milk"
        value={taskText}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default TaskInput;
