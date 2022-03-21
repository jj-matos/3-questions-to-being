import React from 'react';

const Select = ({
  id,
  value,
  isFocused,
  onFieldChange,
}) => {
  return (
    <select
      id={id}
      autoFocus={isFocused}
      value={value}
      onChange={onFieldChange}
    >
      <option></option>
      <option>Adventure</option>
      <option>Comfort</option>
      <option>Freedom</option>
      <option>Health</option>
      <option>Intimacy</option>
      <option>Love</option>
      <option>Passion</option>
      <option>Power</option>
      <option>Security</option>
      <option>Success</option>
    </select>
  );
}

export default Select;