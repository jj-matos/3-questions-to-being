// Inspiration from 
// https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968

import * as React from 'react';

import Steps from '../steps/';

import '../stylesheets/App.css';

const initialData = {
  vision:'',
  purpose1:'',
  purpose2:'',
  purpose3:'',
  value1:'',
  value2:'',
  value3:'',
  value4:'',
  value5:'',
}

const App = () => {

  // go back to previous step
  const handlePrevious = (event) => {
    setStep(step-1);

    event.preventDefault();
  }

  // proceed to the next step
  const handleNext = (event) => {
    setStep(step+1);

    event.preventDefault();
  }

  const [data, setData] = React.useState(initialData);

  const [step, setStep] = React.useState(0);

  const [theme, setTheme] = React.useState('Dark');

  const [style, setStyle] = React.useState("dark");

  const handleFieldChange = (event) => {
    setData(oldState => ({...oldState, [event.target.id]:event.target.value}));   
  };

  const handleTheme = () => {
    const newTheme = theme=='Dark'?'Light':'Dark';
    const newStyle = newTheme=='Dark'?'dark':'light';
    setTheme(newTheme);
    setStyle(newStyle);
  }

  return (
    <div className={style}>
      <div className="section" >
        <div className="container">
          <div className='full-height justify-content-center'>
            <div className="card-3d-wrap mx-auto">
              <div className="center-wrap">
                <div className="section text-center">
                  <button 
                    className='button'
                    onClick={handleTheme}
                  >
                    Switch To {theme=='Dark'?'Light':'Dark'} Theme
                  </button>
                  <Steps 
                    data={data}
                    step={step}
                    onFieldChange={handleFieldChange} 
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

export { Steps };


