import React from 'react';
import Select from './field/select';

function Question3({data, onFieldChange}) {
  return (
    <div>
      <h1>Question 3 - Which Core Values Do You Choose To Guide You?</h1>
      <p>To define HOW you will get to your ideal being, select your life core values by order of importance. In other words, select what you want to experience in your daily life, making them habits you believe will move you towards your Vision.</p>
      <p>Your Values:</p>
      <ol>
        <li> 
          <Select 
            id="value1"
            value={data.value1}
            isFocused
            onFieldChange={onFieldChange}
          /> 
          <br /> 
        </li>
        <li>
          <Select 
            id="value2"
            value={data.value2}
            onFieldChange={onFieldChange}
          />
          <br /> 
        </li>
        <li>          
          <Select 
            id="value3"
            value={data.value3}
            onFieldChange={onFieldChange}
          />
          <br />
        </li>
        <li>          
          <Select 
            id="value4"
            value={data.value4}
            onFieldChange={onFieldChange}
          />
          <br />
        </li>
        <li>          
          <Select 
            id="value5"
            value={data.value5}
            onFieldChange={onFieldChange}
          />
          <br />
        </li>
      </ol>
    </div>
  );
}

export default Question3;