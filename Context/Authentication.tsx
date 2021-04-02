import React, { useContext, createContext, FC, ReactNodeArray, useState } from 'react';

const authContext = createContext({});

export const useAuth = (): Record<string, unknown> => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  return { user };
};

interface ProviderProps {
  children: ReactNodeArray;
}

export const AuthProvider: FC<ProviderProps> = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
