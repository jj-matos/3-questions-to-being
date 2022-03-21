import React from 'react';

import Step0 from './step0';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

const Steps = ({
  data,
  step,
  onFieldChange, 
  onPrevious,
  onNext,
}) => {
  switch (step) {
    case 0:
      return (
        <div>
          <form className='form-group form-style' >
            <Step0 />
            <button className='button' onClick={onNext}>Next</button>
          </form>
        </div>
      )
    case 1:
      return (
        <div>
          <form className='form-group form-style' onSubmit={onNext}>
            <Step1 data={data} onFieldChange={onFieldChange}/>
            <button className='button' onClick={onPrevious}>Previous</button>
            <button className='button' type="submit">Next</button>
          </form>         
        </div>
      )
    case 2:
      return (
        <div>
          <form className='form-group form-style' onSubmit={onNext}>
            <Step2 data={data} onFieldChange={onFieldChange}/>
            <button className='button' onClick={onPrevious}>Previous</button>
            <button className='button' type="submit">Next</button>
          </form>    
        </div>
      )
    case 3:
      return (
        <div>
          <form className='form-group form-style' onSubmit={onNext}>
            <Step3 data={data} onFieldChange={onFieldChange}/>
            <button className='button' onClick={onPrevious}>Previous</button>
            <button className='button' type="submit">Next</button>
          </form>    
        </div>
      )
    case 4:
      return (
        <div>
          <form className='form-group form-style' >
            <Step4 data={data} />
            <button className='button' onClick={onPrevious}>Previous</button>
          </form>    
        </div>
      )
    default:
  }
}

export default Steps;