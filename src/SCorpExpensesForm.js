//Step 3:

import React from 'react';
import { useData } from './DataProvider';

function SCorpExpensesForm() {
  const { formData, setFormData } = useData();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      sCorpExpenses: {
        ...formData.sCorpExpenses,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <form>
      <label>
        General Expenses:
        <input
          type="number"
          name="generalExpenses"
          value={formData.sCorpExpenses?.generalExpenses || ''}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Owner's Withdrawals:
        <input
          type="number"
          name="ownersWithdrawals"
          value={formData.sCorpExpenses?.ownersWithdrawals || ''}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Extra Fund Distribution:
        <input
          type="number"
          name="extraFundDistribution"
          value={formData.sCorpExpenses?.extraFundDistribution || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* No submit */}
    </form>
  );
}

export default SCorpExpensesForm;