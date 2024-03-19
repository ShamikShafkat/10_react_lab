import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskManagerComponent = ({ id, header, description, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeader, setEditedHeader] = useState(header);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    onEdit(id, editedHeader, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="card mb-3 ">
      <div className="d-flex flex-row">
        <div className="card-body d-flex flex-column">
          {isEditing ? (
            <div>
              <input
                type="text"
                className="form-control mb-2"
                value={editedHeader}
                onChange={(e) => setEditedHeader(e.target.value)}
              />
              <textarea
                className="form-control mb-2"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              ></textarea>
            </div>
          ) : (
            <div>
              <h5 className="card-title">{header}</h5>
              <p className="card-text">{description}</p>
            </div>
          )}
        </div>
        <div className="mt-auto d-flex flex-row">
          {isEditing ? (
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
          <button className="btn btn-danger" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerComponent;
