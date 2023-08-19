import React, { useState, useRef, useEffect } from 'react';

function TaskList({ tasks, onDelete, onEdit, onComplete }) {

const [editButtonText, setEditButtonText] = useState('Edit');
const [editButtonCounter, setEditButtonCounter] = useState(0);
  const handleEdit = (index, newText) => {
    onEdit(index, newText);
  };

  const handleEditButtonClick = (index) => {
    if (editButtonCounter === 1) {
      setEditButtonText('✔'); 
      setEditButtonCounter(0); 
    } else {
      setEditButtonText('Edit'); 
      setEditButtonCounter(1);
    }
    
    handleEdit(index, 'newEditedText'); 
  };


  const editableLabelRef = useRef(null);

  useEffect(() => {
    if (editableLabelRef.current) {
      if (tasks.some(task => task.isEditing)) {
        editableLabelRef.current.focus();
        const range = document.createRange();
        range.selectNodeContents(editableLabelRef.current);
        range.collapse(false);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
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
            ref={task.isEditing ? editableLabelRef : null}
            className={`taskText ${task.isEditing ? 'editable' : ''} ${task.completed ? 'completed' : ''}`}
            contentEditable={task.isEditing}
          >
            {task.text}
          </label>
          <button className="edit-button" onClick={() => handleEditButtonClick(index)}>
            {editButtonText}
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
