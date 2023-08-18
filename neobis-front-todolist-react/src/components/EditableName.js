import React from 'react';

function EditableName() {
  return (
    <span className="name" contentEditable="true" id="editableName">
      Your name
    </span>
  );
}

export default EditableName;
