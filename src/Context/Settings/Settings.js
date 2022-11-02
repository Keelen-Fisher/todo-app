import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  /* A hook that is used to set the state of the showCompleted variable. */
  /* Setting the state of the showCompleted variable. */
  const [showCompleted, setShowCompleted] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  /**
   * It takes the values of the variables showCompleted, pageItems, and sort, and saves them to local
   * storage.
   */
  const localSave = () => {
    localStorage.setItem('todo', JSON.stringify({ showCompleted, pageItems, sort }));
  }

  const values = {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
    localSave,
  }

  useEffect(() => {
    const memory = JSON.parse(localStorage.getItem('todo'));
    if (memory) {
      /* Setting the state of the variables showCompleted, pageItems, and sort to the values that are
      stored in local storage. */
      setShowCompleted(memory.showCompleted);
      setPageItems(memory.pageItems);
      setSort(memory.sort);
    }
  }, [])


  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
