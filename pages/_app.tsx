import type { AppProps } from 'next/app';
import { useRef } from 'react';

import { ServicesContextProvider } from 'services';
import { StoresContextProvider } from 'stores';
import { type IChatService, ChatService } from 'services/chat';
import { AuthStore, IAuthStore } from 'stores/auth';
import { AuthService, IAuthService } from 'services/auth';
import { ConsultantStore, IConsultantStore } from 'stores/consultant';

export default function MyApp({ Component, pageProps }: AppProps) {
  const chatService = useRef<IChatService>(new ChatService());
  const authService = useRef<IAuthService>(new AuthService());

  const authStore = useRef<IAuthStore>(new AuthStore());
  const consultantStore = useRef<IConsultantStore>(new ConsultantStore());

  return (
    <ServicesContextProvider
      chatService={chatService.current}
      authService={authService.current}
    >
      <StoresContextProvider
        authStore={authStore.current}
        consultantStore={consultantStore.current}
      >
        <Component {...pageProps} />
      </StoresContextProvider>
    </ServicesContextProvider>
  );
}
