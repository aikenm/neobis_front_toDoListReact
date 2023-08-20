import React from 'react';

function AddButton({ onClick }) {
  return (
    <button className="add" onClick={onClick}>
      Add todo
    </button>
  );
}

export default AddButton;
