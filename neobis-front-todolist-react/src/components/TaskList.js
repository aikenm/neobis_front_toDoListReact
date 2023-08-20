import React, { useState, useRef, useEffect } from 'react';

function TaskList({ tasks, onDelete, onEdit, onComplete }) {
  const handleEdit = (index, newText) => {
    onEdit(index, newText);
  };

  const handleEditButtonClick = (index) => {
    handleEdit(index, 'newEditedText');
  };

  const editableLabelRefs = useRef([]);

  useEffect(() => {
    tasks.forEach((task, index) => {
      if (task.isEditing && editableLabelRefs.current[index]) {
        editableLabelRefs.current[index].focus();
        const range = document.createRange();
        range.selectNodeContents(editableLabelRefs.current[index]);
        range.collapse(false);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  }, [tasks]);

  return (
    <ul className="taskList">
      {tasks.map((task, index) => (
        <li key={index} className={task.category}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onComplete(index)}
          />
          <label
            ref={(el) => (editableLabelRefs.current[index] = el)}
            className={`taskText ${task.isEditing ? 'editable' : ''} ${
              task.completed ? 'completed' : ''
            }`}
            contentEditable={task.isEditing}
          >
            {task.text}
          </label>
          <button className="edit-button" onClick={() => handleEditButtonClick(index)}>
            {task.isEditing ? '✔' : 'Edit'}
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
