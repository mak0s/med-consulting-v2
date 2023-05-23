import type { AppProps } from 'next/app';
import { useEffect, useRef } from 'react';

import { ServicesContextProvider } from 'services';
import { StoresContextProvider } from 'stores';
import { type IChatService, ChatService } from 'services/chat';
import { AuthStore, IAuthStore } from 'stores/auth';
import { AuthService, IAuthService } from 'services/auth';

export default function MyApp({ Component, pageProps }: AppProps) {
  const chatService = useRef<IChatService>(new ChatService());
  const authService = useRef<IAuthService>(new AuthService());

  const authStore = useRef<IAuthStore>(new AuthStore());

  useEffect(() => {
    console.log('reinit');
  }, []);

  return (
    <ServicesContextProvider
      chatService={chatService.current}
      authService={authService.current}
    >
      <StoresContextProvider authStore={authStore.current}>
        <Component {...pageProps} />
      </StoresContextProvider>
    </ServicesContextProvider>
  );
}
