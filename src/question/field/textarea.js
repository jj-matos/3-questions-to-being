import React from 'react';

const TextArea = ({
  id,
  value,
  isFocused,
  onFieldChange,
}) => {
  return (
    <>
      <textarea
        id={id}
        rows={3}
        cols={70}
        maxLength={100}
        value={value}
        autoFocus={isFocused}
        onChange={onFieldChange}
      > 
      </textarea>
    </> 
  );
}

export default TextArea;