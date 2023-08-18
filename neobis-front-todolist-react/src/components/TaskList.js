import React from 'react';

function TaskList({ tasks, onDelete, onEdit, onComplete }) {
  return (
    <ul className="taskList">
      {tasks.map((task, index) => (
        <li key={index} className={task.category}>
          <input
            type="checkbox"
            className={`${task.category}-border`}
            checked={task.checked}
            onChange={() => onComplete(index)}
          />
          <label className="taskText">{task.text}</label>
          <button className="edit-button" onClick={() => onEdit(index)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => onDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
