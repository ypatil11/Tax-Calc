// Step 1:

import React from 'react';
import { useData } from './DataProvider';

function PersonalDataForm() {
  const { formData, setFormData } = useData();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.personalData.name || ''} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} value={formData.personalData.email || ''} />
      </label>
      <br />
      {/* No submit here—just capture data */}
    </form>
  );
}

export default PersonalDataForm;