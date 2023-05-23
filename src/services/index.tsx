import { useContext, createContext, FC } from 'react';

import { PropsWithChildren } from 'types';
import { IChatService } from './chat';
import { IAuthService } from './auth';

interface IServices {
  chatService: IChatService;
  authService: IAuthService;
}

const ServicesContext = createContext<IServices>(null as any);

export const useServices = () => useContext(ServicesContext);

export const ServicesContextProvider = ({
  children,
  ...services
}: PropsWithChildren<IServices>) => (
  <ServicesContext.Provider value={services}>
    {children}
  </ServicesContext.Provider>
);
