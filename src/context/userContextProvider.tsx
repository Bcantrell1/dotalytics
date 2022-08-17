import { NextPage } from 'next';
import React, { createContext, ReactElement, ReactNode } from 'react';
import { useUser } from '../hooks';
import { User } from '@prisma/client';

export interface IUserContext {
  currentUser?: User & {
    followers: User[];
    following: User[];
  };
  mutate: Function;
  loading?: boolean;
}

export const UserContext = createContext<IUserContext>({
  mutate: (key: string) => {},
});

export const UserContextProvider: React.FC<{children: ReactNode}> = ({children}): ReactElement  => {
  const [user, { mutate, loading }] = useUser();

  return (
    <UserContext.Provider value={{ currentUser: user, mutate, loading }}>
      {children}
    </UserContext.Provider>
  );
};
