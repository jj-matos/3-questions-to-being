import React from 'react';

import Question2 from '../question/question2';

const Step2 = ({data, onFieldChange}) => {
  return (
    <>
      <Question2 data={data} onFieldChange={onFieldChange}/>
    </>
  );
}

export default Step2;