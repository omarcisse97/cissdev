// src/contexts/LoadingContext.jsx
import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});

  // Global loading for page transitions
  const setLoading = (isLoading) => {
    setGlobalLoading(isLoading);
  };

  // Component-specific loading states
  const setComponentLoading = (componentId, isLoading) => {
    setLoadingStates(prev => ({
      ...prev,
      [componentId]: isLoading
    }));
  };

  // Get loading state for a specific component
  const isComponentLoading = (componentId) => {
    return loadingStates[componentId] || false;
  };

  // Clear all loading states
  const clearAllLoading = () => {
    setGlobalLoading(false);
    setLoadingStates({});
  };

  return (
    <LoadingContext.Provider value={{
      globalLoading,
      setLoading,
      setComponentLoading,
      isComponentLoading,
      clearAllLoading,
      loadingStates
    }}>
      {children}
    </LoadingContext.Provider>
  );
};