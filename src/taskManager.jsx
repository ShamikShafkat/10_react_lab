import React, { useState } from 'react';
import TaskManagerComponent from './components/taskManagerComponent';

const TaskManager = () => {
  const [cardData, setCardData] = useState([
    { id: 1, header: 'Example Header 1', description: 'Lorem ipsum dolor sit amet 1.' },
    { id: 2, header: 'Example Header 2', description: 'Lorem ipsum dolor sit amet 2.' },
  ]);

  const [newCardData, setNewCardData] = useState({ header: '', description: '' });
  const [showNewCardForm, setShowNewCardForm] = useState(false);

  const handleEdit = (id, editedHeader, editedDescription) => {
    setCardData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, header: editedHeader, description: editedDescription } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCardData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAddNew = () => {
    setShowNewCardForm(true);
  };

  const handleSaveNew = () => {
    if (newCardData.header.trim() !== '' && newCardData.description.trim() !== '') {
      const newId = Math.max(...cardData.map((item) => item.id), 0) + 1;
      const newCard = { id: newId, ...newCardData };
      setCardData((prevData) => [...prevData, newCard]);
      setNewCardData({ header: '', description: '' });
      setShowNewCardForm(false);
    } else {
      // Show an error message or handle invalid input
      alert('Please enter both header and description for the new task.');
    }
  };

  const handleCancel = () => {
    setNewCardData({ header: '', description: '' });
    setShowNewCardForm(false);
  };

  return (
    <div>
      {cardData.map((data) => (
        <TaskManagerComponent
          key={data.id}
          id={data.id}
          header={data.header}
          description={data.description}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      {showNewCardForm ? (
        <div className="mt-3">
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter header"
              className="form-control me-2"
              value={newCardData.header}
              onChange={(e) => setNewCardData({ ...newCardData, header: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <textarea
              placeholder="Enter description"
              className="form-control me-2"
              value={newCardData.description}
              onChange={(e) => setNewCardData({ ...newCardData, description: e.target.value })}
            />
          </div>
          <button className="btn btn-primary me-2" onClick={handleSaveNew}>
            Save New
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="btn btn-primary mt-3" onClick={handleAddNew}>
          Add New
        </button>
      )}
    </div>
  );
};

export default TaskManager;
