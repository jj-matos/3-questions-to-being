import React from 'react';

import Question1 from '../question/question1';

const Step1 = ({data, onFieldChange}) => {
  return (
    <>
      <Question1 data={data} onFieldChange={onFieldChange}/>
    </>
  );
}

export default Step1;