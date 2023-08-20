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
        id: Date.now(), 
        text: newTaskText,
        category: selectedCategory,
        checked: false,
        isEditing: false,
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask(taskText);
    }
  };

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
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
        onKeyDown={handleKeyPress}
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
        onDelete={(updatedTasks) => setTasks(updatedTasks)} 
        onEdit={(updatedTasks) => setTasks(updatedTasks)} 
        onComplete={handleComplete}
      />
    </div>
  );
}

export default App;
