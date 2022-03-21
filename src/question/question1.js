import React from 'react';
import TextArea from './field/textarea';

const Question1 = ({data, onFieldChange}) => {
  return (
    <div>
      <h1>Question 1 - What Is Your Life Vision?</h1>
      <p>Describe your ideal life 5 years from now. Sum up "WHERE" do you want to be by then, in one sentence.</p>
      <p>Your Vision:</p>
      <TextArea
        id="vision"
        value={data.vision}
        isFocused
        onFieldChange={onFieldChange}
      >
      </TextArea>
    </div>
  );
}

export default Question1;