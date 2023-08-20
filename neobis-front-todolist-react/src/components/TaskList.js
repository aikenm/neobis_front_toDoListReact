import React, { useRef, useEffect } from 'react';

function TaskList({ tasks, onEdit, onComplete }) {
  const handleEdit = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, isEditing: !task.isEditing, text: newText !== undefined ? newText : task.text }
        : task
    );
    onEdit(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    onEdit(updatedTasks);
  };

  const handleEditButtonClick = (taskId) => {
    handleEdit(taskId);
  };

  const editableLabelRefs = useRef([]);

  useEffect(() => {
    tasks.forEach((task) => {
      if (task.isEditing && editableLabelRefs.current[task.id]) {
        editableLabelRefs.current[task.id].focus();
        const range = document.createRange();
        range.selectNodeContents(editableLabelRefs.current[task.id]);
        range.collapse(false);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  }, [tasks]);

  return (
    <ul className="taskList">
      {tasks.map((task) => (
        <li key={task.id} className={task.category}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onComplete(task.id)}
          />
          <label
            ref={(el) => (editableLabelRefs.current[task.id] = el)}
            className={`taskText ${task.isEditing ? 'editable' : ''} ${
              task.completed ? 'completed' : ''
            }`}
            contentEditable={task.isEditing}
          >
            {task.text}
          </label>
          <button className="edit-button" onClick={() => handleEditButtonClick(task.id)}>
            {task.isEditing ? '✔' : 'Edit'}
          </button>
          <button className="delete-button" onClick={() => handleDelete(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
