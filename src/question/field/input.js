import React from 'react';

const Input= ({
  id,
  type,
  value,
  isFocused,
  onFieldChange,
}) => {
  return (
    <>
      <input
        id={id}
        type={type}
        size={60}
        maxLength={100}
        value={value}
        autoFocus={isFocused}
        onChange={onFieldChange}
      /> 
      <br />
    </>
  );
}

export default Input;
