import React, { useState, useRef } from 'react';

function EditableName() {
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const inputRef = useRef(null);

  const handleMouseDown = (event) => {
    if (isPlaceholder) {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    if (isPlaceholder) {
      setIsPlaceholder(false);
      inputRef.current.textContent = '';
    }
  };

  const handleBlur = () => {
    if (inputRef.current.textContent.trim() === '') {
      setIsPlaceholder(true);
      inputRef.current.textContent = 'Your name';
    }
  };

  return (
    <span
      className={`name ${isPlaceholder ? 'placeholder' : ''}`}
      contentEditable="true"
      id="editableName"
      ref={inputRef}
      onMouseDown={handleMouseDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {isPlaceholder ? 'Your name' : ''}
    </span>
  );
}

export default EditableName;
