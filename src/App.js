
// Step 1:

// import React from 'react';
// import { useData } from './DataProvider';
// import Header from './Header';
// import PersonalDataForm from './PersonalDataForm';
// import IncomeForm from './IncomeForm';
// import SCorpExpensesForm from './SCorpExpensesForm';
// import ReasonableSalaryForm from './ReasonableSalaryForm';

// function App() {
//   const { formData, setFormData } = useData();

//   // Read wizard step from global form data
//   const step = formData.step || 1;

//   const setStep = (newStep) => {
//     setFormData({ ...formData, step: newStep });
//   };

//   const goNext = () => setStep(Math.min(step + 1, 4));
//   const goPrevious = () => setStep(Math.max(step - 1, 1));

//   return (
//     <div>
//       <div className="wizard-container">
//         <div
//           className={`wizard-step ${step > 1 ? 'completed' : ''} ${
//             step === 1 ? 'active' : ''
//           }`}
//         >
//           <span>Step 1</span>
//         </div>
//         <div
//           className={`wizard-step ${step > 2 ? 'completed' : ''} ${
//             step === 2 ? 'active' : ''
//           }`}
//         >
//           <span>Step 2</span>
//         </div>
//         <div
//           className={`wizard-step ${step > 3 ? 'completed' : ''} ${
//             step === 3 ? 'active' : ''
//           }`}
//         >
//           <span>Step 3</span>
//         </div>
//         <div
//           className={`wizard-step ${step > 4 ? 'completed' : ''} ${
//             step === 4 ? 'active' : ''
//           }`}
//         >
//           <span>Step 4</span>
//         </div>
//         <div className="wizard-line"></div>
//       </div>

//       {step === 1 && <PersonalDataForm />}
//       {step === 2 && <IncomeForm />}
//       {step === 3 && <SCorpExpensesForm />}
//       {step === 4 && <ReasonableSalaryForm />}

//       <div style={{ marginTop: '1rem' }}>
//         <button onClick={goPrevious} disabled={step === 1}>
//           Previous
//         </button>
//         <button onClick={goNext} disabled={step === 4}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useData } from './DataProvider';
import Header from './Header'; // Import the Header component
import PersonalDataForm from './PersonalDataForm';
import IncomeForm from './IncomeForm';
import SCorpExpensesForm from './SCorpExpensesForm';
import ReasonableSalaryForm from './ReasonableSalaryForm';

function App() {
  const { formData, setFormData } = useData();

  // Read wizard step from global form data
  const step = formData.step || 1;

  const setStep = (newStep) => {
    setFormData({ ...formData, step: newStep });
  };

  const goNext = () => setStep(Math.min(step + 1, 4));
  const goPrevious = () => setStep(Math.max(step - 1, 1));

  return (
    <div>
      <Header /> {/* Render the Header component here */}
      <div className="wizard-container">
        <div
          className={`wizard-step ${step > 1 ? 'completed' : ''} ${
            step === 1 ? 'active' : ''
          }`}
        >
          <span>Step 1</span>
        </div>
        <div
          className={`wizard-step ${step > 2 ? 'completed' : ''} ${
            step === 2 ? 'active' : ''
          }`}
        >
          <span>Step 2</span>
        </div>
        <div
          className={`wizard-step ${step > 3 ? 'completed' : ''} ${
            step === 3 ? 'active' : ''
          }`}
        >
          <span>Step 3</span>
        </div>
        <div
          className={`wizard-step ${step > 4 ? 'completed' : ''} ${
            step === 4 ? 'active' : ''
          }`}
        >
          <span>Step 4</span>
        </div>
        <div className="wizard-line"></div>
      </div>

      {step === 1 && <PersonalDataForm />}
      {step === 2 && <IncomeForm />}
      {step === 3 && <SCorpExpensesForm />}
      {step === 4 && <ReasonableSalaryForm />}

      <div style={{ marginTop: '1rem' }}>
        <button onClick={goPrevious} disabled={step === 1}>
          Previous
        </button>
        <button onClick={goNext} disabled={step === 4}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
