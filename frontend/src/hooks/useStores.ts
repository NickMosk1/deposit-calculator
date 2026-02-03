import { StoreContext } from '@/stores';
import { useContext } from 'react';

export const useStores = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};
