import React, { createContext, useState, useContext, ReactNode } from 'react';

type Friend = {
  name: string;
  mode: string;
};

type FriendContextType = [friends: Friend[], setFriends: React.Dispatch<React.SetStateAction<Friend[]>>];

const data: Friend[] = [
  {
    name: "asasdsad",
    mode: "inner"
  }
];

const AuthContext = createContext<FriendContextType | undefined>(undefined);

interface FriendProviderProps {
  children: ReactNode;
}

export const FriendContext: React.FC<FriendProviderProps> = ({ children }) => {
  const [friends, setFriends] = useState<Friend[]>(data);

  return (
    <AuthContext.Provider value={[friends, setFriends]}>
      {children}
    </AuthContext.Provider>
  );
};

export function useFriendContext(): FriendContextType {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useFriendContext must be used within a FriendContext');
  }

  return context;
}