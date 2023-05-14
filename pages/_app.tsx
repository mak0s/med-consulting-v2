import type { AppProps } from 'next/app';
import { useRef } from 'react';

import { ServicesContextProvider } from 'services';
import { type IChatService, ChatService } from 'services/chat';

export default function MyApp({ Component, pageProps }: AppProps) {
  const chatService = useRef<IChatService>(new ChatService());

  return (
    <ServicesContextProvider chatService={chatService.current}>
      <Component {...pageProps} />
    </ServicesContextProvider>
  );
}
