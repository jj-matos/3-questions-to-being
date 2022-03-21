import React from 'react';
import Input from './field/input';

const Question2 = ({data, onFieldChange}) => {
  return (
    <div>
      <h1>Question 2 - What Is the Purpose Of Your Vision?</h1>
      <p>Explain to yourself WHY you want to transmute into the Vision you just described. Give 3 reasons.</p>
      <p>Your Purpose:</p>
      <ol>
        <li>
          <Input
            id="purpose1"
            type="text"
            value={data.purpose1}
            isFocused
            onFieldChange={onFieldChange}
          >
          </Input>
        </li>
        <li>
          <Input 
            id="purpose2" 
            type="text" 
            value={data.purpose2}
            onFieldChange={onFieldChange}
          />
        </li>
        <li>
          <Input 
            id="purpose3" 
            type="text" 
            value={data.purpose3}
            onFieldChange={onFieldChange}
          />
        </li>
      </ol>
    </div>
  );
}

export default Question2;