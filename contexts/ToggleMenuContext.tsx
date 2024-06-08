import { createContext, useContext, useState, ReactNode } from 'react';

interface ToggleMenuContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ToggleMenuContext = createContext<ToggleMenuContextType | undefined>(undefined);

export const ToggleMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};

export const useToggleMenu = () => {
  const context = useContext(ToggleMenuContext);
  if (!context) {
    throw new Error('useToggleMenu must be used within a ToggleMenuProvider');
  }
  return context;
};