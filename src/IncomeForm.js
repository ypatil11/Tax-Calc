//Step 2:
import React from 'react';
import { useData } from './DataProvider';

function IncomeForm() {
  const { formData, setFormData } = useData();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      incomeData: {
        ...formData.incomeData,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <form>
      <label>
        Personal Income:
        <input
          type="number"
          name="personalIncome"
          value={formData.incomeData?.personalIncome || ''}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        S-Corp Income:
        <input
          type="number"
          name="sCorpIncome"
          value={formData.incomeData?.sCorpIncome || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* No submit */}
    </form>
  );
}

export default IncomeForm;