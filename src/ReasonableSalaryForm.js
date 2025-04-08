// // Step 4:

import React, { useState, useEffect } from 'react';
import { useData } from './DataProvider';

function ReasonableSalaryForm() {
  const { formData, setFormData } = useData();
  const [result, setResult] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let timer;
    if (submitted) {
      // After 5 seconds, go back to Step 1 and clear data
      timer = setTimeout(() => {
        setFormData({
          step: 1,
          personalData: {},
          incomeData: {},
          sCorpExpenses: {},
          reasonableSalary: {}
        });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitted, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');

    // Build FormData from our global formData object
    const fd = new FormData(e.target);
    fd.append('access_key', 'e385a595-8845-46ca-886c-65650c98df70'); // your Web3Forms key

    // Append each set of data fields from formData
    // Example: flatten personalData, incomeData, etc.
    if (formData.personalData) {
      Object.entries(formData.personalData).forEach(([key, value]) => {
        fd.append(`personalData[${key}]`, value);
      });
    }
    if (formData.incomeData) {
      Object.entries(formData.incomeData).forEach(([key, value]) => {
        fd.append(`incomeData[${key}]`, value);
      });
    }
    if (formData.sCorpExpenses) {
      Object.entries(formData.sCorpExpenses).forEach(([key, value]) => {
        fd.append(`sCorpExpenses[${key}]`, value);
      });
    }
    if (formData.reasonableSalary) {
      Object.entries(formData.reasonableSalary).forEach(([key, value]) => {
        fd.append(`reasonableSalary[${key}]`, value);
      });
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd
      });
      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        setSubmitted(true);
      } else {
        console.error('Submission failed:', data.message);
        setResult(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('Error submitting form');
    }
  };

  if (submitted) {
    return (
      <>
        <h2>All data has been submitted successfully!</h2>
        {/* If you want to show the final data: */}
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
        <p>Resetting to Step 1 in 5 seconds...</p>
        <p>{result}</p>
      </>
    );
  }

  // For Step 4, we also track local input changes so they’re in formData
  const handleChange = (e) => {
    setFormData({
      ...formData,
      reasonableSalary: {
        ...formData.reasonableSalary,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Please enter your final details for a reasonable salary.</p>
      <label>
        Reasonable Salary:
        <input
          type="number"
          name="salaryAmount"
          value={formData.reasonableSalary?.salaryAmount || ''}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      {/* If you want to link a known field from step1 (like name/email) to show:
           <input type="hidden" name="name" value={formData.personalData?.name || ''} />
        etc. */}
      <button type="submit">Submit</button>
      <p>{result}</p>
    </form>
  );
}

export default ReasonableSalaryForm;