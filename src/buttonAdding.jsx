import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buttonAdding.css';
import TextBoxButton from './components/textBoxButton';

const ButtonAdding = (props) => {
  const [components, setComponents] = useState([{ id: 1 }]);
  const [sum, setSum] = useState(0);
  const [error, setError] = useState(false);


  const onDeleteTextField = (id) => {
    const updatedComponents = components.filter((component) => component.id !== id);
    setComponents(updatedComponents);
    updateSum(updatedComponents);
  };

  const onButtonClick = () => {
    const newComponent = { id: components.length + 1 };
    setComponents([...components, newComponent]);
  };

  const updateSum = (updatedComponents) => {
    let newSum = 0;
    let hasError = false;

    updatedComponents.forEach((component) => {
      const componentValue = parseFloat(component.value || 0);
      if (isNaN(componentValue)) {
        hasError = true;
      } else {
        newSum += componentValue;
      }
    });

    setError(hasError);
    setSum(newSum);
  };

  return (
    <div className={'mainContainer'}>
      <div className="textFields">
        {components.map((component) => (
          <TextBoxButton
            key={component.id}
            id={component.id}
            onDelete={onDeleteTextField}
            onUpdate={(value) => {
              component.value = value;
              updateSum(components);
            }}
          />
        ))}
      </div>
      <br />
      {error && <p style={{ color: 'red' }}>Please enter valid numbers in all text fields</p>}
      <div className="sumContainer">
        <p>Sum of Text Fields: {sum}</p>
      </div>
      <br />
      <input className={'inputButton'} type="button" onClick={onButtonClick} value="Add Text Field" />
    </div>
  );
};

export default ButtonAdding;
