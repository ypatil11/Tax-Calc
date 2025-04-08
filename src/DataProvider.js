import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [formData, setFormData] = useState({
    personalData: {},
    incomeData: {},
    sCorpExpenses: {},
    reasonableSalary: {}
  });

  return (
    <DataContext.Provider value={{ formData, setFormData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}