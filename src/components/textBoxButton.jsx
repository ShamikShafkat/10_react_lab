import React, { useState } from 'react';

const TextBoxButton = (props) => {
  const [textValue, setTextValue] = useState('');

  const onButtonClick = () => {
    props.onDelete(props.id);
  };

  const onUpdate = (value) => {
    setTextValue(value);
    props.onUpdate(value);
  };

  return (
    <div className={'inputContainer'}>
      <input
        value={textValue}
        placeholder="Enter a number here"
        onChange={(ev) => onUpdate(ev.target.value)}
        className={'inputBox'}
      />
      <input className={'inputButton'} type="button" onClick={onButtonClick} value="Delete" />
    </div>
  );
};

export default TextBoxButton;
