import { useContext, createContext, FC } from 'react';
import { IChatService } from './chat';
import { PropsWithChildren } from 'types';

interface IServices {
  chatService: IChatService;
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
