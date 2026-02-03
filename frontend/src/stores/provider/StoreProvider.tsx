import { createContext, ReactNode, useState, useEffect } from 'react';
import CalculationStore from '../calculation.store';

interface StoreContextValue {
  calculationStore: CalculationStore;
};

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

interface StoreProviderProps {
  children: ReactNode;
};

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [stores, setStores] = useState<StoreContextValue | undefined>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calculationStore = new CalculationStore();
      setStores({ calculationStore });
    };
  }, []);

  if (!stores) return null;

  return (
    <StoreContext.Provider value={stores}>
      {children}
    </StoreContext.Provider>
  );
};
