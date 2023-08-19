import React, { useState } from 'react';
import '../styles/style.css';
import EditableName from './EditableName';
import CategoryCheckbox from './CategoryCheckbox';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import AddButton from './AddButton';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('business');
  const [taskText, setTaskText] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleAddTask = (newTaskText) => {
    if (taskText.trim() !== '') {
    const newTask = {
      text: newTaskText,
      category: selectedCategory,
      checked: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText(''); 
  }
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isEditing = !updatedTasks[index].isEditing;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="name">
        What's up, <EditableName />
      </h1>
      <h4>CREATE A TODO</h4>
      <h5>What's on your todo list?</h5>
      <TaskInput
        taskText={taskText}
        onInputChange={(event) => setTaskText(event.target.value)} 
      />
      <h5>Pick a category</h5>
      <CategoryCheckbox 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <AddButton 
        onClick={() => handleAddTask(taskText)} 
      />
      <h4>TODO LIST</h4>
      <TaskList 
        tasks={tasks} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
        onComplete={handleComplete} 
      />
    </div>
  );
}

export default App;
