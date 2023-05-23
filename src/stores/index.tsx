import * as React from 'react';

import { PropsWithChildren } from 'types';
import { IAuthStore } from './auth';
import { useRouter } from 'next/router';

interface IStores {
  authStore: IAuthStore;
}

const StoresContext = React.createContext<IStores>(null as any);

export const useStores = () => React.useContext(StoresContext);

export const StoresContextProvider = ({
  children,
  ...stores
}: PropsWithChildren<IStores>) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);

export const useUser = (redirectTo?: string) => {
  const router = useRouter();
  const {
    authStore: { user },
  } = useStores();

  if (!user && redirectTo) {
    router.push(redirectTo);
  }

  return { user };
};
