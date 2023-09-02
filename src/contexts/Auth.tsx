import React, { createContext, useState, useContext, ReactNode } from 'react';

type AuthContextType = [userInfo: any, setUserInfo: React.Dispatch<React.SetStateAction<any>>];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<any>(null);

  return (
    <AuthContext.Provider value={[userInfo, setUserInfo]}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}