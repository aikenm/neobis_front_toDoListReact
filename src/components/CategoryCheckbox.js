import React from 'react';

function CategoryCheckbox({ selectedCategory, onCategoryChange }) {
  const handleCheckboxClick = (category) => {
    if (selectedCategory !== category) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="radio-container">
      <div
        className={`businessBtn ${selectedCategory === 'business' ? 'selected' : ''}`}
        onClick={() => handleCheckboxClick('business')}
      >
        <input
          type="checkbox"
          className="businessRadio"
          id="businessRadio"
          checked={selectedCategory === 'business'}
          disabled
        />
        <label htmlFor="businessRadio">Business</label>
      </div>
      <div
        className={`personalBtn ${selectedCategory === 'personal' ? 'selected' : ''}`}
        onClick={() => handleCheckboxClick('personal')}
      >
        <input
          type="checkbox"
          className="personalRadio"
          id="personalRadio"
          checked={selectedCategory === 'personal'}
          disabled
        />
        <label htmlFor="personalRadio">Personal</label>
      </div>
    </div>
  );
}

export default CategoryCheckbox;
