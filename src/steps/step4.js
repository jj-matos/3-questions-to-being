import * as React from 'react';

const Step4= ({data}) => {
  return (
    <>
      <h1>Your Life Map</h1>

      <h2>Your Vision</h2>

      <p>{data.vision}</p>

      <h2>Your Purpose</h2>

      <ol>
        <li>{data.purpose1}</li>
        <li>{data.purpose2}</li>
        <li>{data.purpose3}</li>
      </ol>

      <h2>Your Values</h2>

      <ol>
        <li>{data.value1}</li>
        <li>{data.value2}</li>
        <li>{data.value3}</li>
        <li>{data.value4}</li>
        <li>{data.value5}</li>
      </ol>     
    </>
  );
}

export default Step4;